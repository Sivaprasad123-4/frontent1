let generatedOTP = null;

function sendOTP() {
  // Generate random 6-digit OTP
  generatedOTP = Math.floor(100000 + Math.random() * 900000);
  
  // Show OTP section
  document.getElementById("otpSection").style.display = "block";
  
  // For demo: show OTP in alert (in real apps, it will be sent via SMS)
  alert("Your OTP is: " + generatedOTP);
}

function verifyOTP() {
  let enteredOTP = document.getElementById("otpInput").value;
  let message = document.getElementById("otpMessage");
  
  if (enteredOTP == generatedOTP) {
    message.textContent = "✅ Details updated successfully!";
    message.className = "success";
  } else {
    message.textContent = "❌ Invalid OTP. Please try again.";
    message.className = "error";
  }
}

