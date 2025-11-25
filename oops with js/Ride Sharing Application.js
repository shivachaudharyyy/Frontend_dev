"use strict";

// Q5 - Ride-Sharing Application
// -----------------------------------------------
// Classes: User, Driver (inherits User), Trip
// Includes: Error handling for invalid distance using try/catch

// Base User class
class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

// Driver inherits from User
class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle; // vehicle details
    }
}

// Trip class
class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance; // MUST be >= 0
    }

    calculateFare() {
        const ratePerKm = 12; // sample price

        if (this.distance === undefined || this.distance === null) {
            throw new Error("Distance is required.");
        }

        if (typeof this.distance !== "number" || this.distance < 0) {
            throw new Error("Invalid distance provided.");
        }

        return this.distance * ratePerKm;
    }
}

// ------------------------------------------------------
// TESTING
// ------------------------------------------------------
console.log("--- Ride Sharing App Test ---");

const driver = new Driver("Ravi", 4.9, "Honda City");
console.log("Driver:", driver);

// Valid Trip
try {
    const trip1 = new Trip("Delhi", "Noida", 15);
    console.log("Fare for trip1:", trip1.calculateFare());
} catch (error) {
    console.log("Error (trip1):", error.message);
}

// Invalid Trip: negative distance
try {
    const trip2 = new Trip("Delhi", "Gurgaon", -5);
    console.log("Fare for trip2:", trip2.calculateFare());
} catch (error) {
    console.log("Error (trip2):", error.message);
}

// Invalid Trip: missing distance
try {
    const trip3 = new Trip("Delhi", "Agra");
    console.log("Fare for trip3:", trip3.calculateFare());
} catch (error) {
    console.log("Error (trip3):", error.message);
}