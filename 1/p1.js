const fs = require("fs");

const moduleMassList = fs.readFileSync("./inputs.txt", "utf8").split("\n");

const calculateFuelRequirement = mass => Math.floor(mass / 3) - 2;

const totalFuelRequirement = moduleMassList.reduce((acc, mass) => {
  return acc + calculateFuelRequirement(mass);
}, 0);

console.log(totalFuelRequirement);
