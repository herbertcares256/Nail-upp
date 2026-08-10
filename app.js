function hideAll() {
  document.getElementById("home").style.display = "none";
  document.getElementById("homeBooking").style.display = "none";
  document.getElementById("salonBooking").style.display = "none";
  document.getElementById("technician").style.display = "none";
}

function goHome() {
  hideAll();
  document.getElementById("home").style.display = "block";
}

function showHomeBooking() {
  hideAll();
  document.getElementById("homeBooking").style.display = "block";
}

function showSalonBooking() {
  hideAll();
  document.getElementById("salonBooking").style.display = "block";
}

function showTechnician() {
  hideAll();
  document.getElementById("technician").style.display = "block";
}

function submitHomeBooking() {

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const location = document.getElementById("location").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const notes = document.getElementById("notes").value;

  if (!name || !phone || !location || !service || !date || !time) {
    alert("Please fill in all required booking details.");
    return;
  }

  const booking = {
    type: "Home Service",
    name: name,
    phone: phone,
    location: location,
    service: service,
    date: date,
    time: time,
    notes: notes
  };

  localStorage.setItem("nailUppBooking", JSON.stringify(booking));

  showConfirmation();
}

function submitSalonBooking() {
  alert("🎉 Salon booking received! We will connect you with an available salon.");
}

function registerTechnician() {
  alert("✅ Thank you! Your nail technician registration has been received.");
}

function showConfirmation() {

  hideAll();

  const confirmation = document.createElement("section");

  confirmation.id = "confirmation";

  confirmation.innerHTML = `
    <h2>🎉 Booking Received!</h2>

    <p>Your Nail Upp booking request has been received.</p>

    <p>We will connect you with an available nail technician.</p>

    <div class="booking-card">
      <h3>📋 Booking Details</h3>

      <p><strong>Name:</strong> ${escapeHTML(
        JSON.parse(localStorage.getItem("nailUppBooking")).name
      )}</p>

      <p><strong>Service:</strong> ${escapeHTML(
        JSON.parse(localStorage.getItem("nailUppBooking")).service
      )}</p>

      <p><strong>Location:</strong> ${escapeHTML(
        JSON.parse(localStorage.getItem("nailUppBooking")).location
      )}</p>

      <p><strong>Date:</strong> ${
        JSON.parse(localStorage.getItem("nailUppBooking")).date
      }</p>

      <p><strong>Time:</strong> ${
        JSON.parse(localStorage.getItem("nailUppBooking")).time
      }</p>
    </div>

    <button onclick="goHome()">🏠 Return Home</button>

    <h3>📞 Customer Care</h3>
    <p>Customer care contacts will be added here.</p>
  `;

  document.querySelector("main").appendChild(confirmation);
}

function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

goHome();
