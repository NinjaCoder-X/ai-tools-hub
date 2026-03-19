export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);

        // ==============================================================
        // 1. SECURE API ROUTE: Intercept requests to /api/gemini
        // ==============================================================
        if (url.pathname === '/api/gemini' && request.method === 'POST') {

            const headers = { 'Content-Type': 'application/json' };
            const API_KEY = env.GEMINI_API_KEY;

            // Safety check: Did we link the environment variable properly?
            if (!API_KEY) {
                return new Response(JSON.stringify({ error: "Server missing Gemini API Key. Check Cloudflare secrets." }), {
                    status: 500,
                    headers
                });
            }

            try {
                // Read the prompt data sent from your frontend gemini.js
                const body = await request.json();

                // Forward the request to Google securely
                const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
                const response = await fetch(geminiUrl, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(body)
                });

                const data = await response.json();

                // If Google rejects the request (e.g. quota limit, bad request), pass the error back nicely
                if (!response.ok) {
                    return new Response(JSON.stringify(data), {
                        status: response.status,
                        headers
                    });
                }

                // Success! Send the AI's answer back to your frontend
                return new Response(JSON.stringify(data), {
                    status: 200,
                    headers
                });

            } catch (error) {
                // Catch network failures or parsing crashes
                return new Response(JSON.stringify({ error: error.message || "Internal Server Error in Worker" }), {
                    status: 500,
                    headers
                });
            }
        }

        // ==============================================================
        // 2. STATIC ASSETS: Serve HTML, CSS, JS, and Images
        // ==============================================================
        try {
            // For every other URL, grab the file from your Cloudflare Pages/Assets deployment
            return await env.ASSETS.fetch(request);
        } catch (error) {
            // Fallback if an asset is completely missing
            return new Response("Not Found", { status: 404 });
        }
    }
};