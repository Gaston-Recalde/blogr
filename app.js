const navToggle = document.querySelector(".nav__toggle");
const navUl = document.querySelector(".nav__ul");
const ul__li = document.querySelectorAll('.ul__li');
const ul__container = document.querySelectorAll('.ul__container');
const flecha = document.querySelectorAll('.li__arrow');
const flecha2 = document.querySelectorAll('.li__arrow--light');
const open__nav = document.querySelector('.open');
const close__nav = document.querySelector('.close');

navToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  navUl.classList.toggle("nav__ul__visible");
  open__nav.classList.toggle('open--close');
  close__nav.classList.toggle('close--active');
});

ul__li.forEach((item, index) => {
  item.addEventListener('click', () => {
    ul__container[index].classList.toggle('ul__container--active');

    flecha[index].classList.toggle('up');
    flecha2[index].classList.toggle('up');
  });
});