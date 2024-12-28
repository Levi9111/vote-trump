'use strict';
const navBtn = document.querySelector('.nav-btn');
const navUl = document.querySelector('.responsive-nav ul')

navBtn.addEventListener('click', () => {
    if (navUl.style.top === '60px') {
        navUl.style.top = '-600px'; 
      } else {
        navUl.style.top = '60px'; 
      }
})
// 1366 ---> 100%
// 1517 ---> 90%
// 1707 ---> 80%
// 1821 ---> 75%
// 2049 ---> 67%