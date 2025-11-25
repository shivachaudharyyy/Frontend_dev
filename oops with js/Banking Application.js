"use strict";

// Q7 - Banking Application
// BankAccount class with private balance and proper error handling

class BankAccount {
  #balance = 0; // private field

  constructor(initialAmount = 0) {
    if (initialAmount < 0) throw new Error("Initial amount cannot be negative");
    this.#balance = initialAmount;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Deposit amount must be positive");
    this.#balance += amount;
    console.log(`Deposited: ₹${amount}`);
  }

  withdraw(amount) {
    if (amount <= 0) throw new Error("Withdrawal amount must be positive");
    if (amount > this.#balance) throw new Error("Insufficient balance");
    this.#balance -= amount;
    console.log(`Withdrawn: ₹${amount}`);
  }

  getBalance() {
    return this.#balance;
  }
}

// ------------------- Testing -------------------

try {
  const acc = new BankAccount(500);
  console.log("Initial Balance:", acc.getBalance());

  acc.deposit(300);
  console.log("After Deposit:", acc.getBalance());

  acc.withdraw(200);
  console.log("After Withdrawal:", acc.getBalance());

  // Invalid withdrawal
  acc.withdraw(2000); // should throw an error

} catch (err) {
  console.log("⚠ Error:", err.message);
}