// Optional: keep dropdown open on click for mobile compatibility
document.querySelectorAll('.has-dropdown > a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    link.nextElementSibling.classList.toggle('open');
  });
});
let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  slides.forEach((slide, index) => {
    slide.style.opacity = index === slideIndex ? '1' : '0';
  });

  slideIndex = (slideIndex + 1) % totalSlides;
}

function changeSlide(n) {
  const slides = document.querySelectorAll('.slide');
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlides();
}

document.addEventListener('DOMContentLoaded', () => {
  showSlides();
  setInterval(showSlides, 3000); // Change slide every 3 seconds
});

