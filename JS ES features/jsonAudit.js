"use strict";
// Q9 – JSON Audit
// Parse rawData entries, detect invalid JSON and missing keys (user, age).
// Push valid entries to clean array; log errors with line numbers.
// Bonus: convert age to Number and filter under-18 users.

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  const line = rawData[i];
  try {
    let parsed;
    try {
      parsed = JSON.parse(line);
    } catch (parseErr) {
      throw new SyntaxError(`Invalid JSON at line ${i}: ${parseErr.message}`);
    }
    // Validate required keys
    if (!("user" in parsed)) throw new Error(`Missing 'user' key at line ${i}`);
    if (!("age" in parsed)) throw new Error(`Missing 'age' key at line ${i}`);

    // Convert age to Number
    parsed.age = Number(parsed.age);
    if (Number.isNaN(parsed.age)) throw new TypeError(`Invalid age value at line ${i}`);

    clean.push(parsed);
  } catch (err) {
    errors.push({ line: i, raw: line, error: err.message, type: err.constructor.name });
    console.log(`Parsing error (line ${i}):`, err.message);
    // Control flow: continue to next entry after logging
  }
}

// Bonus: filter under-18 users
const adults = clean.filter(u => u.age >= 18);

console.log("\n=== JSON AUDIT SUMMARY ===");
console.log("Clean entries:", clean);
console.log("Adults (age >= 18):", adults);
console.log("Errors logged:", errors);

// Debugging tip:
// - Put a breakpoint inside the inner try-catch to watch 'line' and 'parsed' values.
// - Observe control flow when an exception occurs: catch -> push error -> continue loop.
