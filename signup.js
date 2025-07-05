document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const signupMessage = document.getElementById('signupMessage');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Trim and get values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Check for empty fields
        if (!name || !email || !password || !confirmPassword) {
            showMessage('Please fill in all fields', 'error');
            return;
        }

        // Validate email format
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address', 'error');
            return;
        }

        // Check password length
        if (password.length < 8) {
            showMessage('Password must be at least 8 characters', 'error');
            return;
        }

        // Check password match
        if (password !== confirmPassword) {
            showMessage('Passwords do not match', 'error');
            return;
        }

        // All validations passed
        showMessage('Account created successfully! Redirecting...', 'success');

        // Redirect after short delay
        setTimeout(() => {
            window.location.href = 'index.html'; // Redirect to homepage
        }, 1500);
    });

    // Email validation helper
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Display message in UI
    function showMessage(message, type) {
        signupMessage.textContent = message;
        signupMessage.className = 'signup-message'; // Reset
        signupMessage.classList.add(type); // Add success or error class
        signupMessage.style.display = 'block';
    }
});
