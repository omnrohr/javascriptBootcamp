'use strict';

/*
const calAge = function(birthdate){
    return 2022 - birthdate;
}

console.log(calAge(1980));

function calAge1(birthdate){
    return 2022 - birthdate;
}

const calAge2 = birthdate => 2022 - birthdate;

console.log (calAge(1980), calAge1(1980), calAge2(1980));

const retirement = (birthdate, firstName) =>{
    return `${firstName} retires in ${65 - calAge(birthdate)} year.`;
}

console.log(retirement(1980, "obada"));
*/

/*
JavaScript Fundamentals – Part 2
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the 
Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 
3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average 
score of the other team. 
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the 
average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average
 score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the
 winner 
to the console, together with the victory points, according 
to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner
 for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. 
Koalas score 65, 54 and 49

§ Data 2: Dolphins score 85, 54 and 41.
 Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together
 and divide by 3
§ To check if number A is at least double number B,
 check for A >= 2 * B. 
Apply this to the team's average scores �
GOOD LUCK 
*/

/*
const calAverage = (firstScore, secondScore, thirdScore)=> (firstScore+secondScore+thirdScore)/3;

const checkWinner = function(koalasAverage, dolfhinsAvarage){
    if (koalasAverage >= dolfhinsAvarage*2){
        return "Koala wins";
    }else if (dolfhinsAvarage >= koalasAverage*2){
        return "Dolfine wins"
    }else return -1;
}
console.log(calAverage(65,54,49),calAverage(44,23,71));
console.log(calAverage(23,34,27),calAverage(85,54,49));

console.log(checkWinner(calAverage(65,54,49),calAverage(44,23,71)));
console.log(checkWinner(calAverage(23,34,27),calAverage(85,54,49)));
*/

//arrays

/*
const array1 = ['value1', 'value2', 'value3'];
console.log(array1);

const array2 = new Array(1,2,3,4,5);
console.log(array2);

console.log(typeof array1, typeof array2);
const findwith = array1.findIndex((element) => element.startsWith('v'));
console.log(findwith);

array1.push('value4');

const array4 = array1.push('value5');
console.log(array4);
*/
/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value 
as an input and returns 
the corresponding tip, calculated based on the rules
 above (you can check out 
the code from first tip calculator challenge if you need to)
. Use the function 
type you like the most. Test the function using a bill
 value of 100
2. And now let's use arrays! So create an array 'bills'
 containing the test data 
below
3. Create an array 'tips' containing the tip value for 
each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total
 values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position,
 and that value can 
actually be the returned value of a function! So you can
 just call a function as array 
values (so don't store the tip values in separate variables
 first, but right in the new 
array) �
GOOD LUCK 
*/

/*
const calcTip = bill => bill >=50 && bill <=300 ? bill *0.15 : bill*0.2;
const bills = [calcTip(125), calcTip(555),calcTip(44)];
console.log(bills);

const totalAmount = [125+calcTip(125), 555+calcTip(555),44+calcTip(44)];
console.log(totalAmount);
*/

/*

const obada =  {
firstName: "Obada",
lastName: "alahdab",
birthDate: 1980,
job:"Programmer",
hopies: ["programming", "math"],
familyMembers: ['rana', 'seba', 'naser', 'jod', 'misk'],
calAge : function(){
    this.age = 2022 - this.birthDate;
    return this.age;
},
getSummery: function(){
    return `name: ${this.firstName} ${this.lastName}
    \nage: ${this.calAge()}\njob: ${this.job}`
}
};

obada.newField = "new field";
obada['middleName'] = "Mohammed Nasser";


console.log(typeof obada);
console.log(obada);
console.log(obada['lastName']);
console.log(obada.lastName);

console.log(obada.calAge());
console.log(obada.age);

console.log(obada.getSummery());
*/

/*
const obada =  {
    firstName: "Obada",
    lastName: "alahdab",
    birthDate: 1980,
    job:"Programmer",
    hopies: ["programming", "math"],
    familyMembers: ['rana', 'seba', 'naser', 'jod', 'misk'],
    calAge : function(){
        this.age = 2022 - this.birthDate;
        return this.age;
    },
    getSummery: function(){
        return `name: ${this.firstName} ${this.lastName}
        \nage: ${this.calAge()}\njob: ${this.job}`
    }
    };

// for (const key in obada) {
//     if (Object.hasOwnProperty.call(obada, key)) {
//         console.log(obada[key]); 
//     }
// }
for (let index = 0; index < obada.length; index++) {
const element = obada[index];
console.log(element);
}
*/

