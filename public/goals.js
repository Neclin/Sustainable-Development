let slideIndex = 1;
showSlides(slideIndex);

function changeSlides(offset) {
  showSlides((slideIndex += offset));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  n > slides.length ? (slideIndex = 1) : null;
  n < 1 ? (slideIndex = slides.length) : null;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
  slides[slideIndex].style.display = "flex";
}
