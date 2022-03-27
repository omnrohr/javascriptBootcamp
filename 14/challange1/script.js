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

class CarClass {
  constructor(maker, speed) {
    this.make = maker;
    this.speed = speed;
  }
  accelerator = function () {
    return (this.speed += 10);
  };

  break = function () {
    return (this.speed -= 5);
  };
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const BMW2 = new CarClass('BMW', 120);
const mercedes2 = new CarClass('mercedes', 95);
console.log('BMW2 accelerator', BMW2.accelerator());
console.log('mercedes2 accelerator', mercedes2.accelerator());
console.log('BMW2 break', BMW2.break());
console.log('mercedes2 break', mercedes2.break());
console.log('bmw2 speed us', mercedes2.speedUS);
BMW2.speedUS = 80;
console.log('mercedes2 set speedUS', BMW2.speedUS, BMW2.speed);
const car3 = Object.create(Car);
car3.__proto__ = Car.prototype;
// Car.init = function (maker, speed) {
//   this.maker = maker;
//   this.speed = speed;
// };
// car3.init('Toyota', 100);

car3.speed = 100;
car3.maker = 'toyota';
console.log('after adding init method to Car Class: ', car3.accelerator());
// console.log(
//   'read methods from type inheritance: ',
//   car3.accelerator(),
//   car3.break()
// );

console.log(car3.__proto__, Car.prototype);

const CarCv = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

CarCv.prototype = Object.create(Car.prototype);
CarCv.prototype.constructor = CarCv;
CarCv.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
CarCv.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `the ${this.make} is going at speed ${this.speed}KM/h, and its battery is ${this.charge}%`
  );
};

const tesla = new CarCv('Tesla', 100, 50);
tesla.accelerate();
tesla.chargeBattery(70);
console.log('tesla car after recharge battery: ', tesla.charge);
console.log('Tesla break method form Parent Class: ', tesla.break());
