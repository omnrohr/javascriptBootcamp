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
