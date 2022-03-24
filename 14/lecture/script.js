'use strict';
(function () {
  console.log('hello');
})();
const func1 = function () {
  console.log('hellllo');
};
function func2() {
  console.log('helllllllo');
}

const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

console.log(new Person('obada', 'alahdab'));
const obada = new Person('obada', 'alahdab');
console.log('is instance of person: ', obada instanceof Person);

const obadas = {};
obadas.name = { naaame: 'obada' };
obadas.age = 45; // adding new property just by assign it.
console.log(obadas);
obadas.name.go = 11; // new property to an object.
console.log(obadas);

// adding method to prototype

Person.prototype.calculateAge = function (birthDate) {
  return 2022 - birthDate;
};
console.log('calculate age method: ', obada.calculateAge(1980));

/// using this inside the function
Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};
console.log('get full name method', obada.getFullName());

//// get prototype
console.log('get instance prototype: ', obada.__proto__);

//// check instance prototype with class proto
console.log(
  'check if instance proto type is same as class: ',
  obada.__proto__ === Person.prototype
);
console.log(
  'check if instance proto type is same as class: ',
  Person.prototype.isPrototypeOf(obada)
);
console.log('person prototype', Person.__proto__);
console.log(Person.prototype.constructor);
console.log(obada.constructor);

const object1 = new Object();
console.log('object created by new object: ', object1);
const object2 = { name: 'obada', age: '42' };
const object3 = new Object('name', 'age');

console.log(
  'compare tow objects created by new and letterly: ',
  object2,
  object3
);

const arr = new Array(1, 2, 3, 4, '55', 6, 1, 2, 3, 2, 3);
console.log(arr);
Array.prototype.unique = function () {
  // similar to return [...new Set(this)].
  return new Array(...new Set(this));
};
console.log(arr.unique());
/// check prototype of html document.
const header = console.dir(document.querySelector('h1'));
