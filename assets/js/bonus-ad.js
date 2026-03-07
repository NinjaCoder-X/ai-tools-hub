// assets/js/bonus-ad.js

document.addEventListener('DOMContentLoaded', () => {
    // Put your Monetag Direct Link here inside the quotes:
    const MONETAG_DIRECT_LINK = "https://omg10.com/4/10695437";

    // Build the Floating Gift Box
    const bonusBtn = document.createElement('a');
    bonusBtn.href = MONETAG_DIRECT_LINK;
    bonusBtn.target = "_blank"; // Opens ad in new tab so they don't lose your site
    bonusBtn.innerHTML = "🎁";

    // Style it to float in the bottom right corner
    Object.assign(bonusBtn.style, {
        position: 'fixed',
        bottom: '25px',
        right: '25px',
        background: 'var(--bg-gradient-1)',
        padding: '15px 18px',
        borderRadius: '50%',
        boxShadow: 'var(--shadow-2xl)',
        zIndex: '9999',
        fontSize: '2rem',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid rgba(255,255,255,0.2)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
    });

    // Add a hover effect
    bonusBtn.onmouseover = () => bonusBtn.style.transform = 'scale(1.1) rotate(10deg)';
    bonusBtn.onmouseout = () => bonusBtn.style.transform = 'scale(1) rotate(0deg)';

    // Inject it into the page
    document.body.appendChild(bonusBtn);
});