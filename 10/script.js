'use strict';
/*
const createBooking = function (
  flightNumber = 'abc',
  numberOfPassengers = 1,
  price = 120
) {
  //the same effect of defining default valu in parameters
  flightNumber = flightNumber || 'abc';
  numberOfPassengers = numberOfPassengers || 1;
  price = price || 120;
  const bookingArr = [];
  //these tow methods return the same obj
  //method 1
  const obj = {
    flightNumber: flightNumber,
    numberOfPassengers: numberOfPassengers,
    price: price,
  };
  //method 2
  const bookingobj = {
    flightNumber,
    numberOfPassengers,
    price,
  };
  bookingArr.push(flightNumber, numberOfPassengers, price);
  //or you can use bookingArr.push(obj or bookingobj)
  return [obj, bookingArr, bookingobj];
};

const [obj, bookingArr, bookingobj] = createBooking('Ab12', 1, 190);
const [obj1, bookingArr1, bookingobj1] = createBooking();
console.log('booking object: ', bookingobj);
console.log('booking object1: ', bookingobj1);
console.log('the obj: ', obj);
console.log('the obj1: ', obj1);
console.log('the Array: ', bookingArr);
console.log('the Array1: ', bookingArr1);
console.log('values:', Object.values(bookingArr));
console.log('entries: ', Object.entries(bookingArr));
console.log('keys: ', Object.keys(bookingArr));

*/
//////////////////////////end of lesson1 /////////////////////

