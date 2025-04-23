
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCgsT_0XEg8-mFs_dkNIP8jpD5wQwzsN6k",
    authDomain: "intervulex.firebaseapp.com",
    projectId: "intervulex",
    storageBucket: "intervulex.firebasestorage.app",
    messagingSenderId: "522500265312",
    appId: "1:522500265312:web:1d9093477d0fb5fbc8fa05",
    measurementId: "G-G896L9WXT3"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const firestore = getFirestore(app);