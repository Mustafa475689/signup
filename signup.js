import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyA7zg9qCIQNnAGlbMu3_WQJsp8u8-J2GR8",
    authDomain: "signup-fefcd.firebaseapp.com",
    projectId: "signup-fefcd",
    storageBucket: "signup-fefcd.appspot.com",
    messagingSenderId: "434173580624",
    appId: "1:434173580624:web:43a5b73c73ce052b5dc855",
    measurementId: "G-X0FLY3YQL5"
  };


  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);