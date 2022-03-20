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

// for (let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal.forEach(modal => modal.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//// start lecture

/// selecting elements

console.log('document Element: ', document.documentElement);
console.log('head: ', document.head);
console.log('body: ', document.body);

/// this return node list which is not updating automatically
console.log('query selector header: ', document.querySelector('.header'));
const allSections = document.querySelectorAll('.section');
console.log('all sections: ', allSections);
console.log('get by Id section 1: ', document.getElementById('sectin--1'));

// this method return a HTML collection
// HTML collection is a live collection updated whenever
// any changes to the DOM it self
const allBTNs = document.getElementsByTagName('button');
console.log('all buttons: ', allBTNs);

/// this also return a live HTML collection
console.log(document.getElementsByClassName('btn'));

//// creating and inserting elements
// document
//   .querySelector('.btn--text')
//   .insertAdjacentHTML('afterend', '<h4>hello</h4>');

/*
document.documetnelement => select the whole document

*/
const message = document.createElement('div');
message.classList.add('cookie-message');
//text content is only for text content
// message.textContent = 'are you okay or close the page?<button>okay</button>';

// inner Html to insert a hole element
message.innerHTML =
  'are you okay or close the page?<button class="btn btn--close-cookie">okay</button>';
document.querySelector('header').prepend(message); //add it as a first element into selected DOM element
console.log('message dom element: ', message);

document.querySelector('header').append(message); // the last element int the selected Dom element

document.querySelector('header').before(message); //add it before selected dom element.
document.querySelector('header').after(message); //add it after selected dom element.

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());

//this is the old way to get the parent then delete child
// document.querySelector('.btn--close-cookie').addEventListener('click', function(){
//   message.parentElement.removeChild(message);
// });
message.style.backgroundColor = 'black';
message.style.width = '120%';
// message.style.padding = '10px 0px';
// document.querySelector('.btn--close-cookie').style.padding = '7.5px 40px';

// get style inside css file
console.log(getComputedStyle(message).color);
// getComputedStyle is a window method call it directly.

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// adding style to html tag in line
// document.documentElement.style.setProperty('--color-primary', 'red');

// document.documentElement.style.setProperty('font-size', '100%');

//to get element attribute
console.log('logo alt: ', document.querySelector('.nav__logo').alt);
console.log(
  'logo get attribute',
  document.querySelector('.nav__logo').getAttribute('alt')
);

console.log('logo src attribute: ', document.querySelector('.nav__logo').src);
console.log(
  'logo src attribute relevant link: ',
  document.querySelector('.nav__logo').getAttribute('src')
);

console.log(
  'get custom attribute: ',
  document.querySelector('.nav__logo').getAttribute('designer')
);

// nooooot the real attribute is data-version-number to get it
// you need to call dataset then call teh attribute with camel case
// special case.. !!! no sense.
console.log(
  'get data attrub: ',
  document.querySelector('.nav__logo').dataset.versionNumber
);

const logo = document.querySelector('.nav__logo');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const sectionScroll = document.querySelector('#section--1');

///old school way manually calculate the measurements.
/*

btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  //get the coordinate of scrolling to section
  const section1Coords = sectionScroll.getBoundingClientRect();
  //this method return teh x , y coordinate relatively to
  //the current view port
  console.log(
    'the coordinate of section 1 with getbounding method: ',
    section1Coords
  );
  // target here means the clicked butn, you can name it this;
  // if only this is the clicked item.
  console.log(
    'the coordinate of section 1 with getbonding method: with target',
    e.target.getBoundingClientRect()
  );
  // the e.target.getBoundingClientRect returns the coordinate
  // relative to the window (view port) not to the body

  console.log(
    'the current scroll x:Horizontal & y: vertical : ',
    window.pageXOffset,
    window.pageYOffset
  );

  //get the height and width for veiw port
  console.log(
    'height , width of viewport: ',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  // window.scrollTo(
  //   section1Coords.left + window.pageXOffset,
  //   section1Coords.top + window.pageYOffset
  // );

  window.scrollTo({
    left: section1Coords.left + window.pageXOffset,
    top: section1Coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  /// get practice to make cense
  console.log(
    'section 1 coordinate: ',
    section1Coords.left + window.pageXOffset,
    section1Coords.top + window.pageYOffset
  );
});

*/
// modern way
// btnScrollTo.addEventListener('click', function (e) {
//   e.preventDefault;
//   sectionScroll.scrollIntoView({ behavior: 'smooth' });
// });

document
  .querySelector('.btn--scroll-to')
  .addEventListener('click', function (e) {
    e.preventDefault();
    const coordinate = e.target.getBoundingClientRect();
    const targercoor = document
      .querySelector('.btn--scroll-to')
      .getBoundingClientRect();
    const section1coor = document
      .querySelector('#section--1')
      .getBoundingClientRect();

    const scrollToSection = document.querySelector('#section--1');

    // window.scrollTo(
    //   section1coor.left + window.pageXOffset,
    //   section1coor.top + window.pageYOffset
    // );
    console.log(coordinate);
    console.log(targercoor);
    console.log(section1coor);

    scrollToSection.scrollIntoView({ behavior: 'smooth' });
  });

