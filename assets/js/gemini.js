/* ============================================
   AI Tools Hub - Gemini API Integration
   AI-Powered Features
   ============================================ */

class GeminiAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://generativelanguage.googleapis.com/v1beta/models';
    this.model = 'gemini-1.5-flash';
  }

  /**
   * Generate description for a tool
   */
  async generateDescription(toolName, toolUrl) {
    const prompt = `Generate a concise, professional description (2-3 sentences) for an AI tool called "${toolName}". 
    URL: ${toolUrl}
    Make it engaging and highlight key features. No marketing fluff.`;

    try {
      const response = await this.callGemini(prompt);
      return response;
    } catch (error) {
      console.error('Error generating description:', error);
      return null;
    }
  }

  /**
   * Generate keywords for a tool
   */
  async generateKeywords(toolName, description) {
    const prompt = `Generate 5-7 relevant keywords for this tool:
    Name: ${toolName}
    Description: ${description}
    
    Return only comma-separated keywords, no explanation.`;

    try {
      const response = await this.callGemini(prompt);
      return response;
    } catch (error) {
      console.error('Error generating keywords:', error);
      return null;
    }
  }

  /**
   * Suggest category for a tool
   */
  async suggestCategory(toolName, description) {
    const categories = window.DB_HELPERS.getCategories().join(', ');
    
    const prompt = `Based on this tool, suggest the MOST appropriate category from this list:
    ${categories}
    
    Tool: ${toolName}
    Description: ${description}
    
    Return ONLY the category name, nothing else.`;

    try {
      const response = await this.callGemini(prompt);
      return response;
    } catch (error) {
      console.error('Error suggesting category:', error);
      return null;
    }
  }

  /**
   * Process bulk data (AI Bulk Processor feature)
   */
  async processBulkData(rawData) {
    const prompt = `Convert this raw tool data into structured JSON format:
    
    ${rawData}
    
    Return a JSON array where each tool has:
    - name (string)
    - description (string, 2-3 sentences)
    - category (string, choose from: AI Tools, Development Tools, Design Tools, OSINT & Security, Business Tools, etc.)
    - tags (array of 3-5 strings)
    - keywords (string, comma-separated)
    
    Return ONLY valid JSON, no explanation.`;

    try {
      const response = await this.callGemini(prompt);
      // Try to parse JSON
      const jsonMatch = response.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      return null;
    } catch (error) {
      console.error('Error processing bulk data:', error);
      return null;
    }
  }

  /**
   * Core API call to Gemini
   */
  async callGemini(prompt) {
    const url = `${this.baseURL}/${this.model}:generateContent?key=${this.apiKey}`;
    
    const requestBody = {
      contents: [{
        parts: [{
          text: prompt
        }]
      }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      }
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        return data.candidates[0].content.parts[0].text.trim();
      }
      
      throw new Error('Invalid response from Gemini API');
      
    } catch (error) {
      console.error('Gemini API call failed:', error);
      throw error;
    }
  }

  /**
   * Check if API is working
   */
  async testConnection() {
    try {
      const response = await this.callGemini('Say "API working" if you can read this.');
      return response.toLowerCase().includes('api working');
    } catch (error) {
      return false;
    }
  }
}

// Initialize Gemini API when config is loaded
let geminiAPI = null;

function initGemini() {
  if (window.CONFIG?.gemini?.apiKey) {
    geminiAPI = new GeminiAPI(window.CONFIG.gemini.apiKey);
    console.log('✅ Gemini API initialized');
  } else {
    console.warn('⚠️ Gemini API key not configured');
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGemini);
} else {
  initGemini();
}

// Export
window.GeminiAPI = GeminiAPI;
window.geminiAPI = geminiAPI;