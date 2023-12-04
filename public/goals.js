let slideIndex = 1;
let numberOfSlides = 1;
showSlides(slideIndex);

function changeSlides(offset) {
  slideIndex += offset;
  showSlides();
}

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  if (slideIndex < 1) {
    slideIndex = 1;
  }
  if (slideIndex + numberOfSlides - 1 > slides.length) {
    slideIndex = slides.length - numberOfSlides + 1;
  }
  // Get all slides and hide them
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = slideIndex - 1; i < slideIndex + numberOfSlides - 1; i++) {
    slides[i].style.display = "block";
  }
}

const widthQuery = window.matchMedia("(max-width: 800px)");

function checkWidth(widthQuery) {
  if (widthQuery.matches) {
    numberOfSlides = 1;
  } else {
    numberOfSlides = 2;
  }
  showSlides();
}

widthQuery.addEventListener("change", checkWidth);

checkWidth(widthQuery);
