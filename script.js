// script.js मध्ये टाक
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

