const { calculateFuelRequirement } = require("./p1")
describe("p1 tests", () => {
  it("returns proper fuel requirements", () => {
    expect(calculateFuelRequirement(12)).toEqual(2)
    expect(calculateFuelRequirement(14)).toEqual(2)
    expect(calculateFuelRequirement(1969)).toEqual(654)
    expect(calculateFuelRequirement(100756)).toEqual(33583)
  })
})
