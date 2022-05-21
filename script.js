'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


btnScrollTo.addEventListener("click", function (e) {

  section1.scrollIntoView({
    behavior: "smooth"
  });
});

// document.querySelectorAll('.nav__link').forEach(function (el) {
// el.addEventListener('click', function (e) {
// e.preventDefault();
// const id = this.getAttribute('href');
// console.log(id);
// console.log("LINK");
// document.querySelector(id).scrollIntoView({
// behavior: "smooth"
// });
// });
// });
// 

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    console.log("LINK");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth"
    });
  }
});

const header = document.querySelector(".header");
const message = document.createElement("div");
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookie for improved functionality and analitics. <button class="btn btn--close-cookie" >Got it!</button>';
// header.prepend(message)
header.append(message)
// header.append(message.cloneNode(true))
// header.before(message);
// header.after(message)

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

message.style.backgroundColor = "#37383d"
message.style.width = "120%";











// console.log(getComputedStyle(message).height);

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";

// document.documentElement.style.setProperty('--color-primary', 'orangered')

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = "Beautiful minimalist logo"
// logo.setAttribute('company', "Bankist")
// console.log(logo.getAttribute('src'));
// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute("href"));

// console.log(logo.dataset.versionNumber);

// logo.classList.add("c", "j");
// logo.classList.remove("c", "j");
// logo.classList.toggle("c");
// logo.classList.contains("c");
// logo.className = "jonas";

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventlistener: Great! You are reading the heading');

  // h1.removeEventListener('mouseenter', alertH1);
}


h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter',
  alertH1), 3000);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
// this.style.backgroundColor = randomColor()
// console.log(this === e.currentTarget);

// e.stopPropagation();
// });
// 
// document.querySelector('.nav__links').addEventListener('click', function (e) {
// this.style.backgroundColor = randomColor()
// console.log("container", e.target, e.currentTarget);
// 
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
// this.style.backgroundColor = randomColor()
// console.log("nav", e.target, e.currentTarget);
// 
// });



// console.log(randomColor(0, 255));
// h1.onmouseenter = function (e) {
// alert('onmouseenter: great... you are reading the head');
// };