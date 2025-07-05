document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get input values
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Simple validation
        if (!email || !password) {
            showMessage('Please enter both email and password', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address', 'error');
            return;
        }

        // If validation passes
        showMessage('Successfully signed in! Redirecting...', 'success');
        
        // In a real application, you would send the data to a server here
        // For demo purposes, we'll just redirect after a delay
        setTimeout(() => {
            window.location.href = 'index.html'; // Redirect to dashboard
        }, 1500);
    });

    // Helper function to validate email format
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Helper function to show messages
    function showMessage(message, type) {
        loginMessage.textContent = message;
        loginMessage.className = 'login-message'; // Reset class
        loginMessage.classList.add(type);
        loginMessage.style.display = 'block';
    }
});