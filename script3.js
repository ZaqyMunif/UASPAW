document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const messageDiv = document.getElementById("message");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Placeholder logic for login validation (you should implement server-side authentication)
        if (username === "user123" && password === "password123") {
            messageDiv.textContent = "Login successful!";
            messageDiv.style.color = "green";
            // Redirect to the homepage (you can replace 'home.html' with your actual homepage URL)
            window.location.href = "index.html";
        } else {
            messageDiv.textContent = "Invalid username or password.";
            messageDiv.style.color = "red";
        }
    });
});
