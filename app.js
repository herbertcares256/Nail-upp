// NAIL UPP - Technician System

// Save a customer booking
function requestBooking() {
    const name = document.getElementById("homeName")?.value;
    const phone = document.getElementById("homePhone")?.value;
    const location = document.getElementById("homeLocation")?.value;
    const service = document.getElementById("homeService")?.value;
    const date = document.getElementById("homeDate")?.value;
    const time = document.getElementById("homeTime")?.value;
    const instructions = document.getElementById("homeInstructions")?.value;

    if (!name || !phone || !location || !service || !date || !time) {
        alert("Please fill in all booking details.");
        return;
    }

    const booking = {
        id: Date.now(),
        name: name,
        phone: phone,
        location: location,
        service: service,
        date: date,
        time: time,
        instructions: instructions || "None",
        status: "Waiting for technician"
    };

    localStorage.setItem("nailUppBooking", JSON.stringify(booking));

    alert("Booking received! We are looking for an available technician.");

    window.location.href = "technician.html";
}


// Technician accepts booking
function acceptBooking() {
    const booking = JSON.parse(localStorage.getItem("nailUppBooking"));

    if (!booking) {
        alert("There are currently no bookings.");
        return;
    }

    booking.status = "Accepted by technician";

    localStorage.setItem("nailUppBooking", JSON.stringify(booking));

    alert("Booking accepted successfully!");

    displayBooking();
}


// Show booking to technician
function displayBooking() {

    const container = document.getElementById("bookingContainer");

    if (!container) return;

    const booking = JSON.parse(localStorage.getItem("nailUppBooking"));

    if (!booking) {
        container.innerHTML = `
            <div class="booking-card">
                <h2>📭 No New Bookings</h2>
                <p>There are currently no customer bookings.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="booking-card">

            <h2>📋 New Booking</h2>

            <p><strong>Customer:</strong> ${booking.name}</p>

            <p><strong>Phone:</strong> ${booking.phone}</p>

            <p><strong>Location:</strong> ${booking.location}</p>

            <p><strong>Service:</strong> ${booking.service}</p>

            <p><strong>Date:</strong> ${booking.date}</p>

            <p><strong>Time:</strong> ${booking.time}</p>

            <p><strong>Instructions:</strong> ${booking.instructions}</p>

            <p>
                <strong>Status:</strong>
                <span class="status">${booking.status}</span>
            </p>

            ${
                booking.status === "Waiting for technician"
                ?
                `<button onclick="acceptBooking()">✅ Accept Booking</button>`
                :
                `<h3>🟢 Booking Accepted</h3>`
            }

        </div>
    `;
}


// Technician registration
function registerTechnician() {

    const name = document.getElementById("techName")?.value;
    const phone = document.getElementById("techPhone")?.value;
    const location = document.getElementById("techLocation")?.value;
    const services = document.getElementById("techServices")?.value;
    const experience = document.getElementById("techExperience")?.value;

    if (!name || !phone || !location || !services) {
        alert("Please complete your technician registration.");
        return;
    }

    const technician = {
        name: name,
        phone: phone,
        location: location,
        services: services,
        experience: experience || "Not provided",
        status: "Offline"
    };

    localStorage.setItem(
        "nailUppTechnician",
        JSON.stringify(technician)
    );

    alert("Technician registration successful!");

    window.location.href = "technician.html";
}


// Technician online/offline
function toggleTechnicianStatus() {

    const technician =
        JSON.parse(localStorage.getItem("nailUppTechnician"));

    if (!technician) {
        alert("Please register as a technician first.");
        return;
    }

    technician.status =
        technician.status === "Online"
        ? "Offline"
        : "Online";

    localStorage.setItem(
        "nailUppTechnician",
        JSON.stringify(technician)
    );

    displayTechnician();
}


// Display technician information
function displayTechnician() {

    const info = document.getElementById("technicianInfo");

    if (!info) return;

    const technician =
        JSON.parse(localStorage.getItem("nailUppTechnician"));

    if (!technician) {
        info.innerHTML = `
            <h2>👩‍🎨 Technician Dashboard</h2>
            <p>No technician account found.</p>
        `;
        return;
    }

    info.innerHTML = `
        <h2>👩‍🎨 Welcome, ${technician.name}</h2>

        <p><strong>Phone:</strong> ${technician.phone}</p>

        <p><strong>Location:</strong> ${technician.location}</p>

        <p><strong>Services:</strong> ${technician.services}</p>

        <p><strong>Experience:</strong> ${technician.experience}</p>

        <p>
            <strong>Status:</strong>
            ${technician.status === "Online"
                ? "🟢 Online"
                : "🔴 Offline"}
        </p>

        <button onclick="toggleTechnicianStatus()">
            ${
                technician.status === "Online"
                ? "🔴 Go Offline"
                : "🟢 Go Online"
            }
        </button>
    `;
}


// Load technician dashboard
document.addEventListener("DOMContentLoaded", function () {
    displayBooking();
    displayTechnician();
});
