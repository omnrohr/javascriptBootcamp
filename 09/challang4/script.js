///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names 
written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM 
(see code below), and conversion will happen when the 
button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in
 the textarea 😉
HINT 2: The solution only needs to work for a
 variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. 
Tackle that only after you have the variable name 
conversion working 😉
HINT 4: This challenge is difficult on purpose, 
so start watching the solution in case you're stuck.
 Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// const convertToCamelCase = function (str) {
//   const splitedStr = str.split('\n');
//   for (const i of splitedStr) {
//     const [first, second] = i.trim().toLowerCase().split('_');
//     const cammelCase =
//       (first + second[0].toUpperCase() + second.slice(1)).padEnd(20) + ';);)';
//     console.log(cammelCase);
//   }
// };

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const textarea1 = document.querySelector('textarea').value;
//   console.log(convertToCamelCase(textarea1));
// });

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// '_Delayed_Departure;'
//   fao93766109;
//   txl2133758440;
//   11:25+
//   _Arrival;
//   bru0943384722;
//   fao93766109;
//   11:45+
//   _Delayed_Arrival;
//   hel7439299980;
//   fao93766109;
//   12:05+
//   _Departure;
//   fao93766109;
//   lis2323639855;
//   12:30';}

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
// const arr = [];
// const newstring = flights.split('+');
// for (let i = 0; i < newstring.length; i++) {
//   // arr.push(...newstring[i].split(';'));
//   khara = newstring[i]
//     .replace(/_/g, ' ')
//     .replace(/;/g, ' ')
//     .replace(':', 'h')
//     .trim()
//     .split(' ');
//   console.log(newstring[i], '\n', khara);
// }

// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
//     '_',
//     ' '
//   )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
//   console.log(output);
// }

const arr = flights.split('+');
const newArry = [];
for (const line of arr) {
  // console.log(line);
  newArry.push(line.split(';'));
  console.log(line);
}
console.log(newArry);
for (const item of newArry) {
  console.log(
    item[0].replaceAll('_', ' ') + ' From:',
    item[1].slice(0, 3).toUpperCase() + ' To: ',
    item[2].slice(0, 3).toUpperCase(),
    item[3].replace(':', 'h ')
  );
}
// const line1 = arr[0].split(';');

// for (const sentence of arr) {
//   console.log(sentence);
//   slicedArr.push(...arr);
// }
// console.log(slicedArr);
// for ()
// const matrix = new Array(5).fill(0).map(() => new Array(4).fill(0));

// console.log(matrix);
