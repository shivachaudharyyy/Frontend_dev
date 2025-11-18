"use strict";
// Q10 – Nested Hoisting and Closures
// Original snippet:
// function outer() {
//   console.log(count);
//   var count = 5;
//   function inner() {
//     console.log(count);
//     var count = 10;
//   }
//   inner();
// }
// outer();
//
// Tasks: predict, explain output, convert inner to arrow, debug call stack.

// Prediction and explanation:
// - In outer(), var count is hoisted to top of its function scope, initialized as undefined.
// - So console.log(count) inside outer prints undefined (not ReferenceError).
// - inner() has its own var count which is hoisted inside inner and initialized undefined at inner's start.
// - When inner() runs, console.log(count) inside inner prints undefined (its local hoisted var) -> then var count = 10 sets it.
// So output is:
// undefined
// undefined

function outerOriginal() {
  console.log("outerOriginal - before var count declared ->", count); // hoisted, undefined
  var count = 5;
  function inner() {
    console.log("inner - before local var count ->", count); // inner's var hoisted -> undefined
    var count = 10;
    console.log("inner - after local var count =", count); // 10
  }
  inner();
  console.log("outerOriginal - after inner -> outer count =", count); // 5
}
outerOriginal();

// Convert inner to arrow function and observe behavior:
function outerWithArrowInner() {
  console.log("outerWithArrowInner - before var count ->", count); // undefined due to hoisting
  var count = 5;

  // Arrow function: still creates its own scope when using 'var' inside, but if we avoid var inside arrow, it will reference outer's variable.
  const innerArrow = () => {
    // If we declare var count here, it shadows outer's count (and hoisting within innerArrow works similarly).
    // If we DON'T declare var count here and simply log count, it will resolve to outer's 'count'.
    console.log("innerArrow - accessing count from outer (no local declaration) ->", count);
  };

  innerArrow();
  console.log("outerWithArrowInner - outer count after innerArrow ->", count);
}
outerWithArrowInner();

// Explanation of hoisting memory contexts:
// - Each function has its own Variable Environment during execution.
// - var declarations are hoisted to top of their function and initialized with undefined before execution phase.
// - let/const are hoisted to TDZ and cannot be accessed before initialization.
// - Arrow functions differ only in syntax and 'this' binding; hoisting behavior depends on how the arrow is assigned (let/const/var).
// Debugging:
// - Put breakpoints at entry of outerOriginal and inner to inspect variable environment.
// - Call stack will show inner -> outer -> global. Observe separate 'count' bindings in each frame.
