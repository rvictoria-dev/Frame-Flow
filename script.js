const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let current = 0;
let total = slides.length;

function goToSlide(index) {
  if (index < 0) index = total - 1;
  if (index >= total) index = 0;

  current = index;

  carousel.style.transform = `translateX(-${current * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[current].classList.add('active');
}

prev.addEventListener('click', () => {
  goToSlide(current - 1);
});

next.addEventListener('click', () => {
  goToSlide(current + 1);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
});