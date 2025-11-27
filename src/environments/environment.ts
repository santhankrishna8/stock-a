// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
  production: false,
  firebaseConfig: {
  apiKey: "AIzaSyDa5bdyjfrS50rtvvfL0ACqh5OvsWGdQUM",
  authDomain: "stockweb-38a01.firebaseapp.com",
  projectId: "stockweb-38a01",
  storageBucket: "stockweb-38a01.firebasestorage.app",
  messagingSenderId: "1038958830310",
  appId: "1:1038958830310:web:74cf8e37c8d002c8e79127",
  measurementId: "G-V02FSK0QHZ"
  }
};

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);