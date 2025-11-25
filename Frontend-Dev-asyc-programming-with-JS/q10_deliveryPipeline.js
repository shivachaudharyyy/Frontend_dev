"use strict";

// 1–2 sec random delay with random failure
function asyncStep(name) {
  const time = 1000 + Math.random() * 1000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) reject(`${name} failed!`);
      else resolve(`${name} completed`);
    }, time);
  });
}

async function runPipeline() {
  console.log("Start Pipeline");

  try {
    console.log(await asyncStep("Step 1: Order taken"));
    console.log(await asyncStep("Step 2: Food prepared"));
    console.log(await asyncStep("Step 3: Package ready"));
    console.log(await asyncStep("Step 4: Out for delivery"));

    console.log("Delivery completed!");
  } catch (err) {
    console.log("Pipeline failed!");
    console.log("❌", err);
  }
}

runPipeline();
