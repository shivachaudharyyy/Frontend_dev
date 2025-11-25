"use strict";

/* Q8 - Movie Ticket Booking System
   - MovieTicket class: movieName, seatNo, price
   - OnlineTicket extends MovieTicket: adds convenienceFee and getTotalAmount()
   - Add printTicket() to MovieTicket.prototype and call it from OnlineTicket instances
*/

// Base class
class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

// Add prototype method printTicket()
MovieTicket.prototype.printTicket = function() {
  console.log(`--- Ticket ---\nMovie: ${this.movieName}\nSeat: ${this.seatNo}\nPrice: ₹${this.price.toFixed(2)}`);
};

// Derived class
class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee = 0) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

// Testing
const ot1 = new OnlineTicket("Interstellar", "A12", 350, 30);
const ot2 = new OnlineTicket("The Matrix", "B7", 250, 20);

console.log("Online Ticket 1 total:", ot1.getTotalAmount());
console.log("Online Ticket 2 total:", ot2.getTotalAmount());

// Calling prototype method printTicket() from OnlineTicket instances
ot1.printTicket();
console.log(`Total (with convenience fee): ₹${ot1.getTotalAmount()}`);

ot2.printTicket();
console.log(`Total (with convenience fee): ₹${ot2.getTotalAmount()}`);

// Demonstrate prototype chain: instanceof checks
console.log('ot1 instanceof OnlineTicket', ot1 instanceof OnlineTicket);
console.log('ot1 instanceof MovieTicket', ot1 instanceof MovieTicket);

// The printTicket method lives on MovieTicket.prototype but is available to OnlineTicket objects through the prototype chain.