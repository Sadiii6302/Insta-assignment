// Get references to the DOM elements for login and registration
const loginForm = document.getElementById('login-form');
const registrationForm = document.getElementById('form');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const upiInput = document.getElementById('upi-input');
const errorMessage = document.getElementById('error-message');

// Email validation: should include '@gmail.com'
function validateEmail(email) {
  const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return gmailPattern.test(email);
}

// Password validation: must be exactly 8 digits
function validatePassword(password) {
  const passwordPattern = /^\d{8}$/; // Exactly 8 digits
  return passwordPattern.test(password);
}

// UPI validation: must be exactly 4 digits
function validateUPI(upi) {
  const upiPattern = /^\d{4}$/; // Exactly 4 digits
  return upiPattern.test(upi);
}

// Listen for login form submission
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Clear previous error message
    errorMessage.textContent = '';

    // Check if email is valid
    if (!validateEmail(email)) {
      errorMessage.textContent = 'Please enter a valid Gmail address (e.g., user@gmail.com).';
      errorMessage.style.color = 'red';
      return;
    }

    // Check if password is valid
    if (!validatePassword(password)) {
      errorMessage.textContent = 'Password must be exactly 8 digits.';
      errorMessage.style.color = 'red';
      return;
    }

    // If validation passes, show success message and redirect (example)
    errorMessage.textContent = 'Login successful!';
    errorMessage.style.color = 'green';
    window.location.href = 'balance.html'; // Redirect to balance page
  });

  // Clear error message when the user starts typing
  emailInput.addEventListener('input', () => {
    errorMessage.textContent = '';
  });

  passwordInput.addEventListener('input', () => {
    errorMessage.textContent = '';
  });
}

// Listen for registration form submission
if (registrationForm) {
  registrationForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const email = emailInput.value.trim();
    const upi = upiInput.value.trim();

    // Clear previous error message
    errorMessage.textContent = '';

    // Check if email is valid
    if (!validateEmail(email)) {
      errorMessage.textContent = 'Please enter a valid Gmail address (e.g., user@gmail.com).';
      errorMessage.style.color = 'red';
      return;
    }

    // Check if UPI is valid
    if (!validateUPI(upi)) {
      errorMessage.textContent = 'UPI must be exactly 4 digits.';
      errorMessage.style.color = 'red';
      return;
    }

    // If validation passes, show success message and proceed
    errorMessage.textContent = 'Registration successful!';
    errorMessage.style.color = 'green';
  });

  // Clear error message when the user starts typing
  emailInput.addEventListener('input', () => {
    errorMessage.textContent = '';
  });

  upiInput.addEventListener('input', () => {
    errorMessage.textContent = '';
  });
}
