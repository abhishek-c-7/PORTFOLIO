// Toggle the navigation menu on small screens
const toggleButton = document.querySelector("#toggle-navbar");
const menu = document.querySelector("#menu");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Smooth scrolling for anchor links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 50, // Adjust for fixed navbar
      behavior: "smooth",
    });
  });
});

// Scroll-to-top button functionality
const scrollToTopButton = document.createElement("button");
scrollToTopButton.textContent = "↑";
sc
