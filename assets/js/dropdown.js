document.addEventListener('DOMContentLoaded', function() {
    // Select all dropdown items
    const dropdowns = document.querySelectorAll('.navigation-item.dropdown');
  
    dropdowns.forEach(function(dropdown) {
      const link = dropdown.querySelector('.navigation-link');
      
      // Handle click on the main link
      link.addEventListener('click', function(e) {
        // Prevent default action if it's a dropdown toggle
        // We only prevent default if the intention is to toggle, 
        // but here we want both hover and click to work.
        // If the link is "#", prevent default.
        if (link.getAttribute('href') === '#' || link.getAttribute('href').endsWith('#')) {
            e.preventDefault();
        }
        
        // Check if current is already open
        const isOpen = dropdown.classList.contains('open');

        // Close all other dropdowns
        dropdowns.forEach(d => {
          if (d !== dropdown) d.classList.remove('open');
        });
  
        // Toggle current
        if (isOpen) {
            dropdown.classList.remove('open');
        } else {
            dropdown.classList.add('open');
        }
        
        e.stopPropagation();
      });
    });
  
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
      dropdowns.forEach(function(dropdown) {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('open');
        }
      });
    });
  });
