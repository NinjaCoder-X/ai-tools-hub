/* ============================================
   AI Tools Hub - Firebase Integration
   Authentication & Database
   Created by NinjaCoder-X
   ============================================ */

// Firebase SDK imports (using CDN modules)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { 
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  onSnapshot,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

// Initialize Firebase
let app, auth, db;

function initializeFirebase() {
  try {
    const config = window.CONFIG?.firebase;
    
    if (!config || !config.apiKey || config.apiKey === 'YOUR_FIREBASE_API_KEY') {
      console.warn('⚠️ Firebase not configured. Using demo mode.');
      return false;
    }
    
    app = initializeApp(config);
    auth = getAuth(app);
    db = getFirestore(app);
    
    console.log('✅ Firebase initialized successfully');
    return true;
  } catch (error) {
    console.error('❌ Firebase initialization error:', error);
    return false;
  }
}

// Auth State Observer
let currentUser = null;
let authStateCallbacks = [];

function setupAuthObserver() {
  if (!auth) return;
  
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in
      currentUser = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || 'User',
        photoURL: user.photoURL,
        isAdmin: user.email === window.CONFIG?.admin?.adminEmail
      };
      
      // Fetch additional user data from Firestore
      try {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          currentUser = { ...currentUser, ...userDoc.data() };
        } else {
          // Create user document if doesn't exist
          await setDoc(doc(db, 'users', user.uid), {
            email: user.email,
            displayName: user.displayName || 'User',
            photoURL: user.photoURL,
            createdAt: serverTimestamp(),
            role: user.email === window.CONFIG?.admin?.adminEmail ? 'admin' : 'user'
          });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
      
      console.log('👤 User signed in:', currentUser.email);
    } else {
      // User is signed out
      currentUser = null;
      console.log('👤 User signed out');
    }
    
    // Notify all callbacks
    authStateCallbacks.forEach(callback => callback(currentUser));
    
    // Update UI
    updateAuthUI();
  });
}

// Register auth state callback
function onAuthChange(callback) {
  authStateCallbacks.push(callback);
  // Call immediately with current state
  if (currentUser !== undefined) {
    callback(currentUser);
  }
}

// Update UI based on auth state
function updateAuthUI() {
  const authButtons = document.querySelectorAll('[data-auth-button]');
  const userMenus = document.querySelectorAll('[data-user-menu]');
  const adminElements = document.querySelectorAll('[data-admin-only]');
  const userOnlyElements = document.querySelectorAll('[data-user-only]');
  const guestOnlyElements = document.querySelectorAll('[data-guest-only]');
  
  if (currentUser) {
    // User is logged in
    authButtons.forEach(btn => btn.style.display = 'none');
    userMenus.forEach(menu => {
      menu.style.display = 'flex';
      const nameEl = menu.querySelector('[data-user-name]');
      const avatarEl = menu.querySelector('[data-user-avatar]');
      if (nameEl) nameEl.textContent = currentUser.displayName;
      if (avatarEl && currentUser.photoURL) avatarEl.src = currentUser.photoURL;
    });
    userOnlyElements.forEach(el => el.style.display = '');
    guestOnlyElements.forEach(el => el.style.display = 'none');
    
    // Admin elements
    if (currentUser.isAdmin) {
      adminElements.forEach(el => el.style.display = '');
    } else {
      adminElements.forEach(el => el.style.display = 'none');
    }
  } else {
    // Guest
    authButtons.forEach(btn => btn.style.display = '');
    userMenus.forEach(menu => menu.style.display = 'none');
    adminElements.forEach(el => el.style.display = 'none');
    userOnlyElements.forEach(el => el.style.display = 'none');
    guestOnlyElements.forEach(el => el.style.display = '');
  }
}

// ========== AUTH FUNCTIONS ==========

// Sign up with email/password
async function signUp(email, password, displayName) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update profile with display name
    await updateProfile(userCredential.user, { displayName });
    
    // Create user document
    await setDoc(doc(db, 'users', userCredential.user.uid), {
      email,
      displayName,
      createdAt: serverTimestamp(),
      role: email === window.CONFIG?.admin?.adminEmail ? 'admin' : 'user'
    });
    
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error('Sign up error:', error);
    return { success: false, error: getErrorMessage(error.code) };
  }
}

// Sign in with email/password
async function signIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error('Sign in error:', error);
    return { success: false, error: getErrorMessage(error.code) };
  }
}

// Sign in with Google
async function signInWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    
    const result = await signInWithPopup(auth, provider);
    return { success: true, user: result.user };
  } catch (error) {
    console.error('Google sign in error:', error);
    return { success: false, error: getErrorMessage(error.code) };
  }
}

// Sign out
async function logOut() {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error('Sign out error:', error);
    return { success: false, error: error.message };
  }
}

// Get current user
function getCurrentUser() {
  return currentUser;
}

// Check if user is admin
function isAdmin() {
  return currentUser?.isAdmin || false;
}

// ========== FAVORITES FUNCTIONS ==========

