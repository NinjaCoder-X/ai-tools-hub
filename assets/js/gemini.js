/* ============================================
   AI Tools Hub - Gemini AI Integration
   ============================================ */

class GeminiAPI {
    constructor() {
        this.apiKey = window.CONFIG?.gemini?.apiKey;
        this.model = 'gemini-1.5-flash';
        this.baseURL = 'https://generativelanguage.googleapis.com/v1beta/models';
    }

    async call(prompt) {
        if (!this.apiKey) throw new Error('API key not configured');
        
        const res = await fetch(`${this.baseURL}/${this.model}:generateContent?key=${this.apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { temperature: 0.7, maxOutputTokens: 1024 }
            })
        });
        
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        
        const data = await res.json();
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
        const prompt = `Convert this raw tool data to JSON array. Each tool needs: name, description (2-3 sentences), category, tags (array), keywords (comma string), link. Verify URLs look real. Return ONLY valid JSON array.\n\nData:\n${rawData}`;
        
        const result = await this.call(prompt);
        const match = result?.match(/\[[\s\S]*\]/);
        return match ? JSON.parse(match[0]) : null;
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

Return JSON: {"valid": true/false, "confidence": 0-100, "reason": "explanation"}`;

        const result = await this.call(prompt);
        const match = result?.match(/\{[\s\S]*\}/);
        return match ? JSON.parse(match[0]) : { valid: false, confidence: 0, reason: 'Parse error' };
    }
}

window.geminiAPI = new GeminiAPI();