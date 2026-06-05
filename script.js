const swiper = new Swiper(".diarySwiper", {

  direction: "horizontal",

  slidesPerView: 1,

  speed: 650,

  grabCursor: true,

  resistanceRatio: 0.7,

  longSwipes: true,

  longSwipesRatio: 0.2,

  touchRatio: 1.2,

  watchSlidesProgress: true,

  effect: "slide",

});

const slides =
document.querySelectorAll(".swiper-slide");

const counter =
document.querySelector(".counter");

function updateCounter() {

  const current =
    String(swiper.activeIndex + 1)
    .padStart(2, "0");

  const total =
    String(slides.length)
    .padStart(2, "0");

  counter.textContent =
    `${current} / ${total}`;
}

updateCounter();

swiper.on("slideChange", () => {

  updateCounter();

});
