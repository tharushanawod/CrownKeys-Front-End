// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSEZoJE7qRvOE9aA5fu6idWxyUBXYx2Ro",
  authDomain: "crownkeys-b00a9.firebaseapp.com",
  projectId: "crownkeys-b00a9",
  storageBucket: "crownkeys-b00a9.firebasestorage.app",
  messagingSenderId: "121090937483",
  appId: "1:121090937483:web:e07a1ec4a2c66448e8fa8e",
  measurementId: "G-19DMX4E1VN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);