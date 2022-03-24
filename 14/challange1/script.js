'use strict';

// create class of car
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerator = function () {
  return (this.speed += 10);
};

Car.prototype.break = function () {
  return (this.speed -= 5);
};

const BMW = new Car('BMW', 120);
const mercedes = new Car('mercedes', 95);
console.log('BMW accelerator', BMW.accelerator());
console.log('mercedes accelerator', mercedes.accelerator());
console.log('BMW break', BMW.break());
console.log('mercedes break', mercedes.break());
