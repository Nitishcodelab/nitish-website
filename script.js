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
  apiKey: "YOUR_FIREBASE_API_KEY",
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
    const logoutButton = document.getElementById("logoutButton");

    if (user) {
        console.log("User logged in:", user.email);
        logoutButton.style.display = "block";
    } else {
        console.log("No user logged in");
        logoutButton.style.display = "none";
    }
});

const logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener("click", async function() {
    try {
        await signOut(auth);
        alert("Logout successful!");
    } catch (error) {
        alert("Logout failed: " + error.code);
    }
});


// =========================
// Back To Top
// =========================

const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
