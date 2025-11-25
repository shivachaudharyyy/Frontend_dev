"use strict";

// Utility function to simulate delay & random failure
const delay = (ms, step) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) reject(`${step} failed!`);
      else resolve(`${step} completed.`);
    }, ms);
  });

// Step 1: Boil water
function boilWater() {
  return delay(1000, "Boiling water");
}

// Step 2: Brew coffee
function brewCoffee() {
  return delay(1200, "Brewing coffee");
}

// Step 3: Pour into cup
function pourCoffee() {
  return delay(1000, "Pouring coffee");
}

// Promise chaining
boilWater()
  .then(msg => {
    console.log(msg);
    return brewCoffee();
  })
  .then(msg => {
    console.log(msg);
    return pourCoffee();
  })
  .then(msg => {
    console.log(msg);
    console.log("Coffee ready for the team!");
  })
  .catch(err => console.log("❌ ERROR:", err));
