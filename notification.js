let notifications = [
  { id: 1, name: "Ravi Kumar", location: "Hyderabad" },
  { id: 2, name: "Anita Sharma", location: "Vijayawada" },
  { id: 3, name: "Suresh Reddy", location: "Guntur" }
];

const notifList = document.getElementById("notifList");
const notifBadge = document.getElementById("notifBadge");

function updateBadge() {
  notifBadge.textContent = notifications.length;
  notifBadge.style.display = notifications.length > 0 ? "inline" : "none";
}

function loadNotifications() {
  notifList.innerHTML = "";
  if (notifications.length === 0) {
    notifList.innerHTML = "<p>No new notifications ✅</p>";
    updateBadge();
    return;
  }

  notifications.forEach(n => {
    const div = document.createElement("div");
    div.className = "notif-card";
    div.innerHTML = `
      <p><b>Name:</b> ${n.name}</p>
      <p><b>Location:</b> ${n.location}</p>
      <div class="actions">
        <button class="reject" onclick="rejectNotif(${n.id})">Reject</button>
        <button class="accept" onclick="acceptNotif(${n.id})">Accept</button>
      </div>
    `;
    notifList.appendChild(div);
  });
  updateBadge();
}

function rejectNotif(id) {
  notifications = notifications.filter(n => n.id !== id);
  loadNotifications();
}

function acceptNotif(id) {
  const n = notifications.find(r => r.id === id);
  const div = document.createElement("div");
  div.className = "notif-card";
  div.innerHTML = `
    <h3>Provide Delivery Details for ${n.name}</h3>
    <input type="text" id="donorLocation" placeholder="Enter picup location">
    <div style="display:flex; gap:10px;">
      <input type="time" id="donorTime" style="flex:2;">
      <select id="donorAmPm" style="flex:1;">
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
    <input type="tel" id="donorContact" placeholder="Enter contact number (10 digits)" maxlength="10" pattern="\\d{10}">
    <button class="accept" style="width:100%; margin-top:10px;" onclick="sendDetails('${n.name}', ${n.id})">Send</button>
    <p id="errorMsg" class="error"></p>
  `;
  notifList.innerHTML = "";
  notifList.appendChild(div);
}

function sendDetails(name, id) {
  const location = document.getElementById("donorLocation").value.trim();
  const time = document.getElementById("donorTime").value;
  const ampm = document.getElementById("donorAmPm").value;
  const contact = document.getElementById("donorContact").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  // Reset error
  errorMsg.textContent = "";

  if (!location) {
    errorMsg.textContent = "⚠ Please enter delivery location.";
    return;
  }
  if (!time) {
    errorMsg.textContent = "⚠ Please select delivery time.";
    return;
  }
  if (contact.length !== 10 || isNaN(contact)) {
    errorMsg.textContent = "⚠ Contact number must be exactly 10 digits.";
    return;
  }

  notifList.innerHTML = `
    <div class="notif-card">
      ✅ Request from <b>${name}</b> accepted!<br><br>
      📍 Delivery Location: ${location}<br>
      ⏰ Time: ${time} ${ampm}<br>
      ☎ Contact: ${contact}<br><br>
      🔔 The requester <b>${name}</b> has been notified!
    </div>
  `;
  notifications = notifications.filter(n => n.id !== id);
  updateBadge();
}

loadNotifications();

