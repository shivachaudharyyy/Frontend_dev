"use strict";

function applyOperation(numbers, operation) {
  const result = [];
  for (let num of numbers) {
    result.push(operation(num));
  }
  return result;
}

// Doubling
const doubled = applyOperation([1, 2, 3, 4], n => n * 2);
console.log("Doubled:", doubled);

// Squaring
const squared = applyOperation([1, 2, 3, 4], n => n * n);
console.log("Squared:", squared);
