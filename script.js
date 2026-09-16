import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

// =========================
// Firebase Configuration
// =========================

const firebaseConfig = {
    apiKey: "अपनी पुरानी Firebase apiKey यहाँ रखें",
    authDomain: "nitish-website.firebaseapp.com",
    projectId: "nitish-website",
    storageBucket: "nitish-website.firebasestorage.app",
    messagingSenderId: "1035429607659",
    appId: "1:1035429607659:web:a71a0fca2e722102a5e6ae",
    measurementId: "G-LM97DLSJ1Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// =========================
// Hello Button
// =========================

function hello() {
    document.getElementById("message").innerText =
        "Welcome Nitish! 🎉 तुम coding सीख रहे हो।";
}

window.hello = hello;

// =========================
// Login
// =========================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = loginForm.querySelector('input[type="email"]').value.trim();
    const password = loginForm.querySelector('input[type="password"]').value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful! 🎉");
    } catch (error) {
        alert("❌ Login failed: " + error.code);
        console.log(error);
    }
});

// =========================
// Create Account
// =========================

const signupButton = document.getElementById("signupButton");

signupButton.addEventListener("click", async function() {
    const email = prompt("अपना Email डालिए:");
    const password = prompt("अपना Password डालिए:");

    if (!email || !password) {
        alert("Email और Password दोनों जरूरी हैं।");
        return;
    }

    if (password.length < 6) {
        alert("❌ Password कम से कम 6 characters का होना चाहिए।");
        return;
    }

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created successfully! 🎉");
    } catch (error) {
        alert("❌ Account नहीं बन पाया। " + error.code);
        console.log(error);
    }
});

// =========================
// Forgot Password
// =========================

const forgotPasswordButton =
    document.getElementById("forgotPasswordButton");

forgotPasswordButton.addEventListener("click", async function() {
    const email = prompt("अपना Email डालिए:");

    if (!email) {
        alert("Email जरूरी है।");
        return;
    }

    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset email भेज दिया गया है। 📧");
    } catch (error) {
        alert("❌ Password reset failed: " + error.code);
        console.log(error);
    }
});

// =========================
// Login State
// =========================

onAuthStateChanged(auth, function(user) {
    const logoutButton =
        document.getElementById("logoutButton");

    const userInfo =
        document.getElementById("userInfo");

    if (user) {
        console.log("User logged in:", user.email);

        loginForm.style.display = "none";
        signupButton.style.display = "none";

        userInfo.innerText =
            "👋 Welcome! " + user.email;

        userInfo.style.display = "block";
        logoutButton.style.display = "block";

    } else {
        loginForm.style.display = "block";
        signupButton.style.display = "inline-block";

        userInfo.style.display = "none";
        logoutButton.style.display = "none";

        console.log("No user logged in");
    }
});

// =========================
// Logout
// =========================

const logoutButton =
    document.getElementById("logoutButton");

logoutButton.addEventListener("click", async function() {
    try {
        await signOut(auth);
        alert("Logout successful!");
    } catch (error) {
        alert("❌ Logout failed: " + error.code);
        console.log(error);
    }
});

// =========================
// Show / Hide Password
// =========================

const showPasswordCheckbox =
    document.getElementById("showPasswordCheckbox");

const passwordInput =
    loginForm.querySelector('input[type="password"]');

showPasswordCheckbox.addEventListener("change", function() {
    if (showPasswordCheckbox.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});

// =========================
// Back To Top
// =========================

const backToTop =
    document.getElementById("backToTop");

backToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
