'use strict';
// {

// const testTarget=document.getElementById('testTarget');

// function callback(entries){
//     if(entries[0].isIntersecting){
//         entries[0].testTarget.classList.add('appear');
//     }else{
//         entries[0].testTarget.classList.remove('appear');
//     }
// }
// const testOptions={
//     threshold:0.2,
// }

// const testObs = new IntersectionObserver(callback,testOptions);

// testObs.observe(testTarget);


// }
{
// contents Observer
const contents = document.querySelectorAll('.content');

function contentCB(entries,obs) {
  console.log(entries);
  entries.forEach(entry=>{
    if (!entry.isIntersecting) {
      return;
      }
      entry.target.classList.add('appear');
    obs.unobserve(entry.target);
  });
}
  const options = {
    threshold: 0.2,
    rootMargin:'0px 0px 20px',
  };
  const contentObs = new IntersectionObserver(contentCB, options);
  contents.forEach(cnt=>{
    contentObs.observe(cnt);
    
  });

  // to_top Observer
  const scrollTarget=document.getElementById('scrollTarget');
  const toTop=document.getElementById('to_top');
  function onScrollCB(entries){
    entries.forEach(entry=>{
      if(!entry.isIntersecting){
        header.classList.add('scrolled');
        toTop.classList.add('appear');
      }else{
        header.classList.remove('scrolled');
        toTop.classList.remove('appear');
      }

    });
  }
  const header=document.querySelector('header');
  const onScrollObs=new IntersectionObserver(onScrollCB);
  onScrollObs.observe(scrollTarget);



}