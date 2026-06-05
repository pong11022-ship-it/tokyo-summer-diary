const swiper = new Swiper(".diarySwiper", {
  speed: 500,
  grabCursor: true,
  centeredSlides: true,
});

const counter = document.querySelector(".page-counter");
const slides = document.querySelectorAll(".swiper-slide");

counter.textContent = `1 / ${slides.length}`;

swiper.on("slideChange", () => {
  counter.textContent =
    `${swiper.activeIndex + 1} / ${slides.length}`;
});
