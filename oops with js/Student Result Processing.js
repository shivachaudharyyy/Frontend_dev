"use strict";

/* Q1. Student Result Processing (reduce + Classes)
   - Student class with name & marks[]
   - calculateAverage() using reduce()
   - grade based on average
   - Test with 3 students
*/

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  // Calculate average using reduce
  calculateAverage() {
    const sum = this.marks.reduce((total, val) => total + val, 0);
    return sum / this.marks.length;
  }

  // Return grade based on average
  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 90) return "A";
    if (avg >= 75) return "B";
    if (avg >= 50) return "C";
    return "F";
  }

  printResult() {
    console.log(`Name: ${this.name}`);
    console.log(`Marks: ${this.marks.join(", ")}`);
    console.log(`Average: ${this.calculateAverage().toFixed(2)}`);
    console.log(`Grade: ${this.getGrade()}`);
    console.log("---------------------------");
  }
}

// Testing the class
const s1 = new Student("Amit", [90, 85, 88]);
const s2 = new Student("Riya", [70, 60, 75]);
const s3 = new Student("Karan", [40, 55, 50]);

s1.printResult();
s2.printResult();
s3.printResult();
