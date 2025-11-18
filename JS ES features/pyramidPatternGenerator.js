"use strict";
// Q6 – Pyramid Pattern Generator
// Produce pattern:
// *
// * *
// * * *
// * * * *
// Then: replace let with var and observe changes, add outer limit controlled by user input (default 5).
// "use strict" ensures loop variables must be declared.

function generatePyramid(limit = 5) {
  console.log(`Generating pyramid with limit = ${limit}`);
  for (let i = 1; i <= limit; i++) {
    // build row by repeating "* " i times
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "* ";
    }
    console.log(row.trim());
  }
}

generatePyramid(4); // default small demo (for the exact pattern you asked)
console.log("--- Now with default limit 5 ---");
generatePyramid(); // default 5

// Observation: Replace 'let' with 'var' inside nested loops:
// - 'var' is function-scoped, so reusing j across iterations could lead to accidental reuse in certain edge cases.
// - 'let' is block-scoped so each loop iteration gets its own binding (safer).
// Demonstrate using var (but still within strict mode — var is allowed):
function generateWithVar(limit = 5) {
  console.log("generateWithVar (using var) limit:", limit);
  for (var i = 1; i <= limit; i++) {
    var row = "";
    for (var j = 0; j < i; j++) {
      row += "* ";
    }
    // Because var is function-scoped, after inner loop j remains value from last iteration.
    // This rarely alters output here but can cause bugs if j is referenced later expecting fresh binding.
    console.log(row.trim());
  }
}
generateWithVar(4);

// Debugging step-by-step:
// - Put breakpoints inside loops to inspect i and j.
// - "use strict" will catch undeclared variables (e.g., accidentally using 'k' without declaration).
