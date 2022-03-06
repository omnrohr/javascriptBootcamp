// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const resturant = {
  name: "aldeyar",
  coordinate: [15.01868, 28.546654],
  address: {
    stName: "alshaheed",
    city: "amman",
    building: 25,
    naighbor: "sport zoon",
  },
  workers: {
    worker1: {
      name: "hamza",
      bitrhDate: "1-1-2020",
      experiance: 10,
      salary: 450,
    },
    worker2: {
      name: "omar",
      bitrhDate: "15-1-1950",
      experiance: 15,
      salary: 600,
    },
  },
  workingDays: ["sat", "sun", "mon", "tus", "wen", "thu", "fri"],
  menue: {
    baking: [
      ["meat", "chees", "egg"],
      ["bibroni", "mix", "zaatar"],
    ],
    cocktail: ["orange", "apple", "carrot"],
  },
  workingTime: 12,
};

//Arrays data
console.log("object", resturant);
//only making varables of data in array.
const [longlat, width] = resturant.coordinate;
console.log("coordinate", longlat, width);
// converting each item in the list to single array.
const [...coordinateAr] = resturant.coordinate.entries();
console.log("unpacked coordinate", coordinateAr);
// return an etarable array (Array Iterator) with no items.
const falseConvert = resturant.coordinate.entries();
console.log(falseConvert);

const maparray = resturant.address;
console.log("adress array:", maparray);

const { stName: StreetName, city, building, naighbor } = resturant.address;
console.log("unpacked map", StreetName, city, building, naighbor);

const addressmap = new Map();
addressmap.set("stName", "alshaheed").set("city", "amman");
console.log("address map", addressmap);
const array1 = ["a", "b", "c"];
console.log("array1", array1);
