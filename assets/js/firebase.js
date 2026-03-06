/* ============================================
   AI Tools Hub - Firebase Integration
   Optimized for Performance (Flicker-Free Auth)
   ============================================ */

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile,
  deleteUser
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  arrayUnion,
  updateDoc
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

let app, auth, db;
let currentUser = null;
let authCallbacks = [];
let authResolved = false; // Tracks if Firebase has verified the session

// Initialize Firebase
function init() {
  try {
    const config = window.CONFIG?.firebase;
    if (!config?.apiKey) {
      console.warn('⚠️ Firebase not configured');
      return false;
    }

    app = initializeApp(config);
    auth = getAuth(app);
    db = getFirestore(app);

    onAuthStateChanged(auth, (user) => {
      authResolved = true; // Firebase has definitively answered
      handleAuthChange(user);
    });

    console.log('✅ Firebase ready');
    return true;
  } catch (e) {
    console.error('❌ Firebase error:', e);
    return false;
  }
}

// Handle auth state changes
async function handleAuthChange(user) {
  if (user) {
    currentUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || user.email.split('@')[0],
      photoURL: user.photoURL,
      isAdmin: user.email === window.CONFIG?.admin?.adminEmail
    };

    // Update Firestore
    try {
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          displayName: currentUser.displayName,
          createdAt: serverTimestamp(),
          role: currentUser.isAdmin ? 'admin' : 'user'
        });
      } else {
        const data = userDoc.data();
        if (data.role === 'admin') currentUser.isAdmin = true;
      }
    } catch (e) {
      console.error('User doc error:', e);
    }

    // Cache user
    localStorage.setItem('cachedUser', JSON.stringify(currentUser));
  } else {
    currentUser = null;
    localStorage.removeItem('cachedUser');
  }

  authCallbacks.forEach(cb => cb(currentUser));
}

// Sign in
async function signIn(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (e) {
    return { success: false, error: getErrorMsg(e.code) };
  }
}

// Sign up
async function signUp(email, password, name) {
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(cred.user, { displayName: name });
    return { success: true };
  } catch (e) {
    return { success: false, error: getErrorMsg(e.code) };
  }
}

// Google sign in
async function signInWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    return { success: true };
  } catch (e) {
    return { success: false, error: getErrorMsg(e.code) };
  }
}

// Sign out
async function logOut() {
  try {
    await signOut(auth);
    return { success: true };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

// Favorites
async function addFavorite(toolId, data) {
  if (!currentUser) return { success: false, error: 'Not signed in' };
  try {
    await setDoc(doc(db, 'users', currentUser.uid, 'favorites', toolId), {
      ...data, addedAt: serverTimestamp()
    });
    return { success: true };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

async function removeFavorite(toolId) {
  if (!currentUser) return { success: false };
  try {
    await deleteDoc(doc(db, 'users', currentUser.uid, 'favorites', toolId));
    return { success: true };
  } catch (e) {
    return { success: false };
  }
}

async function getFavorites() {
  if (!currentUser) return [];
  try {
    const snap = await getDocs(collection(db, 'users', currentUser.uid, 'favorites'));
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch (e) {
    return [];
  }
}

async function isFavorite(toolId) {
  if (!currentUser) return false;
  try {
    const snap = await getDoc(doc(db, 'users', currentUser.uid, 'favorites', toolId));
    return snap.exists();
  } catch (e) {
    return false;
  }
}

// Collections
async function createCollection(name, description) {
  if (!currentUser) return { success: false };
  try {
    const ref = await addDoc(collection(db, 'users', currentUser.uid, 'collections'), {
      name, description, tools: [], createdAt: serverTimestamp()
    });
    return { success: true, id: ref.id };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

async function getCollections() {
  if (!currentUser) return [];
  try {
    const snap = await getDocs(collection(db, 'users', currentUser.uid, 'collections'));
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch (e) {
    return [];
  }
}

// Add tool to collection
async function addToolToCollection(collectionId, toolData) {
  if (!currentUser) return { success: false, error: 'Not signed in' };
  try {
    const colRef = doc(db, 'users', currentUser.uid, 'collections', collectionId);
    await updateDoc(colRef, {
      tools: arrayUnion({
        name: toolData.name,
        link: toolData.link,
        addedAt: new Date().toISOString()
      })
    });
    return { success: true };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

// Ratings
async function rateTool(toolId, rating, review) {
  if (!currentUser) return { success: false };
  try {
    await setDoc(doc(db, 'ratings', `${currentUser.uid}_${toolId}`), {
      userId: currentUser.uid,
      userName: currentUser.displayName,
      toolId, rating, review,
      updatedAt: serverTimestamp()
    });
    return { success: true };
  } catch (e) {
    return { success: false };
  }
}

// Delete account
async function deleteAccount() {
  if (!currentUser) return { success: false, error: 'Not signed in' };
  try {
    const user = auth.currentUser;
    await deleteDoc(doc(db, 'users', currentUser.uid));
    await deleteUser(user);
    return { success: true };
  } catch (e) {
    if (e.code === 'auth/requires-recent-login') {
      return { success: false, error: 'Security alert: Please log out and log back in to delete your account.' };
    }
    return { success: false, error: e.message };
  }
}

// Error messages
function getErrorMsg(code) {
  const msgs = {
    'auth/invalid-credential': 'Invalid email or password',
    'auth/email-already-in-use': 'Email already registered',
    'auth/weak-password': 'Password too weak (min 6 chars)',
    'auth/user-not-found': 'No account with this email',
    'auth/wrong-password': 'Incorrect password',
    'auth/too-many-requests': 'Too many attempts. Try later.'
  };
  return msgs[code] || 'An error occurred';
}

// Submit a tool for AI/Admin review
async function submitPendingTool(toolData) {
  try {
    await addDoc(collection(db, 'pending_tools'), {
      ...toolData,
      submittedAt: serverTimestamp(),
      status: 'pending',
      submittedBy: currentUser ? currentUser.email : 'Guest'
    });
    return { success: true };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

// Get pending tools (Admin only)
async function getPendingTools() {
  if (!currentUser?.isAdmin) return [];
  try {
    const snap = await getDocs(collection(db, 'pending_tools'));
    return snap.docs
      .map(d => ({ id: d.id, ...d.data() }))
      .filter(t => t.status === 'pending');
  } catch (e) {
    return [];
  }
}

// Update pending tool status
async function updatePendingToolStatus(toolId, status) {
  if (!currentUser?.isAdmin) return { success: false };
  try {
    await updateDoc(doc(db, 'pending_tools', toolId), { status });
    return { success: true };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

// Initialize
const isReady = init();

// Export
window.FirebaseService = {
  isReady,
  signIn,
  signUp,
  signInWithGoogle,
  logOut,
  getCurrentUser: () => {
    // FIX: Prevent UI flicker by trusting local storage until Firebase replies
    if (!authResolved) {
      const cached = localStorage.getItem('cachedUser');
      if (cached) {
        try { return JSON.parse(cached); } catch (e) { return null; }
      }
    }
    return currentUser;
  },
  isAdmin: () => currentUser?.isAdmin || false,
  onAuthChange: (cb) => {
    authCallbacks.push(cb);
    if (authResolved) cb(currentUser);
  },
  addFavorite,
  removeFavorite,
  getFavorites,
  isFavorite,
  createCollection,
  getCollections,
  rateTool,
  addToolToCollection,
  deleteAccount,
  submitPendingTool,
  getPendingTools,
  updatePendingToolStatus
};