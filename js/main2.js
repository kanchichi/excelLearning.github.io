'use strict';
{
  const observer = new IntersectionObserver((entries) => {
    // entries.forEach((entry) => console.log(entry));
  });
  
  // 監視したい要素をobserve
  observer.observe(document.querySelector('.content'));
  const callback = (entries,obs) => {
    entries.forEach((entry) => {
      // console.log({ entry });
      if (!entry.isIntersecting) {
      return;
      }
      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  };
  const option = {
    threshold:0.2,
  };
  const io = new IntersectionObserver(callback, option);
// //監視したい複数要素をターゲットにした
const targets = document.querySelectorAll(".content");
// console.log({ targets });
targets.forEach((target) => {
//監視したい対象をobserve
  io.observe(target);
});

// ★★★★★★to_top★★★★★★
const toTop=document.getElementById('to_top');
const scrolled=document.getElementById('scrolled');

function toTopCallback(entries){
  console.log('fired to toSaassa');
  entries.forEach(entry=>{
    if(!entry.isIntersecting){
      toTop.classList.add('appear');
    }else{
      toTop.classList.remove('appear');

    }

  });
  

}
toTop.addEventListener('click',e=>{
  e.preventDefault();
  window.scrollTo({
    top:0,
    behavior:'smooth',
  });
});


const topObserver=new IntersectionObserver(toTopCallback);
topObserver.observe(scrolled);




}