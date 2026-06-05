
const s=new Swiper('.diary',{speed:700});
const c=document.querySelector('.counter');
const total=document.querySelectorAll('.swiper-slide').length;
function u(){c.textContent=`${String(s.activeIndex+1).padStart(2,'0')} / ${String(total).padStart(2,'0')}`}
u();s.on('slideChange',u);
