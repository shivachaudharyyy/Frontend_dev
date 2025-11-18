"use strict";
// Q7 – Smart Calculator
// operations: ["add","divide","power","root","subtract"]
// add custom error handling for divide by 0 and root of negative number.
// If operation not recognized, throw InvalidOperationError.
// Wrap in try...catch and print formatted summary.

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0; // sample numbers

class InvalidOperationError extends Error {}
class MathOpError extends Error {}

function calculate(op, a, b) {
  switch (op) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) throw new MathOpError("Division by zero not allowed");
      return a / b;
    case "power":
      return Math.pow(a, b);
    case "root":
      if (a < 0) throw new MathOpError("Root of negative number not allowed");
      return Math.pow(a, 1 / b);
    default:
      throw new InvalidOperationError(`Unknown operation: ${op}`);
  }
}

for (const op of operations) {
  try {
    const result = calculate(op, num1, num2);
    console.log(`Operation: ${op} | Inputs: (${num1}, ${num2}) | Result: ${result}`);
  } catch (err) {
    console.log(`Operation: ${op} | Error: ${err.name} -> ${err.message}`);
  }
}

// Example output analysis:
// - divide with num2 = 0 triggers MathOpError.
// - root uses 25 and 0 -> Math.pow(25, 1/0) -> Infinity or error; in practice 1/0 => Infinity => Math.pow(25, Infinity) => Infinity.
//   You may want to treat b===0 for root separately (invalid root degree).
