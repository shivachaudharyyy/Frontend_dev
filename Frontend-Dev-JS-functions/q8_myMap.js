"use strict";

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// Demo
const output = [1, 2, 3].myMap(n => n * 2);
console.log(output); // [2,4,6]
