"use strict";

// Callback function
function showEndMessage() {
  console.log("Welcome to the course!");
}

// Main function with callback
function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback(); // callback execution
}

// Demonstration
greetUser("Yash", showEndMessage);
