/* ============================================
   AI Tools Hub - Header Component
   Shared header functionality
   ============================================ */

// Update header based on auth state
function updateHeader(user) {
    const guestNav = document.getElementById('guestNav');
    const userNav = document.getElementById('userNav');
    const adminNav = document.getElementById('adminNav');
    const userName = document.getElementById('userName');
    const userAvatar = document.getElementById('userAvatar');
    
    if (!guestNav || !userNav) return; // Header not loaded yet
    
    if (user) {
        // User is logged in
        guestNav.style.display = 'none';
        userNav.style.display = 'block';
        
        // Update user info
        if (userName) {
            userName.textContent = user.displayName || user.email?.split('@')[0] || 'User';
        }
        
        // Update avatar
        if (userAvatar) {
            if (user.photoURL) {
                userAvatar.innerHTML = `<img src="${user.photoURL}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;" alt="Avatar">`;
            } else {
                const initial = (user.displayName || user.email || 'U')[0].toUpperCase();
                userAvatar.textContent = initial;
            }
        }
        
        // Show admin button if admin
        if (adminNav) {
            if (user.isAdmin) {
                adminNav.style.display = 'block';
            } else {
                adminNav.style.display = 'none';
            }
        }
        
        console.log('✅ Header updated for user:', user.email);
    } else {
        // Guest
        guestNav.style.display = 'block';
        userNav.style.display = 'none';
        if (adminNav) adminNav.style.display = 'none';
        
        console.log('👤 Header updated for guest');
    }
}

// Initialize header auth state
function initHeaderAuth() {
    console.log('🔄 Initializing header auth...');
    
    // Try multiple times to ensure Firebase is loaded
    let attempts = 0;
    const maxAttempts = 10;
    
    const checkAuth = setInterval(() => {
        attempts++;
        
        if (window.FirebaseService?.isReady) {
            clearInterval(checkAuth);
            
            // Get current user
            const currentUser = window.FirebaseService.getCurrentUser();
            console.log('Current user:', currentUser);
            updateHeader(currentUser);
            
            // Listen for auth changes
            window.FirebaseService.onAuthChange((user) => {
                console.log('Auth state changed:', user);
                updateHeader(user);
            });
            
        } else if (attempts >= maxAttempts) {
            clearInterval(checkAuth);
            console.log('⚠️ Firebase not loaded, checking demo mode');
            
            // Check demo mode
            const demoUser = localStorage.getItem('demoUser');
            if (demoUser) {
                try {
                    updateHeader(JSON.parse(demoUser));
                } catch (e) {
                    console.error('Error parsing demo user:', e);
                }
            }
        }
    }, 300);
}

// Logout handler
window.handleLogout = async () => {
    if (confirm('Are you sure you want to logout?')) {
        try {
            if (window.FirebaseService?.isReady) {
                await window.FirebaseService.logOut();
            }
            localStorage.removeItem('demoUser');
            
            // Update header immediately
            updateHeader(null);
            
            // Redirect to home
            window.location.href = '/';
        } catch (error) {
            console.error('Logout error:', error);
            alert('Error logging out. Please try again.');
        }
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeaderAuth);
} else {
    initHeaderAuth();
}

// Export for manual initialization
window.initHeaderAuth = initHeaderAuth;
window.updateHeader = updateHeader;