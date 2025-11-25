// === File: productListManager.js ===
// Live Character Counter (max 100). Changes color at thresholds; blocks typing at 0.
// HTML scaffold expected:
// <textarea id="msg" maxlength="100"></textarea>
// <div id="counter">100</div>
// <button id="reset">Reset</button>


'use strict';
document.addEventListener('DOMContentLoaded', () => {
const max = 100;
const textarea = document.getElementById('msg');
const counter = document.getElementById('counter');
const resetBtn = document.getElementById('reset');


function updateCounter() {
const remaining = max - textarea.value.length;
counter.textContent = remaining;
counter.style.color = '';
if (remaining <= 0) {
counter.style.color = 'red';
} else if (remaining <= 20) {
counter.style.color = 'orange';
}
}


textarea.addEventListener('keydown', (e) => {
const remaining = max - textarea.value.length;
// If at limit and user tries to type a printable key, prevent it
if (remaining <= 0 && !isControlKey(e)) {
e.preventDefault();
}
});


textarea.addEventListener('input', updateCounter);


resetBtn.addEventListener('click', () => {
textarea.value = '';
updateCounter();
});


// Helper: allow control keys like Backspace, Arrow keys, etc.
function isControlKey(e) {
return e.ctrlKey || e.metaKey || e.key === 'Backspace' || e.key === 'Delete' || e.key.startsWith('Arrow') || e.key === 'Tab' || e.key === 'Enter';
}


// initialize
updateCounter();
});