"use strict";
// Q4 – Debugging Mystery
// Problem code (throws under strict):
// function showMessage() {
//   greeting = "Welcome"; // undeclared
//   console.log(greeting);
// }
// showMessage();
//
// Explanation:
// In strict mode, assigning to an undeclared variable throws a ReferenceError.
// Non-strict would create a global variable implicitly (bad practice).

// Fixed version: declare greeting with appropriate scope
function showMessage() {
  // Declare local variable explicitly to respect strict mode rules
  let greeting = "Welcome";
  console.log("Inside showMessage -> greeting:", greeting);
}

showMessage();

// Debug instructions (VS Code):
// - Put a breakpoint on console.log inside showMessage
// - Run the debugger and watch 'greeting' variable and call stack
// Observations:
// - Under "use strict", an assignment to an undeclared name throws a ReferenceError immediately.
// - Declaring with let/const/var ensures proper scoping and no runtime error.
