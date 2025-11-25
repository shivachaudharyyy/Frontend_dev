"use strict";

/* Q9 – Fitness App Analytics
   Methods required:
   ● getActiveUsers() → filter()
   ● getAverageCalories() → reduce()
   ● getUserSummary() → map()
   ● Throw error if dataset empty
*/

class FitnessAnalytics {
  constructor(data) {
    if (!data || data.length === 0) {
      throw new Error("Dataset cannot be empty.");
    }
    this.data = data;
  }

  getActiveUsers() {
    return this.data.filter(user => user.steps > 7000);
  }

  getAverageCalories() {
    const total = this.data.reduce((sum, user) => sum + user.calories, 0);
    return total / this.data.length;
  }

  getUserSummary() {
    return this.data.map(user => `User ${user.user} walked ${user.steps} steps and burned ${user.calories} calories.`);
  }
}

// Test dataset
const workoutData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

try {
  const analytics = new FitnessAnalytics(workoutData);

  console.log("Active Users:", analytics.getActiveUsers());
  console.log("Average Calories:", analytics.getAverageCalories());
  console.log("User Summary:");
  console.log(analytics.getUserSummary());

} catch (error) {
  console.error("Error:", error.message);
}