const services = [
  { name: "Classic Manicure", price: 15000 },
  { name: "Gel Manicure", price: 25000 },
  { name: "Acrylic Nails", price: 35000 },
  { name: "Gel Pedicure", price: 30000 },
  { name: "Nail Art", price: 20000 }
];

function showHomeService() {
  document.querySelector(".container").innerHTML = `
    <h2>🏠 Book Home Service</h2>

    <label>📍 Your location</label>
    <input id="location" type="text" placeholder="Enter your location">

    <label>💅 Choose a service</label>
    <select id="service">
      <option value="">Select service</option>
      ${services.map((s, i) =>
        `<option value="${i}">${s.name} - UGX ${s.price.toLocaleString()}</option>`
      ).join("")}
    </select>

    <label>📅 Choose date</label>
    <input id="date" type="date">

    <label>⏰ Choose time</label>
    <input id="time" type="time">

    <button onclick="confirmHomeBooking()">Continue Booking</button>

    <button class="back" onclick="location.reload()">
      ← Back
    </button>
  `;
}

function showSalonBooking() {
  document.querySelector(".container").innerHTML = `
    <h2>💅 Book a Nail Salon</h2>

    <label>📍 Choose your location</label>
    <input id="location" type="text" placeholder="Enter your location">

    <label>🏪 Choose salon</label>
    <select id="salon">
      <option value="">Select salon</option>
      <option>Nail Upp Beauty Lounge</option>
      <option>Glam Nails Salon</option>
      <option>Perfect Nails Studio</option>
    </select>

    <label>💅 Choose service</label>
    <select id="service">
      <option value="">Select service</option>
      ${services.map((s, i) =>
        `<option value="${i}">${s.name} - UGX ${s.price.toLocaleString()}</option>`
      ).join("")}
    </select>

    <label>📅 Choose date</label>
    <input id="date" type="date">

    <label>⏰ Choose time</label>
    <input id="time" type="time">

    <button onclick="confirmSalonBooking()">Continue Booking</button>

    <button class="back" onclick="location.reload()">
      ← Back
    </button>
  `;
}

function confirmHomeBooking() {
  const location = document.getElementById("location").value;
  const serviceIndex = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!location || serviceIndex === "" || !date || !time) {
    alert("Please complete all booking details.");
    return;
  }

  const service = services[serviceIndex];

  showConfirmation(
    "Home Service",
    service.name,
    service.price,
    location,
    date,
    time
  );
}

function confirmSalonBooking() {
  const location = document.getElementById("location").value;
  const salon = document.getElementById("salon").value;
  const serviceIndex = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!location || !salon || serviceIndex === "" || !date || !time) {
    alert("Please complete all booking details.");
    return;
  }

  const service = services[serviceIndex];

  showConfirmation(
    salon,
    service.name,
    service.price,
    location,
    date,
    time
  );
}

function showConfirmation(type, service, price, location, date, time) {
  document.querySelector(".container").innerHTML = `
    <h2>✅ Booking Details</h2>

    <div class="booking-card">
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Type:</strong> ${type}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p class="price">UGX ${price.toLocaleString()}</p>
    </div>

    <button onclick="placeBooking()">
      📲 Confirm Booking
    </button>

    <button class="back" onclick="location.reload()">
      ← Cancel
    </button>
  `;
}

function placeBooking() {
  document.querySelector(".container").innerHTML = `
    <h2>🎉 Booking Received!</h2>

    <p>Your Nail Upp booking request has been received.</p>

    <p>We will connect you with an available nail technician or salon.</p>

    <button onclick="location.reload()">
      🏠 Return Home
    </button>

    <h3>📞 Customer Care</h3>
    <p>Customer care contacts will be added here.</p>
  `;
}

function becomeTechnician() {
  document.querySelector(".container").innerHTML = `
    <h2>👩‍🎨 Become a Nail Technician</h2>

    <input type="text" placeholder="Full name">

    <input type="tel" placeholder="Phone number">

    <input type="text" placeholder="Location">

    <input type="text" placeholder="Services you offer">

    <button onclick="alert('Technician registration received!')">
      Submit Registration
    </button>

    <button class="back" onclick="location.reload()">
      ← Back
    </button>
  `;
}

// Connect the buttons on the home page
function bookHomeService() {
  showHomeService();
}

function bookSalon() {
  showSalonBooking();
}
