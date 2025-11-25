class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary += this.salary * percent / 100;
  }
}

const employees = [
  new Employee(1, "A", "HR", 30000),
  new Employee(2, "B", "IT", 40000),
  new Employee(3, "C", "Finance", 50000),
  new Employee(4, "D", "Sales", 35000),
  new Employee(5, "E", "Marketing", 45000)
];

employees.forEach(emp => console.log(`${emp.name}: Annual Salary = ${emp.getAnnualSalary()}`));

const totalPayout = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);
console.log("Total Annual Payout:", totalPayout);