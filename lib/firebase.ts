import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAuq894_paeL2zKjTZoZ6_tDYL0gCoQNoI",
  authDomain: "powerdigitizing-12.firebaseapp.com",
  projectId: "powerdigitizing-12",
  storageBucket: "powerdigitizing-12.firebasestorage.app",
  messagingSenderId: "754040443386",
  appId: "1:754040443386:web:28c0081be5f36787a75443",
};

// Initialize Firebase (singleton pattern safe for Next.js SSR & HMR)
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
