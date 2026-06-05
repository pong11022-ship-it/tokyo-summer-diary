const swiper=new Swiper('.diarySwiper',{speed:600});
const c=document.querySelector('.counter');
const total=document.querySelectorAll('.swiper-slide').length;
function u(){c.textContent=`${String(swiper.activeIndex+1).padStart(2,'0')} / ${String(total).padStart(2,'0')}`}
u();swiper.on('slideChange',u);