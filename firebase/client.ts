import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvY9twc_EhZAapE7ms9SwMse7X6o9nupU",
  authDomain: "interview-prep-7131a.firebaseapp.com",
  projectId: "interview-prep-7131a",
  storageBucket: "interview-prep-7131a.firebasestorage.app",
  messagingSenderId: "534474887812",
  appId: "1:534474887812:web:2010a94563fce41babe8d1",
  measurementId: "G-GFX7QFRMNV"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app); 
