"use strict"
let $ = document

// let navbarBtn =$.getElementById('btn-navbar')
// let navRemoveBtn =$.getElementById('nav-remove')
// let navToggleBtn =$.querySelector('.nav_toggle')
let nextBtn = $.getElementById('next');
let preBtn = $.getElementById('pre');
let slidItem = $.querySelectorAll('.main_about_portfolio');
let slider = $.querySelector('.main_about_slider');

let currentIndex = 0;
let autoContect;
// menu nav mobile
document.addEventListener("DOMContentLoaded", () => {
    const navbarBtn = document.querySelector("#btn-navbar");
    const navRemoveBtn = document.querySelector("#nav-remove");
    const navToggle = document.querySelector(".nav_toggle");
  
    navbarBtn.addEventListener("click", () => {
      navToggle.classList.add("nav_toggle-active");
    });
  
    navRemoveBtn.addEventListener("click", () => {
      navToggle.classList.remove("nav_toggle-active");
    });
  });
//  slider section about
function showItem(index, move) {

    slidItem.forEach((slide) => {
        slide.classList.remove('main_about_portfolio_left--Active', 'slide-in-right', 'slide-in-left', 'slide-out-left', 'slide-out-right');
    });

    if (move === 'next') {
        slidItem[index].classList.add('slide-in-right');
        if (slidItem[currentIndex]) {
            slidItem[currentIndex].classList.add('slide-out-left');
        }
    } else if (move === 'pre') {
        slidItem[index].classList.add('slide-in-left');
        if (slidItem[currentIndex]) {
            slidItem[currentIndex].classList.add('slide-out-right');
        }
    } else {

        slidItem[index].classList.add('main_about_portfolio_left--Active');
    }

    currentIndex = index;


    setTimeout(() => {
        slidItem.forEach(slide => {
            slide.classList.remove('slide-in-right', 'slide-in-left', 'slide-out-left', 'slide-out-right');
        });
        slidItem[currentIndex].classList.add('main_about_portfolio_left--Active');
    }, 500);
}

function autoSlide() {
    clearInterval(autoContect)
     autoContect = setInterval(() => {
        let newIndex = (currentIndex + 1) % slidItem.length;
        showItem(newIndex, 'next')
    }, 3000);

}

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let newIndex = (currentIndex + 1) % slidItem.length;
    showItem(newIndex, 'next');
    autoSlide()
});

preBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let newIndex = (currentIndex - 1 + slidItem.length) % slidItem.length;
    showItem(newIndex, 'pre');
    autoSlide()
});


showItem(currentIndex);
autoSlide()
//  dropdown href
document.querySelectorAll('.nav_dropdown_link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });