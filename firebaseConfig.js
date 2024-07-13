// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAilnj5bKCP7bzYgTsuLPHnFNCvCHD4oEU",
  authDomain: "caboveretourist.firebaseapp.com",
  projectId: "caboveretourist",
  storageBucket: "caboveretourist.appspot.com",
  messagingSenderId: "580438602567",
  appId: "1:580438602567:web:1226762cbb278daab21262",
  measurementId: "G-T7XGL0NC1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);