// Add to favorites
async function addFavorite(toolId, toolData) {
  if (!currentUser) {
    return { success: false, error: 'Please sign in to save favorites' };
  }
  
  try {
    await setDoc(doc(db, 'users', currentUser.uid, 'favorites', toolId), {
      ...toolData,
      addedAt: serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    console.error('Add favorite error:', error);
    return { success: false, error: error.message };
  }
}

// Remove from favorites
async function removeFavorite(toolId) {
  if (!currentUser) return { success: false, error: 'Not signed in' };
  
  try {
    await deleteDoc(doc(db, 'users', currentUser.uid, 'favorites', toolId));
    return { success: true };
  } catch (error) {
    console.error('Remove favorite error:', error);
    return { success: false, error: error.message };
  }
}

// Get all favorites
async function getFavorites() {
  if (!currentUser) return [];
  
  try {
    const snapshot = await getDocs(
      collection(db, 'users', currentUser.uid, 'favorites')
    );
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Get favorites error:', error);
    return [];
  }
}

// Check if tool is favorited
async function isFavorite(toolId) {
  if (!currentUser) return false;
  
  try {
    const docSnap = await getDoc(
      doc(db, 'users', currentUser.uid, 'favorites', toolId)
    );
    return docSnap.exists();
  } catch (error) {
    return false;
  }
}

// ========== RATINGS FUNCTIONS ==========

// Add or update rating
async function rateTool(toolId, rating, review = '') {
  if (!currentUser) {
    return { success: false, error: 'Please sign in to rate tools' };
  }
  
  try {
    const ratingId = `${currentUser.uid}_${toolId}`;
    await setDoc(doc(db, 'ratings', ratingId), {
      userId: currentUser.uid,
      userEmail: currentUser.email,
      userName: currentUser.displayName,
      toolId,
      rating,
      review,
      updatedAt: serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    console.error('Rate tool error:', error);
    return { success: false, error: error.message };
  }
}

// Get tool ratings
async function getToolRatings(toolId) {
  try {
    const q = query(
      collection(db, 'ratings'),
      where('toolId', '==', toolId),
      orderBy('updatedAt', 'desc'),
      limit(50)
    );
    const snapshot = await getDocs(q);
    const ratings = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    // Calculate average
    const average = ratings.length > 0
      ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length
      : 0;
    
    return { ratings, average, count: ratings.length };
  } catch (error) {
    console.error('Get ratings error:', error);
    return { ratings: [], average: 0, count: 0 };
  }
}

// ========== COLLECTIONS FUNCTIONS ==========

// Create collection
async function createCollection(name, description = '') {
  if (!currentUser) {
    return { success: false, error: 'Please sign in to create collections' };
  }
  
  try {
    const collectionRef = await addDoc(
      collection(db, 'users', currentUser.uid, 'collections'),
      {
        name,
        description,
        tools: [],
        createdAt: serverTimestamp()
      }
    );
    return { success: true, id: collectionRef.id };
  } catch (error) {
    console.error('Create collection error:', error);
    return { success: false, error: error.message };
  }
}

// Add tool to collection
async function addToCollection(collectionId, toolData) {
  if (!currentUser) return { success: false, error: 'Not signed in' };
  
  try {
    const collectionRef = doc(db, 'users', currentUser.uid, 'collections', collectionId);
    const collectionDoc = await getDoc(collectionRef);
    
    if (!collectionDoc.exists()) {
      return { success: false, error: 'Collection not found' };
    }
    
    const tools = collectionDoc.data().tools || [];
    if (!tools.find(t => t.name === toolData.name)) {
      tools.push({ ...toolData, addedAt: new Date().toISOString() });
      await updateDoc(collectionRef, { tools });
    }
    
    return { success: true };
  } catch (error) {
    console.error('Add to collection error:', error);
    return { success: false, error: error.message };
  }
}

// Get user collections
async function getCollections() {
  if (!currentUser) return [];
  
  try {
    const snapshot = await getDocs(
      collection(db, 'users', currentUser.uid, 'collections')
    );
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Get collections error:', error);
    return [];
  }
}

// ========== NEWSLETTER FUNCTIONS ==========

// Subscribe to newsletter
async function subscribeNewsletter(email) {
  try {
    await addDoc(collection(db, 'newsletter'), {
      email,
      subscribedAt: serverTimestamp(),
      active: true
    });
    return { success: true };
  } catch (error) {
    console.error('Newsletter subscribe error:', error);
    return { success: false, error: error.message };
  }
}

// ========== ERROR MESSAGES ==========

function getErrorMessage(code) {
  const messages = {
    'auth/email-already-in-use': 'This email is already registered.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/operation-not-allowed': 'Email/password accounts are not enabled.',
    'auth/weak-password': 'Password should be at least 6 characters.',
    'auth/user-disabled': 'This account has been disabled.',
    'auth/user-not-found': 'No account found with this email.',
    'auth/wrong-password': 'Incorrect password.',
    'auth/invalid-credential': 'Invalid email or password.',
    'auth/too-many-requests': 'Too many attempts. Please try again later.',
    'auth/popup-closed-by-user': 'Sign-in popup was closed.',
  };
  return messages[code] || 'An error occurred. Please try again.';
}

// ========== INITIALIZE ==========

// Auto-initialize when script loads
const firebaseReady = initializeFirebase();
if (firebaseReady) {
  setupAuthObserver();
}

// Export functions
window.FirebaseService = {
  // Auth
  signUp,
  signIn,
  signInWithGoogle,
  logOut,
  getCurrentUser,
  isAdmin,
  onAuthChange,
  
  // Favorites
  addFavorite,
  removeFavorite,
  getFavorites,
  isFavorite,
  
  // Ratings
  rateTool,
  getToolRatings,
  
  // Collections
  createCollection,
  addToCollection,
  getCollections,
  
  // Newsletter
  subscribeNewsletter,
  
  // State
  isReady: firebaseReady
};