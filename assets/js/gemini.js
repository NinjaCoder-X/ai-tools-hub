/* ============================================
   AI Tools Hub - Gemini AI Integration (Secure)
   ============================================ */

class GeminiAPI {
  constructor() {
    this.baseURL = '/api/gemini';
  }

  // Added a second parameter 'expectJson' to force the AI into JSON mode
  async call(prompt, expectJson = false) {
    try {
      const config = { temperature: 0.7, maxOutputTokens: 2048 };

      // If we need structured data, force Google to ONLY return valid JSON
      if (expectJson) {
        config.responseMimeType = "application/json";
      }

      const res = await fetch(this.baseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: config
        })
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        const errorMsg = data.error?.message || data.error || `HTTP Error: ${res.status}`;
        throw new Error(errorMsg);
      }

      return data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || null;

    } catch (error) {
      throw new Error(error.message);
    }
  }

  async generateDescription(name, url) {
    return this.call(`Write a 2-3 sentence professional description for the tool "${name}" (${url}). Be concise and highlight key features.`);
  }

  async generateKeywords(name, desc) {
    return this.call(`Generate 5-7 comma-separated keywords for: ${name} - ${desc}`);
  }

  async suggestCategory(name, desc) {
    const cats = 'AI Tools, Development Tools, Design Tools, OSINT & Security, Business Tools, Productivity, Learning Resources, Video Tools, Audio Tools, Social Media Tools';
    return this.call(`From these categories: ${cats}\n\nWhich fits best for: ${name} - ${desc}\n\nReturn ONLY the category name.`);
  }

  async processBulkData(rawData) {
    const prompt = `You are a data extraction API. Convert this raw tool data into a JSON array of objects. 
Each object must have exactly these keys: "name" (string), "description" (string, 2-3 sentences), "category" (string), "tags" (array of strings), "keywords" (string of space-separated words), "link" (string URL).
If a URL is missing or fake, do your best to infer or leave it as provided. YOU MUST RETURN ONLY A VALID JSON ARRAY.

Raw Data:
${rawData}`;

    // Pass 'true' to trigger JSON mode
    const result = await this.call(prompt, true);
    if (!result) return null;

    try {
      return JSON.parse(result);
    } catch (e) {
      // Iron-clad fallback in case it still injects markdown somehow
      try {
        const cleaned = result.replace(/```json\n?/gi, '').replace(/```\n?/g, '').trim();
        const startIndex = cleaned.indexOf('[');
        const endIndex = cleaned.lastIndexOf(']');
        if (startIndex !== -1 && endIndex !== -1) {
          return JSON.parse(cleaned.substring(startIndex, endIndex + 1));
        }
      } catch (err) { }

      // Show exactly what the AI returned so we aren't guessing blindly
      throw new Error(`Failed to parse. AI Output snippet: ${result.substring(0, 80)}...`);
    }
  }

  async verifyTool(name, url, desc) {
    const prompt = `You are a verification API. Verify if this tool is legitimate:
Name: ${name}
URL: ${url}
Description: ${desc}

Check if:
1. Name is real and not gibberish
2. URL looks legitimate
3. Description makes sense

Return ONLY a valid JSON object with exactly these keys: "valid" (boolean), "confidence" (number 0-100), "reason" (string explanation).`;

    // Pass 'true' to trigger JSON mode
    const result = await this.call(prompt, true);
    if (!result) return { valid: false, confidence: 0, reason: 'No response from AI' };

    try {
      return JSON.parse(result);
    } catch (e) {
      try {
        const cleaned = result.replace(/```json\n?/gi, '').replace(/```\n?/g, '').trim();
        const startIndex = cleaned.indexOf('{');
        const endIndex = cleaned.lastIndexOf('}');
        if (startIndex !== -1 && endIndex !== -1) {
          return JSON.parse(cleaned.substring(startIndex, endIndex + 1));
        }
      } catch (err) { }
      return { valid: false, confidence: 0, reason: 'Parse error from AI response' };
    }
  }
}

window.geminiAPI = new GeminiAPI();