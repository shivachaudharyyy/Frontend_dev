let x = 16.75;

let rounded = Math.round(x);
let sqrtValue = Math.sqrt(x);
let powerValue = Math.pow(x, 3);
let randomValue = Math.floor(Math.random() * 41) + 10;

let summary = `
Math Utility Dashboard
------------------------
Original Number: ${x}
Rounded Value : ${rounded}
Square Root   : ${sqrtValue}
x^3           : ${powerValue}
Random(10-50) : ${randomValue}
`;

console.log(summary);
