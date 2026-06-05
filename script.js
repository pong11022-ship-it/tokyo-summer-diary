// ========================================
// TOKYO SUMMER DIARY
// script.js
// ========================================

// 현재 페이지 표시용
const slider = document.querySelector('.slider');

const pages = document.querySelectorAll('.page');

let currentPage = 0;

// ----------------------------------------
// 페이지 인디케이터 생성
// ----------------------------------------

const indicator = document.createElement('div');
indicator.className = 'page-indicator';

pages.forEach((_, index) => {

  const dot = document.createElement('div');

  dot.className = 'dot';

  if(index === 0){
    dot.classList.add('active');
  }

  indicator.appendChild(dot);

});

document.body.appendChild(indicator);

const dots = document.querySelectorAll('.dot');

// ----------------------------------------
// 현재 페이지 감지
// ----------------------------------------

function updateIndicator(){

  const pageWidth = window.innerWidth;

  currentPage = Math.round(
    slider.scrollLeft / pageWidth
  );

  dots.forEach(dot =>
    dot.classList.remove('active')
  );

  if(dots[currentPage]){
    dots[currentPage].classList.add('active');
  }

}

slider.addEventListener(
  'scroll',
  updateIndicator
);

// ----------------------------------------
// 첫 로드 애니메이션
// ----------------------------------------

window.addEventListener('load', () => {

  document.body.classList.add('loaded');

});

// ----------------------------------------
// 폴라로이드 클릭 효과
// ----------------------------------------

const photos = document.querySelectorAll('.polaroid');

photos.forEach(photo => {

  photo.addEventListener('click', () => {

    photo.classList.toggle('selected');

  });

});

// ----------------------------------------
// 모바일 진동 (지원 기기)
// ----------------------------------------

photos.forEach(photo => {

  photo.addEventListener('touchstart', () => {

    if(navigator.vibrate){

      navigator.vibrate(15);

    }

  });

});

// ----------------------------------------
// 키보드 좌우 이동
// ----------------------------------------

document.addEventListener('keydown', (e) => {

  const width = window.innerWidth;

  if(e.key === 'ArrowRight'){

    slider.scrollBy({
      left: width,
      behavior: 'smooth'
    });

  }

  if(e.key === 'ArrowLeft'){

    slider.scrollBy({
      left: -width,
      behavior: 'smooth'
    });

  }

});

// ----------------------------------------
// 끝!
// ----------------------------------------
