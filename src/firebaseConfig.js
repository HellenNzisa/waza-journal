// src/firebaseConfig.js

// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // for login/signup
import { getFirestore } from "firebase/firestore"; // for storing journal entries

// Your Firebase config (from Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyDz9cz1qykc7yEl6jn7Q7y4evekgoo4g4s",
  authDomain: "waza-journal.firebaseapp.com",
  projectId: "waza-journal",
  storageBucket: "waza-journal.firebasestorage.app",
  messagingSenderId: "809584833523",
  appId: "1:809584833523:web:1c5ae1ff07ea6e584c5886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔹 Export these so we can use Firebase in our React components
export const auth = getAuth(app); // handles login/signup
export const db = getFirestore(app); // handles storing journal data