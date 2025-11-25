"use strict";

const serverA = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.2) reject("Server A failed!");
    else resolve("Server A done.");
  }, 2000);
});

const serverB = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.2) reject("Server B failed!");
    else resolve("Server B done.");
  }, 3000);
});

// All servers must finish
Promise.all([serverA, serverB])
  .then(() => console.log("Deployment completed for all servers"))
  .catch(err => console.log("❌ ERROR:", err));

// First to respond
Promise.race([serverA, serverB])
  .then(res => console.log("Fastest response:", res))
  .catch(err => console.log("❌ Race error:", err));
