"use strict";

// Object with arrow function ❌
const user = {
  name: "Yash",
  showName: () => {
    console.log(this.name);  
  }
};

console.log("Arrow Function Output:");
user.showName(); // undefined because arrow functions don't have their own 'this'

// FIX using normal function ✔
const fixedUser = {
  name: "Yash",
  showName() {
    console.log(this.name);
  }
};

console.log("Normal Function Output:");
fixedUser.showName(); // Yash
