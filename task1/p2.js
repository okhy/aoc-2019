const fs = require("fs")

const moduleMassList = fs.readFileSync("./task1/inputs.txt", "utf8").split("\n")

const calculateFuelRequirement = mass => {
  const fuelRequired = Math.floor(mass / 3) - 2
  return fuelRequired > 0
    ? fuelRequired + calculateFuelRequirement(fuelRequired)
    : 0
}

const totalFuelRequirement = moduleMassList.reduce((acc, mass) => {
  return acc + calculateFuelRequirement(mass)
}, 0)

// console.log(totalFuelRequirement)

module.exports = {
  calculateFuelRequirement
}