const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  e.preventDefault();
  alert('hello');

  //remove the event listener
  h1.removeEventListener('mouseenter', alertH1);
};
// document.querySelector('h1').addEventListener('mouseenter', alertH1);

// h1.onmouseenter = function (e) {
//   console.log('hovered over h1');
// };
h1.onmousedown = () => console.log('mouse down');
h1.onclick = () => console.log('on click');
/// this will remove the event listener after 5 seconds.
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000);

/// bubbling
/// Propagation
/*
const randomNumber = function (max, min) {
  //get decmal num   the range +1 to get the max include
  // + min to start from the min number
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const getrandomColor = () =>
  `rgb(${randomNumber(255, 0)},${randomNumber(255, 0)},${randomNumber(
    255,
    0
  )})`;
console.log(getrandomColor());
document.querySelector('.nav__link').addEventListener('click', function (e) {
  /// it can not be with arrow function becouse arrow
  //function do not have this keyword
  this.style.backgroundColor = getrandomColor();
  console.log('target: ', e.target);
  console.log('current target: ', e.currentTarget);
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  /// it can not be with arrow function because arrow
  //function do not have this keyword
  this.style.backgroundColor = getrandomColor();
  console.log('target: ', e.target);
  console.log('current target: ', e.currentTarget);
  //stop executing the parent listeners
  // e.stopPropagation();
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    /// it can not be with arrow function because arrow
    //function do not have this keyword
    //the second parameter for options is true or false
    //this will make the listener work from up to down 
    // or down tp up in DOM tree listening to events
    this.style.backgroundColor = getrandomColor();
    console.log('target: ', e.target);
    console.log('current target: ', e.currentTarget);
  },
  false
);
*/

// nav event handling
// long way and not efficient way is:

// 1- select all the nav__lik elements
//// adding event listener for each element
/*
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
    console.log(this.getAttribute('href'));
  });
});

*/

// modern way to add multi event listener for elements

// 1- add event listener to common or parent element
// 2- generate the action when its called

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    document
      .querySelector(e.target.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
    // console.log(this, e.target, e.target.getAttribute('href'));
  }
});

// applying the tab switcher
const tabContainer = document.querySelector('.operations__tab-container');
const allTabs = document.querySelectorAll('.operations__tab ');
const allTabsContent = document.querySelectorAll('.operations__content');

// console.log(tabContainer, allTabs, allTabsContent);
tabContainer.addEventListener('click', function (e) {
  //applying btns on click
  const clickedTab = e.target.closest('.operations__tab');
  if (!clickedTab) return;
  allTabs.forEach(t => t.classList.remove('operations__tab--active'));
  clickedTab.classList.add('operations__tab--active');

  //applying tab content
  allTabsContent.forEach(t =>
    t.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clickedTab.dataset.tab}`)
    .classList.add('operations__content--active');
});
const nav = document.querySelector('.nav');

/*

/// applying the nav opacity
/// first method the old school method
// 1- select nav items

//2- add event listener to nav
nav.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const clickedLink = e.target;
    const siblin = clickedLink.closest('.nav').querySelectorAll('.nav__link');
    const logo = clickedLink.closest('.nav').querySelector('img');
    siblin.forEach(function (s) {
      if (s !== clickedLink) s.style.opacity = 0.5;
    });
    logo.style.opacity = 0.5;
  }

  console.log();
});

nav.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const clickedLink = e.target;
    const siblin = clickedLink.closest('.nav').querySelectorAll('.nav__link');
    const logo = clickedLink.closest('.nav').querySelector('img');
    siblin.forEach(function (s) {
      if (s !== clickedLink) s.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
});
*/

/*
///second way to implement header opacity
// do a function
const handleHeader = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const clickedLink = e.target;
    const siblin = clickedLink.closest('.nav').querySelectorAll('.nav__link');
    const logo = clickedLink.closest('.nav').querySelector('img');
    siblin.forEach(function (s) {
      if (s !== clickedLink) s.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

// cal the function on booth cases
// to pass an argument into a event listener function
// you should call the function inside the function
// then you can pass the event and the args

nav.addEventListener('mouseover', function (e) {
  handleHeader(e, 0.5);
});
nav.addEventListener('mouseout', function (e) {
  handleHeader(e, 1);
});

*/

/// or you can use bind method like this

const linkOpacityHandler = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      //it gona not work with normal function and bind
      // because arrow function have no this
      // that is why this become the bind method argument
      if (el !== e.target) el.style.opacity = this;
    });
    // siblings.forEach(function (el, i) {
    //   console.log(i, el, this);
    //   el.style.opacity = this;
    // });`
    logo.style.opacity = this;
    // console.log(this);
  }
};
nav.addEventListener('mouseover', linkOpacityHandler.bind(0.5));
nav.addEventListener('mouseout', linkOpacityHandler.bind(1));

/// sticky nav

/// not an efficient way

