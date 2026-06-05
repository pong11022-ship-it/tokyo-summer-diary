/* ======================
   TOKYO SUMMER DIARY
====================== */

const swiper = new Swiper(".diarySwiper", {

  direction: "horizontal",

  slidesPerView: 1,

  spaceBetween: 24,

  speed: 500,

  centeredSlides: true,

  grabCursor: true,

  resistanceRatio: 0.6,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  keyboard: {
    enabled: true,
  },

  mousewheel: false,

});

/* PAGE COUNTER */

const slides =
document.querySelectorAll(".swiper-slide");

const counter =
document.querySelector(".page-counter");

if(counter){

  counter.innerText =
  `1 / ${slides.length}`;

  swiper.on("slideChange", () => {

    counter.innerText =
    `${swiper.activeIndex + 1} / ${slides.length}`;

  });

}
