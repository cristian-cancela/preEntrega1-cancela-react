// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBugWageHuTq7gfAQO-UTdFLhOlzhQ4St0",
  authDomain: "cristianshop-65dec.firebaseapp.com",
  projectId: "cristianshop-65dec",
  storageBucket: "cristianshop-65dec.appspot.com",
  messagingSenderId: "829743748007",
  appId: "1:829743748007:web:4c4250e2d64adcdeeb9c82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);