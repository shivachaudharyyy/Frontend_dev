"use strict";

/* File 7: mouseTracker.js
   Task 7 – Detect Mouse Path & Coordinates Logger
   ✅ Track mouse movement inside box (400×400)
   ✅ Show live clientX, clientY
   ✅ On double‑click → drop a red dot at clicked position
*/

const box = document.querySelector("#trackerBox");
const coordDisplay = document.querySelector("#coords");

// Show live coordinates
box.addEventListener("mousemove", (event) => {
  coordDisplay.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
});

// Drop red dot on double‑click
box.addEventListener("dblclick", (event) => {
  const dot = document.createElement("div");
  dot.className = "dot";

  // Position dot relative to box
  const rect = box.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  dot.style.left = x + "px";
  dot.style.top = y + "px";

  box.appendChild(dot);

  console.log(`Dot placed at: X=${x}, Y=${y}`);
});
