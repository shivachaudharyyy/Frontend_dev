"use strict";

/* Q4. Employee Inheritance
   - Employee class with name and department
   - Manager inherits Employee
   - Manager overrides work() method
   - Demonstrate runtime polymorphism
*/

// Base class
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    console.log(`${this.name} is working in the ${this.department} department.`);
  }
}

// Derived class
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  // Overriding work() → Polymorphism
  work() {
    console.log(`${this.name} is managing a team of ${this.teamSize} people in the ${this.department} department.`);
  }
}

// Creating objects
const emp1 = new Employee("Alice", "Sales");
const mgr1 = new Manager("Rahul", "IT", 8);

// Runtime polymorphism demonstration
function doWork(employeeObj) {
  // Calls method based on actual object type
  employeeObj.work();
}

console.log("--- Employee Work ---");
doWork(emp1);

console.log("--- Manager Work (Polymorphism) ---");
doWork(mgr1);