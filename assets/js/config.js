/* ============================================
   AI Tools Hub - Configuration
   Created by NinjaCoder-X
   ============================================ */

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfHNz-1t9wZT1W2fZfKTdBHzHeZwqiCLs",
  authDomain: "ai-tools-hub-bd40e.firebaseapp.com",
  projectId: "ai-tools-hub-bd40e",
  storageBucket: "ai-tools-hub-bd40e.firebasestorage.app",
  messagingSenderId: "41654847803",
  appId: "1:41654847803:web:76274d905ab5d1ec114f1e"
};

// Gemini API Configuration
const geminiConfig = {
  model: "gemini-1.5-flash"
};

// Admin Configuration
const adminConfig = {
  adminEmail: "vvsithum241@gmail.com"
};

// App Configuration
const appConfig = {
  appName: "AI Tools Hub",
  appVersion: "2.0.0",
  appUrl: "https://vihanga.dpdns.org",
  creatorName: "NinjaCoder-X",
  socialLinks: {
    facebook: "https://www.facebook.com/heyitsvihanga/",
    instagram: "https://www.instagram.com/heyitsvihanga/"
  }
};

// Export
window.CONFIG = {
  firebase: firebaseConfig,
  gemini: geminiConfig,
  admin: adminConfig,
  app: appConfig
};