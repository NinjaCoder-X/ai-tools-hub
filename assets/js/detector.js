/* ============================================
   AI Tools Hub - Adblock Detector
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject the bait file
    const baitScript = document.createElement('script');
    baitScript.src = 'assets/js/ads.js';
    baitScript.async = true;
    document.head.appendChild(baitScript);

    // 2. Wait 500ms and check the trap
    setTimeout(() => {
        if (window.adblockerBaitLoaded === undefined) {
            // Adblocker caught!
            if (localStorage.getItem('adblockDismissed') !== 'true') {
                const modal = document.getElementById('adblockModal');
                if (modal) {
                    modal.classList.add('show');
                    document.body.style.overflow = 'hidden';
                }
            }
        }
    }, 500);
});

// 3. Dismissal Functionality
window.dismissAdblock = () => {
    const modal = document.getElementById('adblockModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';

        // Remember their choice for 24 hours
        localStorage.setItem('adblockDismissed', 'true');
        setTimeout(() => {
            localStorage.removeItem('adblockDismissed');
        }, 86400000);
    }
};