/*
const flightNumber = 'AB12';
const me = {
  fName: 'obada',
  lName: 'alahdab',
  age: 41,
  from: 'boor',
  to: 'rich',
};

const checkIn = function (flightNumber, obj) {
  console.log(obj.fName);
  obj.fName = `Mr: ${obj.fName}`;
};

const firstBokk = checkIn(flightNumber, me);

/// lesson 3 in section 10///

const upercase = str => str.toUpperCase();

const lowercase = str => str.toLowerCase();

const doOnstr = function (str, fn) {
  return fn(str);
};

console.log(doOnstr('nice work obada', upercase));
console.log(doOnstr('Nice Work Obada', lowercase));

/////lesson 4 in sectin 10//////

const greet = function (name) {
  return function (greeting) {
    return `${greeting} Mr ${name}`;
  };
};

console.log(greet('rana')('hi'));

const greetarrow = fname => greeting => `${greeting} Mr ${fname}`;

console.log('greet arrow: ', greetarrow('obada alahdab')('hello me'));

*/
/*
const jordanAirLines = {
  airLineName: 'Jordinian Air line',
  airLineCode: 'JOR',
  bookingList: [],
  book(passenger, flightNumber) {
    console.log(
      `${passenger} booked with Airline ${this.airLineName} on flight number ${this.airLineCode}${flightNumber} a seat`
    );
    this.bookingList.push({
      passenger,
      flight: `${this.airLineCode}${flightNumber}`,
    });
  },
};

jordanAirLines.book('obada mohammed', 235);
console.log(jordanAirLines);

const bookingMethod = jordanAirLines.book;

const syrianAirLines = {
  airLineName: 'Syrian Airlines',
  airLineCode: 'SYR',
  bookingList: [],
};

const QtrAirlines = {
  airLineName: 'Qatar Air line',
  airLineCode: 'QTR',
  bookingList: [],
};

const passenger1 = ['Obada Mohemmed Nasser', 356];

bookingMethod.call(jordanAirLines, ...passenger1);
bookingMethod.call(syrianAirLines, 'rana othman', 355);
bookingMethod.call(QtrAirlines, 'sabah ali', 122);

console.log(jordanAirLines);
console.log(syrianAirLines);
console.log(QtrAirlines);

////// bind method //////
const bookingfunction = jordanAirLines.book;
const jorBooking = bookingfunction.bind(jordanAirLines);
const qtrBooking = bookingfunction.bind(QtrAirlines, 'Obada');

jorBooking(...passenger1);
qtrBooking(23);

jordanAirLines.planes = 100;
jordanAirLines.buyPlane = function () {
  this.planes++;
  // const theObj = jordanAirLines;
  // theObj.planes++;
  // console.log('self: ', self);
  // console.log('this', this);
  // console.log('theObj', theObj);
  // console.log(theObj.planes);
  console.log(this.planes);
  console.log('new plane added');
};
jordanAirLines.buyPlane();

const jorBuyFunc = jordanAirLines.buyPlane;
const jorBuyNewPlane = jorBuyFunc.bind(jordanAirLines);

////// method 1 /////
document
  .querySelector('.buy')
  .addEventListener('click', jordanAirLines.buyPlane.bind(jordanAirLines));

//////method 2 ///////
// document.querySelector('.buy').addEventListener('click', jorBuyNewPlane);

// works if you define self like line 144
// document
//   .querySelector('.buy')
//   .addEventListener('click', jordanAirLines.buyPlane);
// console.log(jordanAirLines);

///// parcial applications
const calTax = (rate, amount) => (amount += amount * rate);
console.log('calculate tax: ', calTax(0.1, 200));

const calTax10 = calTax.bind(calTax, 0.1);
/// or
const calTax15 = calTax.bind(null, 0.15);
console.log(calTax10(200));
console.log(calTax15(200));

///// one function return a new function
const oneFuncRetrnFunc = function (rate) {
  return function (amount) {
    return (amount += amount * rate);
  };
};

const fixdTaxRate = oneFuncRetrnFunc(0.1);
console.log('fixed tax rate: ', fixdTaxRate(200));

const firstLastName = function (first) {
  return function (lastName) {
    return `${first} ${lastName}`;
  };
};

const composeFirstLast = firstLastName('obada');
console.log(composeFirstLast('alahdab'));

const closures = function () {
  let counter = 0;
  return function insider() {
    counter++;
    console.log('counter: ', counter);
  };
};

const closuresfunc = closures();
closuresfunc();
closuresfunc();
closuresfunc();

const firstFunc = function () {
  let a = 1;
  let b = 2;
  return secondFunc(a, b);
};

const secondFunc = function (x, y) {
  let c = 3;
  return c + x * y;
};

const thirdFunc = function () {
  return 3;
};

const fourthFunc = () => 2;

let z = firstFunc();

const fifthFunc = function () {
  const a = 0;

  const fifthinnerFunc = function (a) {
    return a + 1;
  };
  return fifthinnerFunc;
};

const fifthVariable = fifthFunc();

((a, b) => console.log(a + b))(1, 2);
{
  console.log('tyo of expression', typeof ((a, b) => console.log(a + b))(1, 2));
}
let b;
const a = {
  m: () => console.log('mmmmmm'),
  x: function (a, b) {
    return a * b;
  },
  c: true,
  blockOfCode: 'block one',
  blocktow: 12,
  nonblock: true,
  aFunc: (a, b) => a + b,
};
console.log('a object: ', a);
const myMap = new Map([
  ['mapa', 1],
  ['b', true],
  [
    'c',
    {
      fName: 'obada',
      lName: 'alahdab',
    },
  ],
  [1 === 1 ? 'a' : 'f', 'one equal one'],
]);
myMap.set(true, 'any value').set('new value', 123);
console.log('my map', myMap);

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

for (let i = 1; i < 2; i++) {
  console.log('inside i: ', i);
}

for (const i of myMap.entries()) {
  console.log('my map entries: ', i);
}
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!
A poll has a question, an array of options from which 
people can choose, and an array with the number of
 replies for each option. This data is stored in the
  starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll'
 object. The method does 2 things:
  1.1. Display a prompt window for the user to input the 
  number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array.
   For example, if the option is 3, 
   increase the value AT POSITION 3 of the array by 1. 
   Make sure to check if the input is a number and 
   if the number makes sense 
   (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the
 "Answer poll" button.
3. Create a method 'displayResults' which displays the
 poll results. The method takes a string as an input
  (called 'type'), which can be either 'string'
   or 'array'. If type is 'array', simply display the
    results array as it is, using console.log().
     This should be the default option.
      If type is 'string', display a string like
       "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each
 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in
 this and the last section 😉
BONUS: Use the 'displayResults'
 method to display the 2 arrays in the test data.
  Use both the 'array' and the 'string' option.
   Do NOT put the arrays in the poll object! So what
    shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const userInput = Number(
      prompt(`${this.question} \n ${this.options.join('\n')}`)
    );
    typeof userInput === 'number' &&
      userInput > 0 &&
      userInput < this.options.length &&
      this.answers[userInput]++;
    this.displayResults();
  },
  displayResults(type = 'array') {
    type === 'array'
      ? console.log(this.answers)
      : type === 'string'
      ? console.log(`Poll results are ${this.answers.join(', ')}`)
      : console.log('Not a valid argument');
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [1, 4, 5, 6, 7, 8, 8] }, 'string');
