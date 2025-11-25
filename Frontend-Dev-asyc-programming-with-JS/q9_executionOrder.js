"use strict";

/*
PREDICTED ORDER:
1. Script start
2. Script end
3. Promise callback
4. Timeout callback
*/

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

/*
EXPLANATION:
Promise.then() is a MICROTASK → runs before macrotask queue.
setTimeout() is a MACROTASK → runs afterwards.
*/
