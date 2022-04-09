'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

//The old school

const renderCountry = function (response) {
  const html = `
      <article class="country">
        <img class="country__img" src="${response.flag}" />
        <div class="country__data">
            <h3 class="country__name">${response.name}</h3>
            <h4 class="country__region">${response.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +response.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${
              response.languages[0].name
            }</p>
            <p class="country__row"><span>💰</span>${
              response.currencies[0].name
            }</p>
        </div>
        </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
  console.log(response);
};
/*
let cuntr;
const addCountry = function (country) {
  const request = new XMLHttpRequest();
  //request.open('GET', `https://restcountries.com/v3.1/name/${country}`); // v3
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [response] = JSON.parse(this.responseText);
    renderCountry(response);
    countriesContainer.style.opacity = 1;

    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://restcountries.com/v2/alpha/${response.borders[0]}`
    );
    request2.send();
    request2.addEventListener('load', function () {
      const response2 = JSON.parse(request2.responseText);
      console.log(response2);
      renderCountry(response2);
    });
  });
};

const res = addCountry('usa');
// addCountry('saudi');
// addCountry('Jordan');
*/

// the new way

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(res => {
      console.log(res);
      if (!res.status === 200 || !res.ok) {
        throw new Error(`country not found! ${country} ${res.status}`);
      }
      return res.json();
    })
    .then(res => {
      renderCountry(res[0]);
      const neighbor = res[0].borders[0];
      if (!neighbor) throw new Error('No neighbor found');
      return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      renderCountry(data);
      const neighbor = data.borders[0];
      if (!neighbor) return;
      return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
    })
    .then(res => res.json())
    .then(data => renderCountry(data))
    .catch(err => alert(err));
};

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) 
(these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful
location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. 
Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the 
provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. 
So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been 
using.
7. Render the country and catch any errors, just like we have done in the last lecture 
(you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

const getUserLocation = function () {
  // return new Promise(function (resolve, reject) {
  //   navigator.geolocation.getCurrentPosition(
  //     location => resolve(location),
  //     err => reject(err + 'user denied ')
  //   );
  // }); look into this
  return new Promise(function (resolved, reject) {
    navigator.geolocation.getCurrentPosition(resolved, reject);
    // navigator.geolocation.getCurrentPosition(function (location) {
    //   console.log(location.coords);
    // }, console.log('error'));
  });
};

// getUserLocation()
//   .then(loc => console.log(loc))
//   .catch(err => alert(err.message));

const whereIamI = function () {
  getUserLocation()
    .then(loc => {
      const { latitude: lat, longitude: long } = loc.coords;
      return fetch(`https://geocode.xyz/${lat},${long}?geoit=json`);
    })
    .then(res => {
      if (res.status === 403)
        throw new Error('Please refresh after few seconds');
      if (!res.ok)
        throw new Error(`no data find with provided location ${lat}:${long}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in: ${data.city}, ${data.country}`);
      return data;
    })
    .then(data => {
      getCountryData(data.country);
    })
    .catch(err => {
      console.log(err.message);
    });
};
btn.addEventListener('click', () => {
  whereIamI();
});

// console.log('test start');
// setTimeout(() => console.log('time out'), 0);
// Promise.resolve('resolve promise').then(res => console.log(res));
// console.log('test end');

// const lottery = new Promise(function (resolve, reject) {
//   console.log('starting lottery: ');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('you win!!');
//     } else {
//       reject(new Error('you lose'));
//     }
//   }, 3000);
// });
// lottery.then(res => console.log(res)).catch(err => console.error(err));

// console.log(lottery);

// navigator.geolocation.getCurrentPosition(
//   location => console.log(location.coords),
//   err => console.error(err)
// );

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

const imageContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
    // this will return a new promise
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    wait(3).then(() => {
      img.src = imgPath;
      imageContainer.insertAdjacentElement('afterbegin', img);
      countriesContainer.style.opacity = 1;
      resolve(img);
      reject(new Error('file not found'));
    });
  });
};

createImage('img\\img-1.jpg')
  .then(img => img)
  .catch(err => {
    console.log(err);
  });
