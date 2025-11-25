"use strict";

// Fake async step
const step = (msg) =>
  new Promise(resolve =>
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, 1000)
  );

// --------------- CALLBACK HELL ---------------
function callbackHell() {
  setTimeout(() => {
    console.log("Design");
    setTimeout(() => {
      console.log("Build");
      setTimeout(() => {
        console.log("Test");
        setTimeout(() => {
          console.log("Deploy");
          setTimeout(() => {
            console.log("Celebrate 🎉");
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}
// callbackHell();

// --------------- async/await CLEAN VERSION ---------------
async function runPipeline() {
  await step("Design");
  await step("Build");
  await step("Test");
  await step("Deploy");
  await step("Celebrate 🎉");
}

runPipeline();

/*
async/await removes deep nesting,
makes flow look synchronous,
and improves readability.
*/
