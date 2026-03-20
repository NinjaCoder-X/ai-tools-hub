/* ============================================
   AI Tools Hub - Adblock Detector
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Try to load our bait file dynamically
    const baitScript = document.createElement('script');
    baitScript.src = 'assets/js/ads.js'; // The honeypot file
    baitScript.async = true;
    document.head.appendChild(baitScript);

    // 2. Wait 500ms to see if the adblocker intercepted it
    setTimeout(() => {
        if (window.adblockerBaitLoaded === undefined) {
            // Bait was blocked! Check if they recently dismissed the popup
            if (localStorage.getItem('adblockDismissed') !== 'true') {
                const modal = document.getElementById('adblockModal');
                if (modal) {
                    modal.classList.add('show');
                    document.body.style.overflow = 'hidden'; // Stop background scrolling
                }
            }
        }
    }, 500);
});

// 3. Handle the dismiss button
window.dismissAdblock = () => {
    const modal = document.getElementById('adblockModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';

        // Remember their choice for 24 hours
        localStorage.setItem('adblockDismissed', 'true');
        setTimeout(() => {
            localStorage.removeItem('adblockDismissed');
        }, 86400000); // 24 hours
    }
};