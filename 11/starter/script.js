'use strict';
/////////////////////////////////////////////////
/*
/////////////////////////////////////////////////
// Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
*/
/*
// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);
*/
/*
// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);
*/
/*
// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));

*/
/*
///////////////////////////////////////
// The new at Method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));

*/
///////////////////////////////////////
// Looping Arrays: forEach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.forEach(movement => console.log(movement));
movements.forEach(function (movement) {
  console.log(
    movement > 0
      ? `You deposited ${movement}`
      : `You withdrew ${Math.abs(movement)}`
  );
});
*/

/*
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
*/

/*
console.log('---- FOREACH ----');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...
*/
///////////////////////////////////////
// forEach With Maps and Sets
// Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
/*
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
*/
/*
// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUs = 1.1;
const convertToUs = function (number) {
  return Math.round(number * euroToUs);
};
const converted = movements.map(convertToUs);
console.log('movements: ', movements);
console.log('converted map: ', converted);
const converted1 = movements.forEach(convertToUs);
console.log(
  'convert with arrow: ',
  movements.map(movement => Math.round(movement * euroToUs))
);

const stringMovements = movements.map((mov, i) => {
  return `Movement ${i + 1}: you ${
    mov > 0 ? 'deposited' : 'withdrew'
  } ${Math.abs(mov)}`;
});

console.log(stringMovements.join('\n'));

const user = 'Obada alahdab';
const createUserName = function (username) {
  return username
    .toLowerCase()
    .split(' ')
    .map(word => word[0])
    .join('');
};

console.log(createUserName(user));

console.log(movements);
console.log(movements.includes(-130));

//if one item suticfy the condition
console.log(movements.some(mov => mov > 450));
//if all items saticfy the condition
console.log(movements.every(mov => mov > 0));

///// sorting arrays
const account1 = {
  owner: 'OJonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'ASteven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'BSarah Smith',
  movements: [430, 1000, 700, 50, 700, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const owners = accounts.map(function (acc) {
  return acc.owner;
});
console.log(owners);
//sort method is working for strings in default and its mutate
//the original array so copy the array then sort it.
console.log([...owners].sort());
console.log(owners);

const allMovements = accounts.flatMap(acc => acc.movements);
console.log(allMovements);

//both can work but if chaining slice is your best choice
const sortedMovements = [...allMovements].sort((a, b) => a - b);
const sortedMovements1 = allMovements.slice().sort((a, b) => a - b);
console.log(sortedMovements);

const otherSortedMovement = allMovements.slice().sort(function (a, b) {
  // any positive value means to switch the order if ascending
  // if a is bigger than b, b is should be before a
  if (a > b) return 1;
  //any nigative value means to keep the order if ascending
  if (b > a) return -1;
  else return 0;
});
console.log(otherSortedMovement);
