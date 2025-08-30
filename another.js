function openAccount(email) {
  localStorage.setItem("selectedAccount", email);
  window.location.href = "password.html";
}

