"use strict";
/*
const allLowerCaseFunc = function (str) {
  return str.toLowerCase();
};

const allCaps = function (str) {
  return str.toUpperCase();
};

const transfer = function (str, action) {
  return action(str);
};

const retrunFunc = function () {
  let counter = 0;
  return function () {
    counter++;
    console.log(counter);
  };
};

const printName = function (first) {
  return function (second) {
    console.log(`hello ${first} ${second}`);
  };
};

const printNameArrow = (first) => (second) =>
  console.log(`hello ${first} ${second}`);

console.log(transfer("new Day is Comming", allLowerCaseFunc));
console.log(transfer("new Day is Comming", allCaps));

const savableFunc = retrunFunc();
savableFunc();
savableFunc();
savableFunc();

printName("Obada")("alahdab");
printNameArrow("Obada")("alahdab");
*/

/*
const airLines1 = {
  airLineName: "Jordanian Air Lines",
  airLinesCode: "JOR",
  bookingList: [],
  addTicket: function (ticket, passenger) {
    console.log(
      `${passenger} hase booked a ticket at ${this.airLineName} flight with number "${this.airLinesCode}${ticket}".`
    );
    this.bookingList.push([passenger, `${this.airLinesCode}${ticket}`]);
  },
};

airLines1.addTicket(1225, "obada");
airLines1.addTicket(1226, "obada1");
airLines1.addTicket(1227, "obada2");
console.log(airLines1);

const addTicketMethod = airLines1.addTicket;
// joaddTicket(5553, "rana");

addTicketMethod.call(airLines1, 5553, "rana");

const joaddticketBind = addTicketMethod.bind(airLines1);
joaddticketBind(5555, "rana2");

const airLines2 = {
  airLineName: "qatar airlines",
  airLinesCode: "QTR",
  bookingList: [],
};

const qataraddticket = addTicketMethod.bind(airLines2);
qataraddticket(2112, "obada flies");

*/
