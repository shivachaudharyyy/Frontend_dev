"use strict";

/* Q2. Online Food Ordering (map + Error Handling)
   - calculateBill(orderItems)
   - Uses map() to extract prices
   - Uses reduce() to calculate total
   - Throws error if invalid item ordered
   - Handled using try/catch
*/

// Menu with item prices
const menu = {
  pizza: 200,
  burger: 120,
  pasta: 150,
  coffee: 80,
  fries: 70
};

function calculateBill(orderItems) {
  try {
    // Validate & fetch prices using map()
    const prices = orderItems.map(item => {
      if (!menu[item]) {
        throw new Error(`Item not available: ${item}`);
      }
      return menu[item];
    });

    // Calculate total using reduce()
    const total = prices.reduce((sum, price) => sum + price, 0);

    console.log("Order:", orderItems.join(", "));
    console.log("Prices:", prices);
    console.log("Total Bill:", total);
    console.log("---------------------------");
  }
  catch (error) {
    console.error("Error processing order:", error.message);
  }
}

// Testing
calculateBill(["pizza", "coffee", "fries"]);
calculateBill(["burger", "pasta"]);
calculateBill(["pizza", "invalidItem", "coffee"]);
