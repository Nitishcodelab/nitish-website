function hello() {
    document.getElementById("message").innerText =
        "Welcome Nitish! 🎉 तुम coding सीख रहे हो।";
}

const forms = document.querySelectorAll("form");

forms[1].addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Login button काम कर रहा है! 🎉");
});