/*
Coding Challenge #3
Let's go back to Mark and John comparing 
their BMIs! This time, let's use objects to 
implement the calculations! Remember: 
BMI = mass / height ** 2 = mass 
/ (height * height) 
(mass in kg and height in meter)
Your tasks:
1. For each of them, create an object 
with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each 
object to calculate the BMI (the same 
method on both objects).
 Store the BMI value to a property, 
 and also return it 
from the method
3. Log to the console who has the higher
 BMI, together with the full name and the 
respective BMI. Example:
 "John's BMI (28.3) is higher than Mark's 
 (23.9)!"
Test data: Marks weights 78
 kg and is 1.69 m tall. John weights
  92 kg and is 1.95 m 
tall.
GOOD LUCK 
*/

/*
const mark = {
    fullName: "Mark Miller",
    weight : 78,
    tall : 1.69,

    calcBMI: function(){
        this.BMI = this.weight/Math.pow(this.tall,2);
        return this.BMI;
    },
}

const John = {
    fullName: "John Smith",
    weight : 92,
    tall : 1.95,

    calcBMI: function(){
        this.BMI = this.weight/Math.pow(this.tall,2);
        return this.BMI;
    },
}

console.log(mark.calcBMI());
console.log(John.calcBMI());

let higher = function(){
    if (mark.calcBMI > John.calcBMI)
    return `${mark.fullName} is higher BMI than ${John.fullName}`
    else return `${John.fullName} is higher BMI than ${mark.fullName}`
}

console.log(higher());
*/

/*
const obada =  {
    firstName: "Obada",
    lastName: "alahdab",
    birthDate: 1980,
    job:"Programmer",
    hopies: ["programming", "math"],
    familyMembers: ['rana', 'seba', 'naser', 'jod', 'misk'],
    calAge : function(){
        this.age = 2022 - this.birthDate;
        return this.age;
    },
    getSummery: function(){
        return `name: ${this.firstName} ${this.lastName}
        \nage: ${this.calAge()}\njob: ${this.job}`
    }
    };

const array1 = ['value1', 'value2', 'value3'];

 for (let i = 0; i<array1.length; i++){
     console.log(array1[i]);
 }

 for (let i= array1.length-1 ; i >= 0; i--){
     console.log(array1[i]);
 }

 let rep = 0;
 while (rep < 3){
     console.log(rep);
     rep++;
 }
 
 const randomNumber = function(){
     let number = Math.random() * 6;
     console.log(number);
     console.log(Math.round(number)+1);  // random is rounding to the nearest int.
     return Math.trunc(number) + 1;
 }

 console.log(`the random number `+randomNumber());

 */

/*
 Coding Challenge #4
Let's improve Steven's tip calculator even more,
 this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill
 values
2. Create empty arrays for the tips and the totals 
('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need
     to repeat) to calculate 
tips and total values (bill + tip)
 for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method
 to add values to the 
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an
 array called 'arr' as 
an argument. This function calculates the average of all
 numbers in the given 
array. This is a difficult challenge (we haven't done
 this before)! Here is how to 
solve it:
4.1. First, you will need to add up all values in the array.
 To do the addition, 
start by creating a variable 'sum' that starts at 0.
 Then loop over the 
array using a for loop. In each iteration, add the 
current value to the 
'sum' variable. This way, by the end of the loop, 
you have all values 
added together
4.2. To calculate the average, divide the sum you
 calculated before by the 
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK �
*/

/*
const timsbills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const timsTip = [];
const timsTotal = [];
for (let i = 0; i < timsbills.length; i++) {
  timsTotal.push(timsbills[i] + calcTip(timsbills[i]));
  timsTip.push(calcTip(timsbills[i]));
}

const average = function (array) {
  let sum = 0;
  if (array.length === 0) return -1;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};
console.log(timsTotal, timsTip);
console.log(`Tims average bills is ${average(timsTotal)}`);

const mesureKalv = function () {
  const tem = {
    type: 'temp',
    unit: 'celcuis',
    value: prompt('please enter a value: '),
  };

  const kelven = Number(tem.value) + 273;
  return kelven;
};

console.log(mesureKalv());
*/

/*

Developer Skills & Editor Setup
Coding Challenge #1
Given an array of forecasted maximum temperatures, the 
thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] 
will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an 
array 'arr' and logs a 
string like the above to the console. Try it with both 
test datasets.
2. Use the problem-solving framework: Understand the
 problem and break it up 
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK �
*/

const printForecast = function (arry) {
  for (let i = 0; i < arry.length; i++) {
    console.log(`${arry[i]}ºC in ${i} days`);
  }
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
printForecast(data1);
printForecast(data2);
