
const s=new Swiper('.diary',{speed:600});
const c=document.querySelector('.counter');
const t=document.querySelectorAll('.swiper-slide').length;
function u(){c.textContent=`${String(s.activeIndex+1).padStart(2,'0')} / ${String(t).padStart(2,'0')}`}
u();s.on('slideChange',u);
