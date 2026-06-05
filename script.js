const swiper = new Swiper('.diarySwiper', {
  speed: 450,
  grabCursor: true,
  centeredSlides: false,
  spaceBetween: 0,
  resistanceRatio: 0.6,
});

const totalSlides =
  document.querySelectorAll('.swiper-slide').length;

const counter =
  document.querySelector('.counter');

function updateCounter() {
  counter.textContent =
    `${swiper.activeIndex + 1} / ${totalSlides}`;
}

updateCounter();

swiper.on('slideChange', () => {
  updateCounter();
});
