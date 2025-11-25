"use strict";

/* File 6: tableFilter.js
   Task 6 – Real-Time Table Filter Using input Event
   ✅ Filters rows as user types
   ✅ Case-insensitive search
   ✅ Shows "No results found" when nothing matches
*/

const searchInput = document.querySelector("#searchBox");
const tableRows = document.querySelectorAll("#studentTable tbody tr");
const noResultMsg = document.querySelector("#noResults");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();
  let matchCount = 0;

  tableRows.forEach(row => {
    const rowText = row.textContent.toLowerCase();

    if (rowText.includes(query)) {
      row.style.display = "";
      matchCount++;
    } else {
      row.style.display = "none";
    }
  });

  if (matchCount === 0) {
    noResultMsg.style.display = "block";
  } else {
    noResultMsg.style.display = "none";
  }

  console.log(`Search query: "${query}", Matches: ${matchCount}`);
});