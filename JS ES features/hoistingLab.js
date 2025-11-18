"use strict";
// Q5 – Hoisting Lab: The Sequence Trap
// Original snippet (predict and explain):
// console.log(score);
// announce();
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame();
// function startGame() { console.log(status); }

// Explanation of hoisting (brief):
// - Function declarations are hoisted entirely (bindings + body).
// - var-declared variables are hoisted as declarations and initialized with undefined.
// - let/const are hoisted to Temporal Dead Zone (TDZ) and cannot be accessed before initialization.

// Running the original as-is under strict mode will:
// - console.log(score); -> prints undefined (because var score is hoisted but not assigned yet)
// - announce(); -> works (function hoisted)
// - Declaration var score = 50; then let status = "ready";
// - startGame(); -> startGame sees 'status' in TDZ? No — status is declared before startGame is called in code order, so this works.
// BUT if startGame were called before 'status' initialization, it would throw ReferenceError.

// Fixed code to run predictably:
function fixedHoistingExample() {
  // Move declarations to top for clarity
  var score = 50; // var hoisted; explicit init here
  function announce() { console.log("Game started"); }
  let status = "ready";
  function startGame() {
    console.log("startGame sees status:", status);
  }

  console.log("score:", score); // 50
  announce(); // "Game started"
  startGame(); // "ready"
}
fixedHoistingExample();

// Arrow function rewrite (to compare hoisting differences)
// Note: Arrow functions assigned to const/let behave like variables — they are not hoisted as callable functions.
const announceArrow = () => { console.log("Game started (arrow)"); };
// If we attempted to call announceArrow() before this line, we'd get a ReferenceError (TDZ for const).
const startGameArrow = () => {
  console.log("startGameArrow sees statusArrow:", statusArrow);
};
const statusArrow = "ready-arrow";

// Demonstrate ordering required for arrows:
announceArrow(); // works because announceArrow is defined
startGameArrow(); // works because statusArrow is already initialized

// Debug/observations:
// - Function declarations: hoisted fully.
// - var variables: hoisted and initialized to undefined.
// - let/const/arrow-assigned variables: hoisted to TDZ until initialized, can't be accessed earlier.
