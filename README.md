<div align="center">

# 🚀 AI Tools Hub 

**The Ultimate Serverless, AI-Powered Directory Platform**

[![Cloudflare Pages](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](#)
[![Gemini API](https://img.shields.io/badge/Powered%20by-Gemini%203%20Flash-4285F4?style=for-the-badge&logo=google&logoColor=white)](#)
[![Vanilla JS](https://img.shields.io/badge/Built%20with-Vanilla%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)](#)

A blazing-fast, self-managing directory template built for the modern web. It leverages **Cloudflare Pages Functions** for a 100% serverless backend and uses **Google's Gemini 3 AI** to completely automate data entry, structuring, and verification.

[**Explore the Live Demo**](https://vihanga.dpdns.org) · [**Report Bug**](https://github.com/NinjaCoder-X/ai-tools-hub-Site/issues) · [**Request Feature**](https://github.com/NinjaCoder-X/ai-tools-hub-Site/issues)

</div>

---

## 📸 See It In Action

*(Note to Vihanga: Replace these placeholder image links with actual GIFs of your site recording using a tool like [LiceCap](https://www.cockos.com/licecap/) or [Giphy Capture](https://giphy.com/apps/giphycapture))*

| 🤖 AI Bulk Processor | 🎨 Fluid Dark Mode |
|:---:|:---:|
| <img src="https://via.placeholder.com/400x250.gif?text=Record+a+GIF+of+AI+Processing+Here" width="100%"> | <img src="https://via.placeholder.com/400x250.gif?text=Record+a+GIF+of+Theme+Switch+Here" width="100%"> |
| *Paste raw text, get perfectly structured JSON via Gemini 3.* | *Zero-flicker theme switching with glassmorphism UI.* |

---

## ✨ Enterprise-Grade Features

### 🧠 Native AI Automation (Gemini 3)
* **Bulk Data Processor:** Paste unstructured text. The Cloudflare backend uses strict JSON Schema enforcement to automatically extract tools, write descriptions, and assign tags.
* **Smart Verification:** AI checks if submitted URLs are legitimate and generates a confidence score.
* **Auto-Categorization:** AI suggests the perfect category for new submissions.

### ⚡ 100% Serverless Edge Architecture
* **Cloudflare Pages Functions:** The frontend is static, while the backend API runs directly on Cloudflare's edge nodes.
* **Zero Exposed Keys:** The Gemini API key is securely stored in Cloudflare's environment variables, completely hidden from the browser.
* **Lightning Fast:** Global CDN delivery ensures < 1s First Contentful Paint.

### 💰 Built-In Monetization Engine
* **Native "Honeypot" Adblock Detector:** Identifies adblockers reliably without third-party scripts and triggers a beautifully styled, dismissible modal.
* **Double-Routing System:** A "Click to Continue" redirect mechanism that guarantees a 100% ad-fill rate (via Monetag/AdSense) while bypassing popup blockers.
* **Sponsorship Ready:** Pre-built native ad slots designed to blend with the UI.

### 👤 Seamless User Experience
* **Zero-Flicker Authentication:** Email + Google Auth via Firebase.
* **Personalization:** Users can save favorites, create collections, and export their lists.
* **Ultra-Modern UI:** 2025 design standards, glassmorphism, and 50+ custom CSS animations.

---

## 🛠️ Tech Stack & Architecture

### The Frontend (Speed & Beauty)
* **HTML5 & CSS3:** Semantic markup with custom CSS properties (Tailwind principles).
* **Vanilla JS:** ES6+ modules. Zero heavy frameworks (No React/Vue overhead).

### The Backend (Security & Power)
* **Cloudflare Pages Functions (`/functions/api`)**: Handles secure API proxying.
* **Google GenAI REST API**: `gemini-3-flash-preview` for intelligent processing.
* **Firebase**: Authentication & Firestore Database.

<details>
<summary>📂 View Complete Folder Structure</summary>

```text
ai-tools-hub/
│
├── functions/
│   └── api/                  # 🔒 Cloudflare Serverless Backend
│       └── gemini.js         # Secure API proxy & JSON Schema logic
│
├── assets/
│   ├── css/
│   │   ├── themes.css        # Color system & variables
│   │   ├── main.css          # Core styles & components
│   │   └── animations.css    # 50+ UI animations
│   ├── js/
│   │   ├── config.js         # Public Firebase configuration
│   │   ├── gemini.js         # Frontend AI integration wrapper
│   │   ├── detector.js       # Honeypot Adblock logic
│   │   └── ads.js            # Adblock bait file
│   └── images/
│
├── index.html                # Main App Interface
├── admin.html                # Admin Control Center & Bulk Processor
├── redirects.html            # Smart Monetization Routing
├── _headers                  # Cloudflare caching rules
├── wrangler.jsonc            # Cloudflare Pages configuration
└── README.md                 
```
</details>

---

## 🚀 Quick Start Guide

Want to host your own AI-powered directory? It takes less than 5 minutes.

### 1. Clone & Configure Firebase
```bash
git clone [https://github.com/NinjaCoder-X/ai-tools-hub-Site.git](https://github.com/NinjaCoder-X/ai-tools-hub-Site.git)
cd ai-tools-hub-Site
```
Edit `assets/js/config.js` and add your public Firebase credentials. *(Note: Do NOT put your Gemini API key in this file!)*

### 2. Deploy to Cloudflare Pages
1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Go to **Workers & Pages** -> **Create Application** -> **Pages** -> **Connect to Git**.
3. Select this repository.
4. Leave the build settings exactly as they are (Framework: None, Build command: empty).
5. Click **Save and Deploy**.

### 3. Secure Your AI Brain
1. Get a free API key from [Google AI Studio](https://aistudio.google.com/).
2. In your new Cloudflare Project, go to **Settings** -> **Environment variables**.
3. Add a variable named `GEMINI_API_KEY` and paste your key.
4. **CRITICAL:** Go to the **Deployments** tab and click **Retry deployment**. Cloudflare requires a fresh build to inject the secure key into the backend functions.

### 4. Local Development
To run the full-stack environment locally (including the Cloudflare Functions):
```bash
# 1. Create a secure local variables file
echo 'GEMINI_API_KEY="your-api-key-here"' > .dev.vars

# 2. Run the local Cloudflare dev server
npx wrangler pages dev .
```

---

## 🔒 Security & Performance Highlights

* **API Obfuscation:** The Google Gemini API key never touches the user's browser. All requests are routed through `functions/api/gemini.js`.
* **Strict Output Parsing:** The backend utilizes `responseMimeType: "application/json"` and mathematical `response_schema` mapping to guarantee the AI never returns conversational text that could crash the UI.
* **Edge Caching:** Aggressive `_headers` caching rules combined with Cloudflare's CDN ensures instant asset delivery globally.

---

## 🤝 Connect with the Creator

Created and maintained by **NinjaCoder-X** (Vihanga Sithum). 
If you found this architecture helpful or are using the template, please consider giving it a ⭐!

* 📸 **Instagram:** [@heyitsvihanga](https://www.instagram.com/heyitsvihanga/)
* 👤 **Facebook:** [Vihanga](https://www.facebook.com/heyitsvihanga/)
* ☕ **Support the Project:** [Buy Me a Coffee](https://buymeacoffee.com/heyitsvihanga)

---

<div align="center">
  <i>Built with passion for the open-source community. <br> Made with ❤️ by Vihanga Sithum.</i>
</div>