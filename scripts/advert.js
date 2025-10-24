// 1️⃣ Function to toggle nav when hamburger is clicked
function toggleMenu() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("open");
    });
}

// 2️⃣ Function to close menu when clicking outside
function closeMenuOnClickOutside() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    document.addEventListener("click", (event) => {
        const isClickInsideMenu = navLinks.contains(event.target) || hamburger.contains(event.target);

        if (!isClickInsideMenu) {
            navLinks.classList.remove("active");
            hamburger.classList.remove("open");
        }
    });
}

// 3️⃣ Function to handle form submission for both enquiry & contact
function handleFormSubmission(formId, buttonId) {
    const form = document.getElementById(formId);
    const button = document.getElementById(buttonId);

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevents page reload
        button.textContent = "Processing...";

        setTimeout(() => {
            button.textContent = "Completed ✅";
            alert("Your form has been submitted successfully!");
            form.reset(); // Optional: Clear the form
        }, 2000); // Simulates processing delay
    });
}

// ✅ Initialize all when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    toggleMenu();
    closeMenuOnClickOutside();
    handleFormSubmission("enquiryForm", "enquiryBtn"); // Make sure IDs match your HTML
    handleFormSubmission("contactForm", "contactBtn");
});
