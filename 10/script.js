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
