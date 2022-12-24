'use strict';
{
 const desc=document.getElementById('desc');
 const about=document.getElementById('about');

 about.addEventListener('click',()=>{
  desc.classList.add('appear');
 });

 desc.addEventListener('click',()=>{
  desc.classList.remove('appear');
 });
}