"use strict";

/* File 8: customDropdown.js
   Task 8 – Custom Dropdown Using Only JavaScript
   ✅ Button toggles options
   ✅ Clicking option updates button text
   ✅ Clicking outside closes dropdown (capturing phase)
*/

const dropdownBtn = document.querySelector("#dropdownBtn");
const dropdownMenu = document.querySelector("#dropdownMenu");

// Toggle dropdown on button click
dropdownBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  dropdownMenu.classList.toggle("show");
});

// When clicking an option → update button text
dropdownMenu.addEventListener("click", (event) => {
  if (event.target.matches("li")) {
    dropdownBtn.textContent = event.target.textContent;
    dropdownMenu.classList.remove("show");
    console.log(`Selected option: ${event.target.textContent}`);
  }
});

// Close dropdown when clicking outside (capturing phase)
document.addEventListener(
  "click",
  () => {
    dropdownMenu.classList.remove("show");
  },
  true // capturing mode
);