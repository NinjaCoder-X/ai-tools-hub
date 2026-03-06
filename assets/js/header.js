const headerHTML = `
    <header class="header theme-transition" id="header">
        <nav class="nav container">
            <a href="/" class="logo">AI Tools Hub</a>
            <ul class="nav-links">
                <li><a href="/" class="nav-link" id="nav-home">Home</a></li>
                <li><a href="/tools.html" class="nav-link" id="nav-tools">Tools</a></li>
                <li><a href="/about.html" class="nav-link" id="nav-about">About</a></li>
                <li><a href="/contact.html" class="nav-link" id="nav-contact">Contact</a></li>
                
                <li id="guestNav" style="display:none"><a href="/login.html" class="btn btn-primary">Get Started</a></li>
                <li id="userNav" style="display:none">
                    <div style="display:flex;align-items:center;gap:0.75rem">
                        <a href="/profile.html" style="display:flex;align-items:center;gap:0.5rem;text-decoration:none;color:var(--text-primary);font-weight:600;padding:0.5rem 0.75rem;border-radius:var(--radius-lg);background:var(--bg-tertiary)">
                            <span id="userAvatar" style="width:32px;height:32px;background:var(--bg-gradient-1);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:0.875rem;font-weight:700">U</span>
                            <span id="userName">User</span>
                        </a>
                        <button onclick="window.handleLogout()" class="btn btn-ghost" style="padding: 0.5rem 1rem;">Logout</button>
                    </div>
                </li>
                <li id="adminNav" style="display:none"><a href="/admin.html" class="btn btn-secondary" style="padding: 0.5rem 1rem;">👑 Admin</a></li>
            </ul>
        </nav>
    </header>
`;

// Inject Header
document.getElementById('site-header').outerHTML = headerHTML;

// Highlight Active Link
const path = window.location.pathname;
if(path.includes('tools')) document.getElementById('nav-tools').classList.add('active');
else if(path.includes('about')) document.getElementById('nav-about').classList.add('active');
else if(path.includes('contact')) document.getElementById('nav-contact').classList.add('active');
else if(path === '/' || path.includes('index')) document.getElementById('nav-home').classList.add('active');

// UI Update Function
window.updateHeaderUI = function(u) {
    const guestNav = document.getElementById('guestNav');
    const userNav = document.getElementById('userNav');
    const adminNav = document.getElementById('adminNav');
    const userName = document.getElementById('userName');
    const userAvatar = document.getElementById('userAvatar');

    if (u) {
        if(guestNav) guestNav.style.display = 'none';
        if(userNav) userNav.style.display = 'block';
        if(userName) userName.textContent = u.displayName || u.email?.split('@')[0] || 'User';
        if(userAvatar) {
            if(u.photoURL) userAvatar.innerHTML = `<img src="${u.photoURL}" style="width:100%;height:100%;border-radius:50%;object-fit:cover">`;
            else userAvatar.textContent = (u.displayName || u.email || 'U')[0].toUpperCase();
        }
        if(adminNav) adminNav.style.display = u.isAdmin ? 'block' : 'none';
    } else {
        if(guestNav) guestNav.style.display = 'block';
        if(userNav) userNav.style.display = 'none';
        if(adminNav) adminNav.style.display = 'none';
    }
};

// 0ms Instant Auth Check (No Flicker)
try {
    const c = localStorage.getItem('cachedUser');
    window.updateHeaderUI(c ? JSON.parse(c) : null);
} catch(e) {}

// Global Logout
window.handleLogout = async () => {
    if(confirm('Logout?')) {
        localStorage.removeItem('cachedUser');
        window.updateHeaderUI(null);
        if(window.FirebaseService?.isReady) await window.FirebaseService.logOut();
        window.location.href = '/';
    }
};

// Background Listeners (Scroll & Firebase State)
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if(header) header.classList.toggle('scrolled', window.scrollY > 50);
    });

    let attempts = 0;
    const checkAuth = setInterval(() => {
        attempts++;
        if (window.FirebaseService?.isReady) {
            clearInterval(checkAuth);
            window.FirebaseService.onAuthChange(window.updateHeaderUI);
        } else if (attempts >= 50) clearInterval(checkAuth);
    }, 100);
});