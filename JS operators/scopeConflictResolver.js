// Global variable
let bonus = 5000;

function calculateSalary() {
    // Local variable
    let salary = 40000;

    // Local Boolean variable
    let isPermanent = true;

    if (isPermanent) {
        salary += bonus;
    }

    console.log("Total Salary =", salary);
    console.log("isPermanent inside function =", isPermanent);
}

calculateSalary();

// Demonstrating effect on global scope
let isPermanent = false; // Global variable (different from local)
console.log("Global isPermanent =", isPermanent);
console.log("Global bonus remains =", bonus);
