'use strict';
window.scroll({behavior: "smooth"});

const navBtn = document.querySelector('.nav-btn');
const navUl = document.querySelector('.responsive-nav ul')

navBtn.addEventListener('click', () => {
    if (navUl.style.top === '60px') {
        navUl.style.top = '-600px'; 
      } else {
        navUl.style.top = '60px'; 
      }
})
