"use strict";
// Q1 – Dynamic Data Parser
// Convert each apiData value to Number, Boolean, String.
// Skip invalid numbers (NaN, " ", "100px") and log them separately.
// Build arrays: validNumbers[], invalidNumbers[].
// Print a detailed report.

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

// Helper: determine if a trimmed string is a clean numeric literal (integer or float)
function isNumericString(str) {
  // Accepts optional leading +/-, digits, optional decimal portion.
  // Note: "3.14" -> true, "100px" -> false, "" -> false
  return typeof str === "string" && /^[+-]?\d+(\.\d+)?$/.test(str.trim());
}

const validNumbers = [];
const invalidNumbers = [];
const detailedReport = [];

// Process each entry
for (let i = 0; i < apiData.length; i++) {
  const original = apiData[i];
  // Convert to String form (explicit)
  const asString = String(original);
  // Convert to Boolean
  const asBoolean = Boolean(original);
  // Convert to Number using Number() (explicit conversion)
  const asNumber = Number(original);

  // Decide if this should be considered a valid numeric value
  // Criteria:
  //  - If original is null -> Number(null) === 0 -> treat as valid numeric (explicit decision)
  //  - If original is undefined or results in NaN -> invalid
  //  - If original is a string that contains non-numeric chars (like "100px" or " ") -> invalid
  let numericValid = false;
  if (original === null) {
    numericValid = true;
  } else if (typeof original === "number" && !isNaN(original)) {
    numericValid = true;
  } else if (typeof original === "string") {
    // Check using regex to detect clean numeric strings
    if (isNumericString(original)) numericValid = true;
    // Special case: "NaN" or blank " " -> invalid
  } else {
    // undefined, objects, booleans -> check final number
    numericValid = !isNaN(asNumber);
  }

  const entry = {
    index: i,
    original,
    asString,
    asBoolean,
    asNumber,
    numericValid,
  };

  if (numericValid && !isNaN(asNumber)) {
    validNumbers.push(asNumber);
  } else {
    invalidNumbers.push(original);
  }

  detailedReport.push(entry);
}

// Output
console.log("=== DYNAMIC DATA PARSER REPORT ===");
for (const r of detailedReport) {
  console.log(
    `Index ${r.index} | original:`,
    r.original,
    `| String: "${r.asString}" | Boolean: ${r.asBoolean} | Number: ${r.asNumber}` +
      (r.numericValid ? " | VALID NUMERIC" : " | INVALID NUMERIC")
  );
}
console.log("\nValid numeric array:", validNumbers);
console.log("Invalid entries (skipped numbers):", invalidNumbers);

// Debug observation (hoisting & strictness): No implicit globals used due to "use strict".
// If we had assigned to an undeclared variable inside the loop, strict mode would throw.
