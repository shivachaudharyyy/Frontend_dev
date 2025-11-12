// Q8: Employee Salary Projection

let currentSalary = 40000;
let incrementRate = 10;

let salaryData = [];

for (let year = 1; year <= 5; year++) {
    currentSalary = currentSalary + (currentSalary * incrementRate / 100);
    salaryData.push({ Year: year, "Projected Salary": Math.round(currentSalary) });
}

console.table(salaryData);