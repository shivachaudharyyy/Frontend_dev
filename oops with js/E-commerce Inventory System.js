"use strict";

// Q6 - E-Commerce Inventory System
// Functions using array methods: filter, sort, reduce, grouping

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 5 },
  { id: 2, name: "Mouse", category: "Electronics", price: 800, stock: 40 },
  { id: 3, name: "Shampoo", category: "Personal Care", price: 250, stock: 10 },
  { id: 4, name: "Notebook", category: "Stationery", price: 50, stock: 2 },
  { id: 5, name: "Pen", category: "Stationery", price: 10, stock: 200 }
];

// 1. Get Low Stock Products (stock < 10)
function getLowStockProducts(items) {
  return items.filter(p => p.stock < 10);
}

// 2. Sort Products by Price (ascending)
function sortProductsByPrice(items) {
  return [...items].sort((a, b) => a.price - b.price);
}

// 3. Calculate Total Inventory Value using reduce
function calculateTotalInventoryValue(items) {
  return items.reduce((total, item) => total + item.price * item.stock, 0);
}

// 4. Group by Category using reduce
function groupByCategory(items) {
  return items.reduce((grouped, item) => {
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push(item);
    return grouped;
  }, {});
}

// Testing
console.log("Low Stock Products:", getLowStockProducts(products));
console.log("Sorted by Price:", sortProductsByPrice(products));
console.log("Total Inventory Value:", calculateTotalInventoryValue(products));
console.log("Grouped by Category:", groupByCategory(products));
