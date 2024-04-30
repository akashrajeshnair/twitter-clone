// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDEMBghespsdPcFi9E00wOCy_tXKEi3hk",
  authDomain: "trial-d8141.firebaseapp.com",
  projectId: "trial-d8141",
  storageBucket: "trial-d8141.appspot.com",
  messagingSenderId: "896545358797",
  appId: "1:896545358797:web:af5d4e9ae2a7b82e83fa84",
  measurementId: "G-Y8NYHS7K8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {auth, firestore};