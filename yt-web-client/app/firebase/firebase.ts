// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    onAuthStateChanged,
    User
} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.theKey,
  authDomain: "yt-clone-6eab8.firebaseapp.com",
  projectId: "yt-clone-6eab8",
  // storageBucket: "yt-clone-6eab8.appspot.com",
  // messagingSenderId: "863745267637",
  appId: "1:863745267637:web:9c7a9930d382dcd99b2bfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize authorization
const auth = getAuth(app);

// Signs the user in with a Google popup. Returns promise that resolves with user's credentials.
export function signInWithGoogle() {
    return signInWithPopup(auth, new GoogleAuthProvider());
}

// Signs user out. Returns promise that resolves when user is signed out.
export function signOut() {
    return auth.signOut();
}

// Trigger a callback when user auth state changes. Returns a function to unsubscribe callback.
export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
}