// Multi-Step Form with Validation (3 Steps)
// HTML scaffold expected:
// <div class="step" id="step-1"> <input id="name"> <button id="next-1">Next</button> </div>
// <div class="step" id="step-2"> <input id="email"> <button id="back-2">Back</button><button id="next-2">Next</button> </div>
// <div class="step" id="step-3"> <input id="password"> <button id="back-3">Back</button><button id="finish">Finish</button> </div>
// <div id="summary"></div>

'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const steps = [
    document.getElementById('step-1'),
    document.getElementById('step-2'),
    document.getElementById('step-3')
  ];

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passInput = document.getElementById('password');
  const summaryBox = document.getElementById('summary');

  let current = 0;
  showStep(current);

  function showStep(i) {
    steps.forEach((s, index) => {
      s.style.display = index === i ? 'block' : 'none';
    });
  }

  // Step 1 → Step 2
  document.getElementById('next-1').addEventListener('click', () => {
    if (nameInput.value.trim().length === 0) {
      alert('Name is required');
      return;
    }
    current = 1;
    showStep(current);
  });

  // Step 2 → Step 3
  document.getElementById('next-2').addEventListener('click', () => {
    if (!emailInput.value.includes('@')) {
      alert('Enter valid email');
      return;
    }
    current = 2;
    showStep(current);
  });

  // Back buttons
  document.getElementById('back-2').addEventListener('click', () => {
    current = 0;
    showStep(current);
  });
  document.getElementById('back-3').addEventListener('click', () => {
    current = 1;
    showStep(current);
  });

  // Finish
  document.getElementById('finish').addEventListener('click', () => {
    if (passInput.value.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    // Show summary
    summaryBox.innerHTML = `
      <h3>Form Summary</h3>
      <p><strong>Name:</strong> ${nameInput.value}</p>
      <p><strong>Email:</strong> ${emailInput.value}</p>
      <p><strong>Password:</strong> ${passInput.value}</p>
    `;
    summaryBox.style.display = 'block';

    steps.forEach(step => (step.style.display = 'none'));
  });
});