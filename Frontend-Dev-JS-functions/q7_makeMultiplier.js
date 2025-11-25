"use strict";

function makeMultiplier(multiplier) {
  return function (num) {
    return num * multiplier; // closure (num remembers multiplier)
  };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15
