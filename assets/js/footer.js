const footerHTML = `
<footer class="creator-footer footer-reveal">
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-brand">
                <h3>🚀 AI Tools Hub</h3>
                <p>Your ultimate directory for AI-powered tools, OSINT resources, and development platforms. Curated with ❤️ by NinjaCoder-X.</p>
            </div>
            
            <div class="social-links">
                <a href="https://github.com/NinjaCoder-X/ai-tools-hub-Site" target="_blank" class="social-link github bubble-float" title="GitHub Repository">
                    <span class="social-float">🐙</span>
                </a>
                <a href="https://www.instagram.com/heyitsvihanga/" target="_blank" class="social-link instagram bubble-float" title="Instagram">
                    <span class="social-float">📸</span>
                </a>
                <a href="https://www.facebook.com/heyitsvihanga/" target="_blank" class="social-link facebook bubble-float" title="Facebook">
                    <span class="social-float">📘</span>
                </a>
            </div>
            
            <div class="footer-actions">
                <a href="contact.html" class="btn btn-primary hover-scale">Contact Creator</a>
                <a href="https://github.com/NinjaCoder-X/ai-tools-hub-Site" target="_blank" class="btn btn-secondary hover-scale">View Source Code</a>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>© ${new Date().getFullYear()} AI Tools Hub. Created by <strong>NinjaCoder-X</strong> | All Rights Reserved</p>
        </div>
    </div>
</footer>
`;

const footerElement = document.getElementById('site-footer');
if (footerElement) {
    footerElement.outerHTML = footerHTML;
}