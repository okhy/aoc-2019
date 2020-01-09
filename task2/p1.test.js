const {
  getPositions,
  oppAddition,
  oppMultiplication,
  oppcodeDictionary,
  executeProgram
} = require("./p1")

describe("task 2 part 1 tests", () => {
  let program
  beforeEach(() => {
    program = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50]
  })
  // helper functions tests
  test("getPositions returns correct values", () => {
    const { positionA, positionB, targetPosition } = getPositions(0, program)

    expect(positionA).toEqual(9)
    expect(positionB).toEqual(10)
    expect(targetPosition).toEqual(3)
  })
  test("addition function works properly", () => {
    oppAddition(0, program)
    expect(program[3]).toEqual(70)
  })
  test("multiplication function works properly", () => {
    oppAddition(0, program)
    oppMultiplication(4, program)

    expect(program[0]).toEqual(3500)
  })
  // dictionary tests
  test("dictionary returns maps addition function", () => {
    expect(oppcodeDictionary[1]).toEqual(oppAddition)
  })
  test("dictionary maps multiplication function", () => {
    expect(oppcodeDictionary[2]).toEqual(oppMultiplication)
  })
  test('dictionaty returns "break" on 99 code', () => {
    expect(oppcodeDictionary[99]).toEqual("break")
  })
  // execute function tests
  test("execute function modifies programs correctly", () => {
    const program1 = [1, 0, 0, 0, 99]
    const program2 = [2, 3, 0, 3, 99]
    const program3 = [2, 4, 4, 5, 99, 0]
    const program4 = [1, 1, 1, 4, 99, 5, 6, 0, 99]
    const program5 = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50]

    executeProgram(program1)
    executeProgram(program2)
    executeProgram(program3)
    executeProgram(program4)
    executeProgram(program5)

    expect(program1).toEqual([2, 0, 0, 0, 99])
    expect(program2).toEqual([2, 3, 0, 6, 99])
    expect(program3).toEqual([2, 4, 4, 5, 99, 9801])
    expect(program4).toEqual([30, 1, 1, 4, 2, 5, 6, 0, 99])
    expect(program5).toEqual([3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50])
  })
})
