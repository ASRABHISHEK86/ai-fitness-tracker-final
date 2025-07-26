// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtkimDBQ6Vxqws8JbdrNLuT8G9TuBQ6Ng",
  authDomain: "fitness-tracker-a0e79.firebaseapp.com",
  projectId: "fitness-tracker-a0e79",
  storageBucket: "fitness-tracker-a0e79.firebasestorage.app",
  messagingSenderId: "610494832143",
  appId: "1:610494832143:web:ae727ef5c1dce3c5bb8d7a",
  measurementId: "G-JNF5JCDK8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);