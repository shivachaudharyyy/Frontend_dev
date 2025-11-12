// Q2: Multi-Type Data Summary

let name = "Skand";
let age = 21;
let isStudent = true;
let hobbies = ["Coding", "Music", "Travel"];
let details = { city: "Delhi", country: "India" };
let emptyValue = null;
let notAssigned;

console.table([
    { Label: "Name", Value: name, Type: typeof name },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "isStudent", Value: isStudent, Type: typeof isStudent },
    { Label: "Hobbies", Value: hobbies, Type: Array.isArray(hobbies) ? "array" : typeof hobbies },
    { Label: "Details", Value: JSON.stringify(details), Type: typeof details },
    { Label: "Empty", Value: emptyValue, Type: typeof emptyValue },
    { Label: "Undefined", Value: notAssigned, Type: typeof notAssigned }
]);