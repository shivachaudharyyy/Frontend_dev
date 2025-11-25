"use strict";

/* File 5: imageGalleryModal.js
   Task 5 – Image Gallery With Modal Preview
   ✅ Click image → open modal with larger version
   ✅ Click outside modal → close
   ✅ stopPropagation() to avoid closing when clicking inside
*/

// Select grid, modal, image display
const galleryImages = document.querySelectorAll(".gallery img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal img");
const modalContent = document.querySelector(".modal-content");

// Open modal with clicked image
galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.add("show");
    modalImg.src = img.src; // show big version
    console.log("Image opened in modal:", img.src);
  });
});

// Close when clicking outside modal
modal.addEventListener("click", () => {
  modal.classList.remove("show");
  console.log("Modal closed");
});

// Prevent closing when clicking inside modal content
modalContent.addEventListener("click", (event) => {
  event.stopPropagation();
});