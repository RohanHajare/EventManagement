(function($) {
    'use strict';
  
    function updateDashboardSummary() {
      const bookings = JSON.parse(localStorage.getItem("eventBookings")) || [];
  
      const total = bookings.length;
      const today = new Date().toISOString().split("T")[0];
  
      const upcoming = bookings.filter(b => b.date > today).length;
      const todayEvents = bookings.filter(b => b.date === today).length;
  
      $("#totalBookings").text(total);
      $("#upcomingEvents").text(upcoming);
      $("#todaysEvents").text(todayEvents);
    }
  
    // Run it once on page load
    $(function() {
      updateDashboardSummary();
    });
  
  })(jQuery);
  