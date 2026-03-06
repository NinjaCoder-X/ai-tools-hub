const headerHTML = `
    <style>
        /* Mobile Menu Button Styling */
        .mobile-menu-btn {
            display: none;
            background: transparent;
            border: none;
            font-size: 1.8rem;
            color: var(--text-primary);
            cursor: pointer;
            padding: 0.2rem 0.5rem;
            border-radius: var(--radius-md);
            transition: background var(--duration-fast);
        }
        .mobile-menu-btn:hover {
            background: var(--bg-secondary);
        }

        /* Mobile Breakpoint */
        @media (max-width: 850px) {
            .mobile-menu-btn {
                display: block; /* Show hamburger on mobile */
            }
            .nav-links {
                display: none; /* Hide standard nav on mobile */
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: var(--bg-card);
                flex-direction: column;
                align-items: center;
                padding: var(--space-6) 0;
                box-shadow: var(--shadow-2xl);
                border-top: 1px solid var(--border-light);
                gap: var(--space-4);
                z-index: 1000;
            }
            .nav-links.active {
                display: flex; /* Show when hamburger is clicked */
                animation: slideDown 0.3s ease forwards;
            }
            @keyframes slideDown {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }
        }
    </style>

    <header class="header theme-transition" id="header" style="position: relative;">
        <nav class="nav container" style="display: flex; justify-content: space-between; align-items: center;">
            <a href="/" class="logo">AI Tools Hub</a>
            
            <button id="mobileMenuBtn" class="mobile-menu-btn" aria-label="Toggle Menu">☰</button>

            <ul class="nav-links" id="navLinks">
                <li><a href="/" class="nav-link" id="nav-home">Home</a></li>
                <li><a href="/tools.html" class="nav-link" id="nav-tools">Tools</a></li>
                <li><a href="/categories.html" class="nav-link" id="nav-categories">Categories</a></li>
                <li><a href="/about.html" class="nav-link" id="nav-about">About</a></li>
                <li><a href="/contact.html" class="nav-link" id="nav-contact">Contact</a></li>
                
                <li>
                    <a href="https://buymeacoffee.com/heyitsvihanga" target="_blank" class="btn hover-scale" style="background: #FFDD00; color: #000000; border: none; font-weight: 700; padding: 0.5rem 1rem; border-radius: var(--radius-lg);">
                        ☕ Support Us
                    </a>
                </li>
                
                <li style="cursor:pointer; font-size:1.2rem; padding:0 0.5rem; user-select:none;" onclick="window.toggleGlobalTheme()" title="Toggle Dark/Light Mode">🌓</li>
                
                <li class="show-logged-out"><a href="/login.html" class="btn btn-primary">Get Started</a></li>
                
                <li class="show-logged-in">
                    <div style="display:flex;align-items:center;gap:0.75rem; flex-wrap: wrap; justify-content: center;">
                        <a href="/profile.html" style="display:flex;align-items:center;gap:0.5rem;text-decoration:none;color:var(--text-primary);font-weight:600;padding:0.5rem 0.75rem;border-radius:var(--radius-lg);background:var(--bg-tertiary)">
                            <span id="userAvatar" style="width:32px;height:32px;background:var(--bg-gradient-1);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:0.875rem;font-weight:700">U</span>
                            <span id="userName">User</span>
                        </a>
                        <button onclick="window.handleLogout()" class="btn btn-ghost" style="padding: 0.5rem 1rem;">Logout</button>
                    </div>
                </li>
                
                <li class="show-admin"><a href="/admin.html" class="btn btn-secondary" style="padding: 0.5rem 1rem;">👑 Admin</a></li>
            </ul>
        </nav>
    </header>
`;

// Inject Header
document.getElementById('site-header').outerHTML = headerHTML;

// Hamburger Menu Logic
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle icon between Hamburger and X
        if (navLinks.classList.contains('active')) {
            mobileMenuBtn.innerHTML = '✕';
        } else {
            mobileMenuBtn.innerHTML = '☰';
        }
    });
}

// Highlight Active Link
const path = window.location.pathname;
if (path.includes('tools')) document.getElementById('nav-tools').classList.add('active');
else if (path.includes('categories')) document.getElementById('nav-categories').classList.add('active');
else if (path.includes('about')) document.getElementById('nav-about').classList.add('active');
else if (path.includes('contact')) document.getElementById('nav-contact').classList.add('active');
else if (path === '/' || path.includes('index')) document.getElementById('nav-home').classList.add('active');

// Theme Toggle Logic
window.toggleGlobalTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
};

// Populate User Data
function populateUserData() {
    try {
        const c = localStorage.getItem('cachedUser');
        if (c) {
            const u = JSON.parse(c);
            const userName = document.getElementById('userName');
            const userAvatar = document.getElementById('userAvatar');

            if (userName) userName.textContent = u.displayName || u.email?.split('@')[0] || 'User';
            if (userAvatar) {
                if (u.photoURL) userAvatar.innerHTML = `<img src="${u.photoURL}" style="width:100%;height:100%;border-radius:50%;object-fit:cover">`;
                else userAvatar.textContent = (u.displayName || u.email || 'U')[0].toUpperCase();
            }
        }
    } catch (e) { }
}
populateUserData();

// Global Logout
window.handleLogout = async () => {
    if (confirm('Logout?')) {
        localStorage.removeItem('cachedUser');
        if (window.FirebaseService?.isReady) await window.FirebaseService.logOut();
        window.location.href = '/';
    }
};

// Background Listeners
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (header) header.classList.toggle('scrolled', window.scrollY > 50);
    });

    let attempts = 0;
    const checkAuth = setInterval(() => {
        attempts++;
        if (window.FirebaseService?.isReady) {
            clearInterval(checkAuth);
            window.FirebaseService.onAuthChange((u) => {
                if (u) {
                    document.documentElement.classList.remove('is-logged-out');
                    document.documentElement.classList.add('is-logged-in');
                    if (u.isAdmin) document.documentElement.classList.add('is-admin');
                    populateUserData();
                } else {
                    document.documentElement.classList.remove('is-logged-in', 'is-admin');
                    document.documentElement.classList.add('is-logged-out');
                }
            });
        } else if (attempts >= 50) clearInterval(checkAuth);
    }, 100);
});