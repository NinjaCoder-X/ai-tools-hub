/* ============================================
   AI Tools Hub - Gemini AI Integration (Secure)
   ============================================ */

class GeminiAPI {
  constructor() {
    this.baseURL = '/api/gemini';
  }

  // Updated to accept an optional schema object for strict JSON enforcing
  async call(prompt, schema = null) {
    try {
      const config = { temperature: 0.7, maxOutputTokens: 2048 };

      // If a schema is provided, lock the AI into strict JSON output mode
      if (schema) {
        config.responseMimeType = "application/json";
        config.responseJsonSchema = schema;
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
    const prompt = `You are a data extraction API. Convert this raw tool data into a structured array of tools.
If a URL is missing or fake, do your best to infer it or leave it as provided.

Raw Data:
${rawData}`;

    // Define the exact JSON blueprint Google requires
    const schema = {
      type: "array",
      description: "A list of digital tools extracted from the raw text.",
      items: {
        type: "object",
        properties: {
          name: { type: "string", description: "The name of the tool." },
          description: { type: "string", description: "A 2-3 sentence professional description." },
          category: { type: "string", description: "The primary category for this tool." },
          tags: {
            type: "array",
            items: { type: "string" },
            description: "A list of relevant tags (e.g., 'ai', 'free', 'beta')."
          },
          keywords: { type: "string", description: "A space-separated list of search keywords." },
          link: { type: "string", description: "The URL to access the tool." }
        },
        required: ["name", "description", "category", "tags", "keywords", "link"]
      }
    };

    const result = await this.call(prompt, schema);
    if (!result) return null;

    try {
      return JSON.parse(result);
    } catch (e) {
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
3. Description makes sense`;

    // Define the exact JSON blueprint Google requires
    const schema = {
      type: "object",
      properties: {
        valid: { type: "boolean", description: "True if the tool appears legitimate, false otherwise." },
        confidence: { type: "integer", description: "A score from 0 to 100 indicating confidence in the verification." },
        reason: { type: "string", description: "A short explanation of why it was marked valid or invalid." }
      },
      required: ["valid", "confidence", "reason"]
    };

    const result = await this.call(prompt, schema);
    if (!result) return { valid: false, confidence: 0, reason: 'No response from AI' };

    try {
      return JSON.parse(result);
    } catch (e) {
      return { valid: false, confidence: 0, reason: 'Parse error from AI response' };
    }
  }
}

window.geminiAPI = new GeminiAPI();