import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuS1ECRUsfQSC7HCrChNhLV87LEmNqYto",
  authDomain: "nitish-website.firebaseapp.com",
  projectId: "nitish-website",
  storageBucket: "nitish-website.firebasestorage.app",
  messagingSenderId: "1035429607659",
  appId: "1:1035429607659:web:a71a0fca2e722102a5e6ae",
  measurementId: "G-LM97DLSJ1Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function hello() {
    document.getElementById("message").innerText =
        "Welcome Nitish! 🎉 तुम coding सीख रहे हो।";
}

window.hello = hello;

const forms = document.querySelectorAll("form");
const loginForm = forms[1];

loginForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = loginForm.querySelector('input[type="email"]').value.trim();
    const password = loginForm.querySelector('input[type="password"]').value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful! 🎉");
    } catch (error) {
    alert("Login failed: " + error.code);
    }
});

onAuthStateChanged(auth, function(user) {
    if (user) {
        console.log("User logged in:", user.email);
    } else {
        console.log("No user logged in");
    }
});
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Message sent successfully! 🎉");

    contactForm.reset();
});
