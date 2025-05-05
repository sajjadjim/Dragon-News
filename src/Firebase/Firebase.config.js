// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADmf3PxII4L1c4DeCiE6JUAiWhvWXejo8",
  authDomain: "dragon-news-452fd.firebaseapp.com",
  projectId: "dragon-news-452fd",
  storageBucket: "dragon-news-452fd.firebasestorage.app",
  messagingSenderId: "374744595560",
  appId: "1:374744595560:web:54b1a7e3385233ef6b0fdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;