"use strict";

/* File 4: promoCodeValidator.js
   Task 4 – Theme Switcher Using Attribute Manipulation
   ✅ Three themes: light, dark, blue
   ✅ Buttons apply theme using setAttribute()
   ✅ Store theme in custom attribute: data-theme="dark"
*/

// Select all theme buttons and body
themeButtons.addEventListener("click", (event) => {
  if (event.target.matches("button")) {
    const selectedTheme = event.target.dataset.theme;

    // Apply theme by setting attribute on body
    document.body.setAttribute("data-theme", selectedTheme);

    console.log(`Theme changed to: ${selectedTheme}`);
  }
});