const fs = require("fs")

const program = fs
  .readFileSync("./task2/input.txt", "utf8")
  .split(",")
  .map(e => parseInt(e))

const getPositions = (index, table) => {
  return {
    positionA: table[index + 1],
    positionB: table[index + 2],
    targetPosition: table[index + 3]
  }
}

const oppAddition = (index, tableReference) => {
  const { positionA, positionB, targetPosition } = getPositions(
    index,
    tableReference
  )

  const valueA = tableReference[positionA]
  const valueB = tableReference[positionB]
  const result = valueA + valueB

  tableReference[targetPosition] = result
}

const oppMultiplication = (index, tableReference) => {
  const { positionA, positionB, targetPosition } = getPositions(
    index,
    tableReference
  )
  const valueA = tableReference[positionA]
  const valueB = tableReference[positionB]
  const result = valueA * valueB

  tableReference[targetPosition] = result
}

const oppcodeDictionary = {
  1: oppAddition,
  2: oppMultiplication,
  99: "break"
}

const executeProgram = program => {
  let stepIndex = 0
  let shouldBreak = false

  for (stepIndex; stepIndex < program.length && !shouldBreak; stepIndex += 4) {
    if (typeof oppcodeDictionary[program[stepIndex]] === "function") {
      oppcodeDictionary[program[stepIndex]](stepIndex, program)
    }
    shouldBreak = oppcodeDictionary[program[stepIndex]] === "break"
  }
  return true
}

// program state restore:
program[1] = 12
program[2] = 2

executeProgram(program)
// console.log(program[0])

module.exports = {
  getPositions,
  oppAddition,
  oppMultiplication,
  oppcodeDictionary,
  executeProgram
}
