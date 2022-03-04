'use strict';

const createBooking = function (flightNumber, numberOfPassengers, price) {
  const bookingArr = [];
  const obj = {
    flightNumber: flightNumber,
    numberOfPassengers: numberOfPassengers,
    price: price,
  };
  bookingArr.push(flightNumber, numberOfPassengers, price);
  return [obj, bookingArr];
};

const booking1 = createBooking('Ab12', 1, 190);
console.log('the object: ', booking1);
// console.log('values:', Object.values(booking1));
// console.log('entries: ', Object.entries(booking1));
// console.log('keys: ', Object.keys(booking1));
