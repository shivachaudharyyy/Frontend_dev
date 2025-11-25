class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    this.price = this.price - (this.price * percent / 100);
  }

  getDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
  }
}

// Create products
const products = [
  new Product(1, "Laptop", 50000, "Electronics"),
  new Product(2, "Shoes", 1200, "Fashion"),
  new Product(3, "Book", 500, "Education")
];

// Apply discount
products[0].applyDiscount(10);

// Filter products > 1000
const expensiveProducts = products.filter(p => p.price > 1000);
console.log(expensiveProducts.map(p => p.getDetails()).join("\n"));