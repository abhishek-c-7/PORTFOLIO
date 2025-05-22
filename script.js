// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // You can add form validation and submission logic here
  alert('Thank you for your message!');
  this.reset();
});