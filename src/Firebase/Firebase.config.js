// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBpa5FQ1xPy2Kf2yshPG84D0joy57sdVA",
  authDomain: "react-dragon-news-auth-6a02f.firebaseapp.com",
  projectId: "react-dragon-news-auth-6a02f",
  storageBucket: "react-dragon-news-auth-6a02f.firebasestorage.app",
  messagingSenderId: "799641330807",
  appId: "1:799641330807:web:33ac0203e91814310d9272"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;