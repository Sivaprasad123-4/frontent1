// Simulated stored current password (replace with backend check later)
const storedPassword = "user123";

function togglePassword(fieldId, eyeBtn) {
  const input = document.getElementById(fieldId);
  if (input.type === "password") {
    input.type = "text";
    eyeBtn.textContent = "🙈"; 
  } else {
    input.type = "password";
    eyeBtn.textContent = "👁";
  }
}

document.getElementById("passwordForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const current = document.getElementById("currentPassword").value.trim();
  const newPass = document.getElementById("newPassword").value.trim();
  const rePass = document.getElementById("rePassword").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  errorMsg.textContent = "";
  errorMsg.style.color = "red";

  if (!current || !newPass || !rePass) {
    errorMsg.textContent = "⚠ All fields are required.";
    return;
  }

  if (current !== storedPassword) {
    errorMsg.textContent = "❌ Incorrect current password.";
    return;
  }

  if (newPass !== rePass) {
    errorMsg.textContent = "⚠ New passwords do not match.";
    return;
  }

  // If success
  errorMsg.style.color = "green";
  errorMsg.textContent = "✅ Password successfully updated.";
  this.reset();
});

