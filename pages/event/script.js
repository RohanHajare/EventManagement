// Function to render events from localStorage
function renderEvents() {
  const eventGrid = document.getElementById("eventGrid");
  const bookings = JSON.parse(localStorage.getItem("eventBookings")) || [];

  eventGrid.innerHTML = ""; // Clear any existing content

  if (bookings.length === 0) {
    eventGrid.innerHTML = "<p>No upcoming events found.</p>";
    return;
  }

  bookings.forEach(booking => {
    const eventCard = document.createElement("div");
    eventCard.className = "event-card";

    eventCard.innerHTML = `
      <h3>${booking.eventType}</h3>
      <p><span class="icon">📅</span> ${booking.date}</p>
      <p><span class="icon">📍</span> ${booking.name}</p>
      <p><span class="icon">👥</span> ${booking.attendees} attendees</p>
      <p><span class="icon">✉️</span> ${booking.email}</p>
    `;

    eventGrid.appendChild(eventCard);
  });
}

// Run the render function on page load
window.onload = renderEvents;
