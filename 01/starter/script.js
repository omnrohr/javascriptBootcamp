/*
let js = "amazing";
console.log(61 + 100 - 52);
*/

/*
let javaScript = true;
console.log(javaScript);
console.log(typeof true);
console.log(typeof javaScript);


let age = 40;
age = 43;  //variable can change at runtime.
console.log(typeof(age));
const name = "Obada"; // immutable variable.
// name = "OMN";

var firstName = "Obada";
firstName = age + " " 
console.log(firstName);
console.log(typeof firstName);


lastName = "Al Ahdab";
console.log(lastName); // this will create a global property on global object named lastname. dont yse it.

let a = 0;
console.log(a++);
console.log(a);
console.log(++a);// nothing happen.
console.log(a);

let b = 10;

let c = a + "string";
console.log(c)

let x,y;

x = y = 25 - 10 - 10
console.log(x,y);
*/


/*----------------------------------------------------------------
Mark and John are trying to compare their BMI (Body Mass 
    Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) 
(mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula 
(you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing 
information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. 
John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. 
John weights 85 kg and is 1.76 
m tall.
GOOD LUCK �
*/

/*
const markWeight = 78;
const markTall = 1.69;
const johnWeight = 92;
const johnTall = 1.95;
const markHigherBMI = markWeight/markTall*markTall > (johnWeight/Math.pow(johnTall,2));
 console.log((markWeight/Math.pow(markTall,2)), (johnWeight/Math.pow(johnTall,2)) )
console.log("Mark BMI=" ,markHigherBMI)
*/
/*
const myName= "obada";
const newName = `I'm ${myName}`; // use backtex
console.log(newName)    //not using simicolone
console.log(myName + " " + 'I\'m ${myName}')//not using simicolone


console.log(`I am \n\ obada \n\ and i using $ ${myName}`)
//or you can just hit enter 
console.log(`Iam 
obada
using enter`)
*/
/*
const age = 10;
const isElegabel= age >= 18;
if (isElegabel){
 console.log(`Alegabel.`);
}else{
    console.log(`You age is les than legal age "18", you can have it after ${18-age} years.`);
} */

/*
const markWeight = 78;
const markTall = 1.69;
const johnWeight = 92;
const johnTall = 1.95;
const markHigherBMI = markWeight/markTall*markTall > (johnWeight/Math.pow(johnTall,2));
if (markHigherBMI){
    console.log(`Mark is higer PMI than mark`)
}else{
    console.log(`John is higer PMI than mark`)
}
 console.log((markWeight/Math.pow(markTall,2)), (johnWeight/Math.pow(johnTall,2)) )
 
console.log("Mark BMI=" ,Math.round(markWeight/Math.pow(markTall,2)));
*/

/*
const thisYear = '2021';
console.log(thisYear, Number(thisYear));
console.log(thisYear+1);
console.log(Number(thisYear)+1);
*/
/*
console.log(Number("Jone"));
console.log(typeof NaN); // type of NaN is a number!!!
console.log('32'-'10'-3); //this will convert all to numbers because of - ;
console.log("32" - "10" - "3");
console.log('23' + "10" + 3);
console.log('23' *'2'); //also will convert the strings to numbers.
console.log('10'-'3'-'2'+'5');
*/
/*
const age = 18;
console.log(age === 18);
console.log(age == '18'); //type converstion will happen if double eqaulity.
*/

// const anything = prompt('what is your favorate desh?');
// console.log(anything);

/*
1. Calculate the average score for each team, 
using the test data below
2. Compare the team's average scores to determine the 
winner of the competition, 
and print it to the console.
 Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score
 of 100. With this rule, a 
team only wins if it has a higher score than the other team,
 and the same time a 
score of at least 100 points.
 Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw!
 So a draw only happens when 
both teams have the same score and both have a
 score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88,
 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101.
 Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101.
 Koalas score 109, 95 and 106
GOOD LUCK 
*/

/*
const avarageDolphins = (97+112+101)/3;
const avarageKoalas = (109+95+123)/3;
// const avarageDolphins = (97+112+101)/3;
// const avarageKoalas = (109+95+106)/3;
// const avarageDolphins = (96 + 108 + 89 ) / 3;
// const avarageKoalas = (88 + 91 + 110) / 3;
console.log(avarageDolphins, avarageKoalas);
if (avarageDolphins >=100 && avarageKoalas >= 100){
    if (avarageDolphins > avarageKoalas)console.log("Dolfhis wins")
    else if (avarageKoalas > avarageDolphins) console.log("koalas wins!")
    else console.log("Draw!")
}else if (avarageDolphins >= 100) console.log("Dolphins wins!");
else if (avarageKoalas >= 100) console.log("Koala Wins!");
else console.log("no winner!");


if (avarageDolphins > avarageKoalas && avarageDolphins >= 100){
    console.log("Dolfhis wins");
}else if (avarageKoalas > avarageDolphins && avarageKoalas >= 100){
    console.log("Koala Wins!");
}else if (avarageDolphins >= 100 && avarageKoalas >= 100 && avarageDolphins === avarageKoalas){
    console.log("Draw!");
}else console.log("No winner!")
*/

/*
const day = "sunday";
switch (day){
    case "satrday":   console.log("Draw somthing"); break;
    case "sunday": console.log("sleep"); break;
    case "monday": console.log("restorant"); break;
    default: console.log("no activity");
}
*/
// const age = 22;
// age > 23 ? console.log("bigger than 22") : console.log("not allowd");


/*

Coding Challenge #4
Steven wants to build a very simple tip calculator for
 whenever he goes eating in a 
restaurant. In his country, it's 
usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. 
Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � 
(If it's easier for you, you can 
start with an if/else statement, and then try to convert 
it to a ternary 
operator!)
2. Print a string to the console containing the bill value,
 the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25,
 and the total value 
316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
GOOD LUCK 
*/


const billValue = 40;
billValue >= 50 && billValue <= 300 ? console.log(`the tip is ${billValue*0.15}`) : console.log(`the tip valu is ${billValue*0.2}`);


