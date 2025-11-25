"use strict";

/*
EXPECTED ORDER:
1. Start
2. Sync log
3. Promise microtask
4. setTimeout macrotask
5. End
*/

console.log("Start");

setTimeout(() => console.log("Macrotask: setTimeout"), 0);

Promise.resolve().then(() => console.log("Microtask: Promise.then()"));

console.log("Sync log");

console.log("End");

/*
EXPLANATION:
Microtasks (Promises) run BEFORE macrotasks (setTimeout) 
after the current synchronous code finishes.
*/
