"use strict";

/* File 9: formValidator.js
   Task 9 – Form Submit Blocker with preventDefault() and Live Errors
   ✅ Name required
   ✅ Email must contain "@"
   ✅ Password min 6 chars
   ✅ Show inline errors
   ✅ Remove errors on correction
   ✅ Show success message
*/

const form = document.querySelector("#userForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const successMsg = document.querySelector("#successMessage");

// Utility: show error
function showError(input, message) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = message;
  errorSpan.style.display = "block";
}

// Utility: clear error
function clearError(input) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = "";
  errorSpan.style.display = "none";
}

// Live validation on input
[nameInput, emailInput, passwordInput].forEach(field => {
  field.addEventListener("input", () => {
    clearError(field);
    successMsg.style.display = "none";
  });
});

// Submit validation
form.addEventListener("submit", (event) => {
  event.preventDefault(); // always block first

  let isValid = true;

  // Validate Name
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
    isValid = false;
  }

  // Validate Email
  if (!emailInput.value.includes("@")) {
    showError(emailInput, "Email must contain '@'");
    isValid = false;
  }

  // Validate Password
  if (passwordInput.value.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters");
    isValid = false;
  }

  // Success
  if (isValid) {
    successMsg.textContent = "Form Submitted Successfully!";
    successMsg.style.display = "block";
    form.reset();
  }

  console.log("Form validated. Success =", isValid);
});