/*
const section1Coords = sectionScroll.getBoundingClientRect();
console.log(section1Coords.y);
window.addEventListener('scroll', function () {
  if (window.scrollY >= section1Coords.y) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});
*/

// the officient way

// for testing
/*
const testfunc = function (entries, observer) {
  console.log('entries : ', entries);
  entries.forEach((entry, i) => {
    console.log('entry number : ', entry, i);
  });
};

const observerObtionst = {
  root: null,
  threshold: [0, 0.1],
};

const observer = new IntersectionObserver(testfunc, observerObtionst);
observer.observe(sectionScroll);

*/

//implementing sticky nav
// 1- the sticky nav should observe on header
const headerSection = document.querySelector('.header');

// 2- define the callback function
const observerCallbackFunction = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });
};

const observerOptions = {
  root: null,
  threshold: [0],
  rootMargin: `-${nav.getBoundingClientRect().height}px`,
};

const headerObserver = new IntersectionObserver(
  observerCallbackFunction,
  observerOptions
);

headerObserver.observe(headerSection);

// apply revealing sections on scroll

const allsections = document.querySelectorAll('.section');

const hiddenSections = function (entries, observer) {
  // console.log('hidden section entries: ', entries);
  const [entry] = entries;
  // console.log('hidden section each entry', entry);
  if (!entry.isIntersecting) return; //guard return if not
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target); //to clear observer after done
};

// *************** important for observers ****************
// this is my conclusion : intersection observer is an array
// and for each call for observe method it added the arg to the
// array. i think this is how entries get an array of items
// has IntersectionObserverEntry type.
const sectionsObserver = new IntersectionObserver(hiddenSections, {
  root: null,
  threshold: 0.15,
});

allsections.forEach(function (section, i) {
  // console.log(`section number ${i}: `, section);
  sectionsObserver.observe(section);
  // section.classList.add('section--hidden');
});

// sectionsObserver.observe(sectionScroll);

// applying image lazy load
//1- get all images

const allLazyLoad = document.querySelectorAll('img[data-src]');
// console.log('all lazy images: ', allLazyLoad);
const lazyImage = function (entries, observer) {
  // console.log('all entries: ', entries);
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  // console.log(entry.target.getAttribute('src'));
  entry.target.src = entry.target.dataset.src;
  // with this approach the plur will removed before
  //image get loaded so its better to add event listener to
  //load event
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(lazyImage, {
  root: null,
  threshold: 0,
  rootMargin: `-200px`,
});

allLazyLoad.forEach(function (lazy, i) {
  imageObserver.observe(lazy);
});

/// apply slider

///// /////// all the code for sliders has been added
// to one function at the very end we call it to not pollute
// the global name space
//1- get all sliders
const slidersFunc = function () {
  const sliders = document.querySelectorAll('.slide');
  // console.log('all sliders: ', sliders);

  // initialize the current index for sliders

  // ****** this code replace by calling gotoslide(0)
  // sliders.forEach(function (slider, i) {
  //   // console.log('slider: ', slider);
  //   slider.style.transform = `translateX(${i * 100}%)`;
  // });

  const goToSlide = function (slide) {
    sliders.forEach(function (slider, i) {
      // console.log('slider: ', slider);
      slider.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  let curSlider = 0;

  // goToSlide(curSlider); f replaced with initialize function

  const slidersMax = sliders.length - 1;

  const nextBtn = function () {
    // curSlider === slidersMax ? curSlider = 0: curSlider++;
    if (curSlider === slidersMax) {
      curSlider = 0;
    } else {
      curSlider++;
    }
    goToSlide(curSlider);
    activeDot(curSlider);
  };

  const prevBtn = function () {
    if (curSlider === 0) {
      curSlider = slidersMax;
    } else {
      curSlider--;
    }
    goToSlide(curSlider);
    activeDot(curSlider);
  };
  ///next btn
  document
    .querySelector('.slider__btn--right')
    .addEventListener('click', nextBtn);

  ///previous btn

  document
    .querySelector('.slider__btn--left')
    .addEventListener('click', prevBtn);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') nextBtn();
    if (e.key === 'ArrowLeft') prevBtn();
  });

  /// applying dots to slider
  const dotContainer = document.querySelector('.dots');
  // console.log('dots container: ',dotContainer);

  /// create dots
  const createDots = function () {
    sliders.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  // createDots();  replaced with initialize function
  dotContainer.addEventListener('click', function (e) {
    if (!e.target.classList.contains('dots__dot')) return;
    const selectedDot = e.target.dataset.slide;
    goToSlide(selectedDot);
    activeDot(selectedDot);
  });

  const activeDot = function (slideNumber) {
    const allDots = document.querySelectorAll('.dots__dot');
    allDots.forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slideNumber}"]`)
      .classList.add('dots__dot--active');
    // console.log('all dots: ', allDots);
  };
  // activeDot(curSlider); replaced with initialize function

  const initialize = function () {
    goToSlide(curSlider);
    createDots();
    activeDot(curSlider);
  };
  initialize();
};

slidersFunc();
