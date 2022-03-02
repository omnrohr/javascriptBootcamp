'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  rName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

//////// destructuring arrays
/*
let arr = [1, 2, 3]; //not effected
let [x, y, z] = arr; // create a copy of the array
const [a, b, c] = [1, 2, 3];
console.log(a, b, c);

x = 5;
console.log(arr, x);
console.log([x, y, z]);
console.log(x, y, z);

let [first, second] = restaurant.categories;
console.log(first, second);
//changing id effecting the main list.
first = 'new first item';
console.log(first, restaurant.categories[0]);

let [firstEl, , thrirdEl] = restaurant.categories; // leave a space to get the next element.
console.log(first, thrirdEl);

[thrirdEl, firstEl] = [firstEl, thrirdEl]; // reassinging values
console.log(firstEl, thrirdEl);
//reverse the result order
let [theSecondItem, theFirstItem] = restaurant.order(0, 0);
console.log(theSecondItem, theFirstItem);

//default unstructring

const [dd = 0, bb = 0, cc = 0] = [1];
console.log(dd, bb, cc);
*/

/////////destructuring objects
/*
let { rName, openingHours, mainMenu } = restaurant;
console.log(rName, openingHours, mainMenu);

let {
  rName: newName,
  openingHours: newOpiningHours,
  mainMenu: newMainMenu,
} = restaurant;
console.log(newName, newOpiningHours, newMainMenu);

let {
  rName: restaurantName,
  mainMenu: restaurantMenu,
  tags: restaurantTags = ['item 1', 'item 2'],
} = restaurant;
console.log(restaurantName, restaurantMenu, restaurantTags);

let a = 23;
let b = 222;

const item = { a: 10, b: 12, c: 14 };
console.log(a, b);
const abObj = { a, b };
({ a, b } = item); //mutating varaibles.
console.log(a, b, abObj);
*/

/*
const { openingHours } = restaurant;
const { fri } = openingHours;
console.log(fri, { openingHours });

// Destructuring Objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

for (const key of Object.keys(restaurant.openingHours)) {
  console.log(key);
}
*/

// for (const [key, { open, close }] of Object.entries(restaurant.openingHours)) {
//   console.log(`you are welcome at ${key}, open at ${open} closing at ${close}`);
//   // console.log(`you are welcome at ${key} : ${Object.entries(values)}`);
// }

/*
const newName = 'new Name';
const resMap = new Map();
resMap
  .set('resName', 'Classico Italiano')
  .set('rlocation', 'Via Angelo Tavanti 23, Firenze, Italy')
  .set('rcategories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('rstarterMenu', [
    'Focaccia',
    'Bruschetta',
    'Garlic Bread',
    'Caprese Salad',
  ])
  .set('rmainMenu', ['Pizza', 'Pasta', 'Risotto'])
  .set('rorder', function (starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  })
  .set('ropeningHours', {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  });

*/

///////////////////////////////////////
// Maps: Iteration
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// const array = new Map([
//   ['key1', 'value1'],
//   ['key2', 'value2'],
// ]);
// console.log(Array.prototype);

// const friends = ['shadi', 'hazem', 'rana'];
// console.log(friends);

// let f = function (a, b) {
//   return a && b;
// };
// console.log(f(1, 0));

// const rest = new Map();
// rest
//   .set('name', 'my resturant')
//   .set('open', 12)
//   .set('close', 23)
//   .set(true, 'you are welcome')
//   .set(false, 'Sorry we closed');

// console.log(rest);

// const welcome = function (hour) {
//   return hour > rest.get('open') && hour < rest.get('close');
// };
// console.log(rest.get(welcome(15)));

// let reserve = 2;
// console.log(
//   rest.get(reserve > rest.get('open') && reserve < rest.get('close'))
// );

// const obj = {
//   item1: 'the item number 1',
//   item2: 'the item number 2',
// };
// console.log(obj);
// console.log(obj.toString());

const airline = 'Tap air Jordan';
const plane = 'B120';

console.log(plane[0], 'B720'[0]);

console.log(airline.indexOf('r').toString());
console.log(airline.includes('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.slice(4).toUpperCase().split(' ').entries());

const passengerNmae = 'PlALI';
const fxPassengerName =
  passengerNmae.toUpperCase()[0] + passengerNmae.slice(1).toLowerCase();
console.log(fxPassengerName);

let price = 'JD259,30';
let convertedUsPrice =
  '$' + Math.round(Number(price.slice(0, -2).replace(',', '.')) / 0.71);
console.log(price, convertedUsPrice);
// const UsPrice = price.replace(',', '.').replace('JD', '$');
// console.log(UsPrice);

let announcement =
  'All Passengers go to door 20, please all passengers go to door 20';
announcement = announcement.replace(/door/g, 'gate');
console.log(announcement);

const maskCredidCard = function (number) {
  const str = number + '';
  //or
  // const str = String(number);
  console.log(str.slice(-4).padStart(str.length, '*'));
};

maskCredidCard(1234567890121314);
