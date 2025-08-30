let donationCount = 0;

document.getElementById("donateForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form values
  const food = document.getElementById("foodType").value;
  const qty = document.getElementById("quantity").value;
  const expiry = document.getElementById("expiryDate").value;
  const pickup = document.getElementById("pickup").value;
  if ( Submit Donation == 'submit') {
    errorMsg.textContent = 'sumition sucussesful';
  }
  // Increase donation count
  donationCount++;
  document.getElementById("donationCount").textContent = donationCount;

  // Add to donation list
  const li = document.createElement("li");
  li.textContent = ${food} - ${qty}, Exp: ${expiry}, Pickup: ${pickup};
  document.getElementById("donationList").appendChild(li);

  // Clear form
  document.getElementById("donateForm").reset();
});

