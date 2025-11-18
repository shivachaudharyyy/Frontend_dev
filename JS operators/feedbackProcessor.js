let feedback = "Great product! Fast delivery and amazing sound quality!";

// Word count
let words = feedback.split(" ").length;

// Check negativity
let hasNegative = feedback.toLowerCase().includes("bad") ||
                  feedback.toLowerCase().includes("poor");

console.log("Word Count:", words);

if (hasNegative) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}
