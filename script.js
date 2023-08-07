// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7zg9qCIQNnAGlbMu3_WQJsp8u8-J2GR8",
  authDomain: "signup-fefcd.firebaseapp.com",
  projectId: "signup-fefcd",
  storageBucket: "signup-fefcd.appspot.com",
  messagingSenderId: "434173580624",
  appId: "1:434173580624:web:d85c4cad40d94e715dc855",
  measurementId: "G-D1LC5PFHEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

let register = document.getElementById("reg");
register.addEventListener("click",function(){
  let email = document.getElementById("e-mail");
  let password = document.getElementById("pas-wod");

  console.log(email.value);
  console.log(password.value);

  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log("user==>",user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log("error=>",errorMessage)
    // ..
  });
  
})

// LOG IN ....................  //:
 
let logIn = document.getElementById("log-in");
logIn.addEventListener("click",function(){
  let logEmail = document.getElementById("log-email");
  let logPassword = document.getElementById("log-pass");

  signInWithEmailAndPassword(auth, logEmail.value, logPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log("user==>",user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log("error=>", errorMessage);
  });

})


