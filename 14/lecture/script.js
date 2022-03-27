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

const Person = function (firstName, birthDate) {
  this.firstName = firstName;
  this.birthDate = birthDate;
};

// static method
Person.staticMethod = function () {
  console.log('I am static method');
};

Person.staticMethod();

console.log(new Person('obada', 1980));
const obada = new Person('obada', 1980);
console.log('is instance of person: ', obada instanceof Person);

const obadas = {};
obadas.name = { naaame: 'obada' };
obadas.age = 45; // adding new property just by assign it.
console.log(obadas);
obadas.name.go = 11; // new property to an object.
console.log(obadas);

// adding method to prototype

Person.prototype.calculateAge = function () {
  return 2022 - this.birthDate;
};
console.log('calculate age method: ', obada.calculateAge());

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
/*****
 * play around with __proto__ and prototype
 */
/*
console.log(arr.unique());
/// check prototype of html document.
const header = console.dir(document.querySelector('h1'));
const headerH1 = document.documentElement;
console.log(headerH1.__proto__);

///// ES6 Classes create
console.log('obada prototype: ', obada.prototype);
console.log('obada __proto__', obada.__proto__);
console.log('Person prototype: ', Person.prototype);
console.log('Person __proto__', Person.__proto__);
obada.prototype = headerH1.__proto__;
console.log('obada prototype after adding the property', obada.prototype);
// obada.__proto__ = headerH1.__proto__;
console.log('obada __proto after adding the property', obada.__proto__);
*/

class PersonClass {
  constructor(firstName, birthDate) {
    this.firstName = firstName;
    this.birthDate = birthDate;
  }

  calAge() {
    return 2022 - this.birthDate;
  }
  get firstName() {
    return this._firstName;
  }

  set firstName(name) {
    this._firstName = name; ///it will conflict with the constructor.
    // if you set the firstName to the same property.
  }

  static staticMethod = function () {
    console.log('I am static method inside a class.');
  };
}

const obada1 = new PersonClass('obada1', 1980);
console.log('obada1 class 1 calculate age: ', obada1.calAge());

const functionExpression = function (arg1, arg2) {};
function functionDeclaration(arg1, arg2) {}
class ClassDeclaration {}
const ClassExpression = class {};

const anyObject = {
  arr: [1, 2, 3, 4, 5],

  get behavior() {
    // this will return the last element in the array from new array .slice
    return this.arr.slice(-1).pop();
  },

  set behavior(arg) {
    this.arr.push(arg);
  },

  anotherBehavior() {
    return this.arr.slice(-1).pop();
  },
};
console.log(anyObject.behavior);
console.log(anyObject.anotherBehavior());
(function () {
  console.log('test calling direct function');
})();

//this method not work in regular objects.
// anyObject.behavior(50);
anyObject.behavior = 500;
console.log(anyObject.arr);
PersonClass.staticMethod();

// using Object.create()

const objectsCreate = {
  calculateAge() {
    return 2022 - this.birthDate;
  },
  init(firstName, birthDate) {
    this.firstName = firstName;
    this.birthDate = birthDate;
  },
};

const rana = Object.create(objectsCreate);
console.log('objects create add proto type: ', rana.__proto__);

rana.init('rana', 1990);
console.log('using method form objects create: ', rana.calculateAge());
const seba = Object.create(objectsCreate);
seba.__proto__ = objectsCreate;
seba.init('seba', 2005);
console.log('using __proto__ manually: ', seba.calculateAge());

//classes inheritance

// first constructor method
const Student = function (firstName, birthDate, course) {
  //replace the first name and birth date with person class
  //to inherit the functionality.
  // this.firstName = firstName;
  // this.birthDate = birthDate;

  // booth works....
  // Person.bind(this)(firstName, birthDate);
  Person.call(this, firstName, birthDate);
  this.course = course;
};

// console.log('student proto', Student.__proto__, Student.prototype);
Student.prototype = Object.create(Person.prototype);

// this also work but i came up with
// Student.prototype = new Object(Person.prototype);

/// this also work but i came up with.
// Student.prototype = new Person();

// fix the child class constructor
Student.prototype.constructor = Student;

console.log(
  'Person Parent Proto: ',
  Person.__proto__,
  'Person prototype: ',
  Person.prototype
);
console.log(
  'student Parent prototype is: ',
  Student.__proto__,
  'Student prototype is: ',
  Student.prototype
);
Student.prototype.identify = function () {
  return `this is ${this.firstName} born in ${this.birthDate}: enroll in ${this.course} course.`;
};
const mike = new Student('mike', 2002, 'javaScript');

console.log('Mike in Class inheritance: ', mike);
console.log('mike identify: ', mike.identify());
console.log('use person class on mike: ', mike.calculateAge());

//// apply classes inheritance for ES6

class StudentClass extends PersonClass {
  constructor(firstName, birthDate, course) {
    super(firstName, birthDate);
    this.course = course;
  }
  identify() {
    console.log(
      `this is ${this.firstName} born in ${this.birthDate}: enroll in ${this.course} course.`
    );
  }
}

const sarah = new StudentClass('Sarah', 2000, 'Python');
sarah.identify();
console.log('sarah age: ', sarah.calAge());
