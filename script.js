// ===== Scroll Active Link =====
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".navbar ul li a");

  let scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === section.id) {
          link.classList.add("active");
        }
      });
    }
  });
});

// ===== Mobile Menu Toggle =====
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById('menu-btn');
  const navbar = document.getElementById('navbar').querySelector('ul');

  menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active'); // CSS मध्ये display:flex केल्या जाईल
  });
});

