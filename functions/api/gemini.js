export async function onRequestPost({ request, env }) {
    try {
        // Grab the key from Cloudflare's secure environment variables
        const API_KEY = env.GEMINI_API_KEY;

        if (!API_KEY) {
            return new Response(JSON.stringify({ error: "Server missing Gemini API Key. Check Cloudflare secrets." }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Parse the incoming request from your frontend
        const body = await request.json();

        // Call Google
        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
        const response = await fetch(geminiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        // Return the response directly to the frontend
        return new Response(JSON.stringify(data), {
            status: response.status,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: error.message || "Internal Server Error" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}