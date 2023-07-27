// Function to display a welcome message when the website is loaded
function showWelcomeMessage() {
    // Delay the alert by 3 seconds (3000 milliseconds)
    setTimeout(function() {
        alert("Welcome to our website!");
    }, 3000);
}

// Event listener to call the showWelcomeMessage() function when the website is fully loaded
window.addEventListener("load", showWelcomeMessage);
