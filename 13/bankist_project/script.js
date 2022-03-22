'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//***********************************************************/
/////////////// learn more scroll to ptn /////////////////////
//***********************************************************/
//first apply scroll to
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

//add event listener to the section scroll to
btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

//***********************************************************/
/////////////// hover effect to nav bar /////////////////////
//***********************************************************/
//second add hover effect to nav bar
// 1- select the nav
const navBar = document.querySelector('.nav');

// 2- create functions
const mouseOnNav = function (e) {
  if (e.target.classList.contains('nav__link')) {
    document.querySelectorAll('.nav__link').forEach(link => {
      if (link !== e.target) link.style.opacity = this;
    });
  }
};

const mouseOutNav = function (e) {
  document
    .querySelectorAll('.nav__link')
    .forEach(link => (link.style.opacity = this));
};

//3- add events
navBar.addEventListener('mouseover', mouseOnNav.bind(0.5));

navBar.addEventListener('mouseout', mouseOutNav.bind(1));

//***********************************************************/
/////////////////// nav scroll to links /////////////////////
//***********************************************************/
// apply nav scroll
// 1- select links
const navLinks = document.querySelector('.nav__links');

//2- create functions
//
const goToLink = function (section) {
  section.scrollIntoView({ behavior: 'smooth' });
};

//3- add event listener
navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  if (!e.target.classList.contains('nav__link')) return;
  document
    .querySelector(e.target.getAttribute('href'))
    .scrollIntoView({ behavior: 'smooth' });
});

//***********************************************************/
/////////////// tabs btn's and content control  /////////////
//***********************************************************/
// apply tabs
// 1- select tab container
const tabContainer = document.querySelector('.operations__tab-container');
const allTabsContent = document.querySelectorAll('.operations__content');
const allTabs = document.querySelectorAll('.operations__tab');

// 2- create function
// no functions needed.

// 3- create event listener
tabContainer.addEventListener('click', function (e) {
  const clickedTab = e.target.closest('.operations__tab');
  if (!clickedTab) return;
  allTabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clickedTab.classList.add('operations__tab--active');
  allTabsContent.forEach(t =>
    t.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clickedTab.dataset.tab}`)
    .classList.add('operations__content--active');
});

//***********************************************************/
////////////////////// sticky nav bar  /////////////////////
//***********************************************************/
//apply sticky navigation
//select heder
const header = document.querySelector('header');
const options = {
  root: null,
  threshold: 0,
};

//create function

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting)
    document.querySelector('.nav').classList.add('sticky');
  else document.querySelector('.nav').classList.remove('sticky');
};

// create watcher
const headerObserver = new IntersectionObserver(stickyNav, {
  threshold: 0,
  root: null,
  rootMargin: '-200px',
});
headerObserver.observe(header);

//***********************************************************/
////////////////////// fade in sections  /////////////////////
//***********************************************************/
// apply fade up to sections
// 1- select all sections
const allSections = document.querySelectorAll('.section');

allSections.forEach(section => section.classList.add('section--hidden'));
// 2- create function
const fadeIn = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

// 3- create an observer
const sectionsObserver = new IntersectionObserver(fadeIn, {
  root: null,
  threshold: 0.15,
});

// 4- add sections to observer
allSections.forEach(function (section) {
  sectionsObserver.observe(section);
});

//***********************************************************/
/////////////////////// image lazy load  /////////////////////
//***********************************************************/
// apply lazy load
// select images
const allImages = document.querySelectorAll('img[data-src]');

// create function
const showImage = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', () =>
    entry.target.classList.remove('lazy-img')
  );

  observer.unobserve(entry.target);
};

// create observer
const imageObserver = new IntersectionObserver(showImage, {
  root: null,
  rootMargin: '-200px',
});

// add observer

allImages.forEach(image => imageObserver.observe(image));

//***********************************************************/
/////////////// slider and content controller ////////////////
//***********************************************************/

// 1- select all sliders
const allSliders = document.querySelectorAll('.slide');
const slideBox = document.querySelector('.slider');

// 2- create a controller function
let currentSlider = 0;
const maxSliders = allSliders.length - 1;

const goToSlide = function (slideNumber) {
  allSliders.forEach(
    (slide, i) =>
      (slide.style.transform = `translateX(${(i - slideNumber) * 100}%)`)
  );
  activeDot(slideNumber);
};

// next slide button
const nextBtn = function () {
  if (currentSlider === maxSliders) {
    currentSlider = 0;
    goToSlide(currentSlider);
  } else goToSlide(++currentSlider);
};

// previous slide button
const prevBtn = function () {
  if (currentSlider === 0) {
    currentSlider = maxSliders;
    goToSlide(currentSlider);
  } else goToSlide(--currentSlider);
};

/// add next slide btn
const nextSlide = document.querySelector('.slider__btn--right');
nextSlide.addEventListener('click', nextBtn);

const prevSlide = document.querySelector('.slider__btn--left');
prevSlide.addEventListener('click', prevBtn);

// create dots controller
/// select dots div
const dotsContainer = document.querySelector('.dots');

// creating dots under slider
const createDots = function () {
  allSliders.forEach((_, i) =>
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    )
  );
};

// add event listener
dotsContainer.addEventListener('click', function (e) {
  if (!e.target.classList.contains('dots__dot')) return;
  goToSlide(Number(e.target.dataset.slide));
  currentSlider = Number(e.target.dataset.slide);
});

/// create active dot function
const activeDot = function (currentSlider) {
  const allDots = document.querySelectorAll('.dots__dot');
  allDots.forEach(dot => dot.classList.remove('dots__dot--active'));
  console.log('current slider: ', currentSlider);
  document
    .querySelector(`.dots__dot[data-slide="${currentSlider}"]`)
    .classList.add('dots__dot--active');
};

// add event listener

/// create initialize function
const initialize = function () {
  createDots(); // calling the function for initialization
  goToSlide(currentSlider); // call function for initialization
};

initialize();
