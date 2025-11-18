// Generate 8 random scores between 30–100
let scores = Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 71) + 30
);

// Highest and lowest
let highest = Math.max(...scores);
let lowest = Math.min(...scores);

// Average score
let avg = scores.reduce((a, b) => a + b) / scores.length;

// Count passed students (>= 50)
let passed = scores.filter(score => score >= 50).length;

console.log("Scores:", scores);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Average:", avg.toFixed(2));
console.log("Passed Students:", passed);
