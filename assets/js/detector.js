// 1. Try to load our bait file dynamically
const baitScript = document.createElement('script');
baitScript.src = 'assets/js/ads.js'; // Must match the file we created in Step 1
baitScript.async = true;
document.body.appendChild(baitScript);

// 2. Wait a fraction of a second to see if it was blocked
setTimeout(() => {
    // If our variable doesn't exist, the bait was blocked!
    if (window.adblockerBaitLoaded === undefined) {

        // Check if they already dismissed it recently (optional user-friendly check)
        if (localStorage.getItem('adblockDismissed') !== 'true') {
            document.getElementById('adblockModal').classList.add('show');
            // Optional: Stop the page from scrolling while popup is open
            document.body.style.overflow = 'hidden';
        }
    }
}, 500); // 500ms is usually plenty of time to detect a blocked request

// 3. Dismiss function for the "Continue anyway" button
window.dismissAdblock = () => {
    document.getElementById('adblockModal').classList.remove('show');
    document.body.style.overflow = 'auto';

    // Remember their choice for 24 hours so we don't annoy them on every single page load
    localStorage.setItem('adblockDismissed', 'true');
    setTimeout(() => {
        localStorage.removeItem('adblockDismissed');
    }, 86400000); // 24 hours in milliseconds
};