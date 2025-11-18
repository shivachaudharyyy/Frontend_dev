"use strict";
// Q2 – Employee Bonus Calculator
// Convert salary/years to numbers, compute bonus, strict validation, template strings,
// try...catch for missing properties or conversion errors.

// Sample employee data
const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

// Utility to safely convert to number and validate
function toNumberStrict(value, propName) {
  const n = Number(value);
  if (Number.isNaN(n)) {
    throw new TypeError(`Invalid numeric value for ${propName}: ${value}`);
  }
  return n;
}

for (let i = 0; i < employees.length; i++) {
  try {
    const emp = employees[i];
    if (!emp || !emp.name) throw new ReferenceError(`Employee at index ${i} missing 'name'`);

    // convert salary and years with validation
    const salary = toNumberStrict(emp.salary, `salary for ${emp.name}`);
    const years = toNumberStrict(emp.years, `years for ${emp.name}`);

    // calculate bonus
    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
    const totalComp = salary + bonus;

    // Output formatted using template strings
    console.log(
      `Employee: ${emp.name} | Salary: ₹${salary.toFixed(2)} | Years: ${years} | Bonus: ₹${bonus.toFixed(2)} | Total: ₹${totalComp.toFixed(2)}`
    );
  } catch (err) {
    // handle conversion or missing property errors gracefully
    console.log(`Error processing employee at index ${i}:`, err.message);
  }
}

// Debug observations:
// - "use strict" prevents accidental global variables (e.g., writing total = 0 would throw).
// - All numerical conversions are validated with Number() and isNaN checks.
