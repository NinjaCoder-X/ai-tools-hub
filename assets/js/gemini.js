/* ============================================
   AI Tools Hub - Gemini AI Integration
   ============================================ */

class GeminiAPI {
  constructor() {
    // We no longer need an API key here! We call our secure local endpoint.
    this.baseURL = '/api/gemini';
  }

  async call(prompt) {
    const res = await fetch(this.baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 1024 }
      })
    });

    if (!res.ok) {
      try {
        const errorData = await res.json();
        throw new Error(errorData.error || `HTTP Error: ${res.status}`);
      } catch(e) {
        throw new Error(`API error: ${res.status}`);
      }
    }

    const data = await res.json();
    if (data.error) {
      const errorMsg = typeof data.error === 'object' ? data.error.message : data.error;
      throw new Error(errorMsg || "Unknown Google API Error");
    }

    return data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || null;
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
    const prompt = `Convert this raw tool data to a JSON array. Each tool needs: name, description (2-3 sentences), category, tags (array), keywords (comma string), link. Verify URLs look real. Return ONLY a valid JSON array, without any markdown formatting.\n\nData:\n${rawData}`;

    const result = await this.call(prompt);
    if (!result) return null;

    try {
      // Strip markdown code blocks if Gemini includes them
      const cleaned = result.replace(/```json\n?/gi, '').replace(/```\n?/g, '').trim();
      const match = cleaned.match(/\[[\s\S]*\]/);
      return match ? JSON.parse(match[0]) : JSON.parse(cleaned);
    } catch (e) {
      console.error("Failed to parse bulk data JSON:", e, "Raw output:", result);
      throw new Error("AI returned invalid JSON data. Please try again.");
    }
  }

  async verifyTool(name, url, desc) {
    const prompt = `Verify if this tool is legitimate:
Name: ${name}
URL: ${url}
Description: ${desc}

Check if:
1. Name is real and not gibberish
2. URL looks legitimate
3. Description makes sense

Return ONLY a raw JSON object with no markdown formatting: {"valid": true/false, "confidence": 0-100, "reason": "explanation"}`;

    const result = await this.call(prompt);
    if (!result) return { valid: false, confidence: 0, reason: 'No response from AI' };

    try {
      // Strip markdown code blocks if Gemini includes them
      const cleaned = result.replace(/```json\n?/gi, '').replace(/```\n?/g, '').trim();
      const match = cleaned.match(/\{[\s\S]*\}/);
      return match ? JSON.parse(match[0]) : JSON.parse(cleaned);
    } catch (e) {
      console.error("Failed to parse verify tool JSON:", e, "Raw output:", result);
      return { valid: false, confidence: 0, reason: 'Parse error from AI response' };
    }
  }
}

window.geminiAPI = new GeminiAPI();