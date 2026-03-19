export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);

        // 1. Intercept requests to our secure AI endpoint
        if (url.pathname === '/api/gemini' && request.method === 'POST') {

            const API_KEY = env.GEMINI_API_KEY;
            if (!API_KEY) {
                return new Response(JSON.stringify({ error: "Server missing Gemini API Key" }), {
                    status: 500, headers: { 'Content-Type': 'application/json' }
                });
            }

            try {
                const body = await request.json();

                // Forward to Google securely
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                });

                const data = await response.json();
                return new Response(JSON.stringify(data), {
                    headers: { 'Content-Type': 'application/json' }
                });

            } catch (error) {
                return new Response(JSON.stringify({ error: error.message }), {
                    status: 500, headers: { 'Content-Type': 'application/json' }
                });
            }
        }

        // 2. If it's not an API request, serve the static HTML/CSS/JS files
        return env.ASSETS.fetch(request);
    }
};