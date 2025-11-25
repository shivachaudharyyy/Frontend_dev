"use strict";

/* Q3. Product Discount System
   - Product constructor with name & price
   - Prototype method applyDiscount(percent) returns discounted price
   - Create 3 products and apply discounts
   - Demonstrate abstraction simplifying operations
*/

// Constructor function for Product
function Product(name, price) {
  this.name = name;
  this.price = price;
}

// Prototype method to apply a discount percentage and return the new price
Product.prototype.applyDiscount = function(percent) {
  if (typeof percent !== 'number' || percent < 0 || percent > 100) {
    throw new Error('Invalid discount percent');
  }
  const discountedPrice = this.price * (1 - percent / 100);
  // Return rounded to 2 decimal places for presentation
  return Math.round(discountedPrice * 100) / 100;
};

// Creating products
const prod1 = new Product('Wireless Mouse', 799);
const prod2 = new Product('Mechanical Keyboard', 3499);
const prod3 = new Product('USB-C Hub', 1299);

// Applying discounts
try {
  console.log(`${prod1.name} original: ₹${prod1.price}, after 10% discount: ₹${prod1.applyDiscount(10)}`);
  console.log(`${prod2.name} original: ₹${prod2.price}, after 25% discount: ₹${prod2.applyDiscount(25)}`);
  console.log(`${prod3.name} original: ₹${prod3.price}, after 5% discount: ₹${prod3.applyDiscount(5)}`);
} catch (err) {
  console.error('Discount error:', err.message);
}

// Demonstrating abstraction:
// The applyDiscount method hides the calculation details. The caller only specifies the percent
// and receives the final price. This keeps pricing logic centralized and easier to maintain.

// Example: bulk discount operation using abstraction
const products = [prod1, prod2, prod3];
function applySeasonalDiscount(productList, percent) {
  return productList.map(p => ({ name: p.name, oldPrice: p.price, newPrice: p.applyDiscount(percent) }));
}

console.log('\nSeasonal discount (15% on all products):');
console.table(applySeasonalDiscount(products, 15));