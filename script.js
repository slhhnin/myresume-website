// Example: Toggle Dark Mode
document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Toggle Dark Mode";
    toggleButton.style.margin = "10px";
    toggleButton.style.padding = "8px";
    toggleButton.style.cursor = "pointer";
    document.body.prepend(toggleButton);

    toggleButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
    });
});

// Dark mode styles
const darkModeStyles = document.createElement("style");
darkModeStyles.innerHTML = `
    .dark-mode {
        background-color: #222;
        color: white;
    }
    .dark-mode section {
        background: #333;
        color: white;
    }
`;
document.head.appendChild(darkModeStyles);
