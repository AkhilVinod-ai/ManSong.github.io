// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3Yk3rQDeZlKTovkcZrVCRpRuDzsRR6dI",
  authDomain: "mansong-434fc.firebaseapp.com",
  projectId: "mansong-434fc",
  storageBucket: "mansong-434fc.firebasestorage.app",
  messagingSenderId: "536985439308",
  appId: "1:536985439308:web:b5d0653c996c4a2d48b8e9",
  measurementId: "G-FQFZ0DGG90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);