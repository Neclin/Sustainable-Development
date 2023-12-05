const hamburger = document.querySelector(".hamburger-icon");
const navLinks = document.querySelector(".nav-bar");

function toggleNav() {
  navLinks.classList.toggle("show-nav");
  console.log("toggleNav");
}

hamburger.addEventListener("click", toggleNav);
