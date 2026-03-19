export async function onRequestPost(context) {
  try {
    // Get the API key securely from Cloudflare environment variables
    const API_KEY = context.env.GEMINI_API_KEY;
    
    if (!API_KEY) {
      return new Response(JSON.stringify({ error: "API key not configured on server" }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get the prompt data sent from the frontend
    const body = await context.request.json();

    // Forward the request to the real Google Gemini API
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    
    // Send the AI's response back to our frontend
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}