"use strict";

function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.5 ? reject("Order failed") : resolve("Order successful");
    }, 1000);
  });
}

async function processOrder() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      return res;
    } catch (err) {
      console.log(`Attempt ${attempt}: Failed`);
      if (attempt === 3) throw new Error("Order could not be processed");
    }
  }
}

processOrder().catch(err => console.log("❌", err.message));
