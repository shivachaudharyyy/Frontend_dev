// Q4: Academic Performance Evaluator

let marks = [85, 90, 75, 88, 92];

let detained = marks.some(mark => mark < 35);

let totalMarks = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
let percentage = totalMarks / marks.length;

if (detained) {
    console.log("Detained (One or more subjects below 35)");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
} else {
    console.log("Detained");
}