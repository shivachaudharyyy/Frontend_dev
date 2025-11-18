"use strict";
// Q3 – Transaction Validator
// Throw custom errors for negative amounts, missing amount or id, and null entries.
// Catch and categorize errors into arrays (invalid, valid).
// Print final reports and counts.

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

// Custom Error types
class TransactionError extends Error {}
class NegativeAmountError extends TransactionError {}
class MissingFieldError extends TransactionError {}
class NullEntryError extends TransactionError {}

const validTransactions = [];
const invalidTransactions = [];

for (let i = 0; i < transactions.length; i++) {
  const tx = transactions[i];
  try {
    if (tx === null) throw new NullEntryError(`Transaction at index ${i} is null`);
    if (typeof tx !== "object") throw new MissingFieldError(`Transaction at index ${i} is not an object`);

    if (!("id" in tx)) throw new MissingFieldError(`Missing 'id' in transaction at index ${i}`);
    if (!("amount" in tx)) throw new MissingFieldError(`Missing 'amount' in transaction id=${tx.id}`);

    if (typeof tx.amount !== "number") throw new TypeError(`Amount is not a number in transaction id=${tx.id}`);

    if (tx.amount < 0) throw new NegativeAmountError(`Negative amount in tx id=${tx.id}: ${tx.amount}`);

    // If we reach here, this transaction is valid
    validTransactions.push(tx);
  } catch (err) {
    // categorize
    invalidTransactions.push({ index: i, error: err.constructor.name, message: err.message });
    // log immediate debug info
    console.log(`Error (index ${i}): ${err.message}`);
    // For debugging in dev tools, you could set a breakpoint on the line above and inspect 'tx'.
  }
}

console.log("\n=== TRANSACTION SUMMARY ===");
console.log("Valid transactions count:", validTransactions.length);
console.log("Valid transactions:", validTransactions);
console.log("Invalid transactions count:", invalidTransactions.length);
console.log("Invalid transactions:", invalidTransactions);

// Tip: In a debugger you can set a breakpoint inside the try-block to watch 'tx' and track call stack.
