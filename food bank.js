document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent form from submitting

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  if (username === 'admin' && password === 'password') {
    errorMsg.textContent = '';
    alert('Login successful!');
    window.location.href="login.html"
    // redirect or load dashboard here
  } else {
    errorMsg.textContent = 'Invalid username or password';
  }
});