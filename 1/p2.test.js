const { calculateFuelRequirement } = require("./p2");
describe("p2 tests", () => {
  it("returns proper fuel requirements", () => {
    expect(calculateFuelRequirement(100756)).toEqual(50346);
    expect(calculateFuelRequirement(1969)).toEqual(966);
  });
});
