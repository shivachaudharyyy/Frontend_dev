"use strict";

class Person {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log(`Name: ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name); // call parent constructor
    this.branch = branch;
  }

  showBranch() {
    console.log(`Branch: ${this.branch}`);
  }
}

// Demo
const s1 = new Student("Yash", "CSE");
s1.showName();
s1.showBranch();
