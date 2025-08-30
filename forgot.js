document.getElementById('forgotPasswordForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const errorMsg = document.getElementById('errorMsg');
  const successMsg = document.getElementById('successMsg');

  errorMsg.textContent = '';
  successMsg.textContent = '';

  if (!validateEmail(email)) {
    errorMsg.textContent = 'Please enter a valid email address.';
    return;
  }

  // Simulate successful response
  successMsg.textContent = 'If this email is registered, a reset link will be sent.';
  this.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
