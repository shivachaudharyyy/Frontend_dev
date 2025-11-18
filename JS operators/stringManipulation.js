let product = " wireless headphones PRO ";

// Step 1: Trim
let clean = product.trim();

// Step 2: Lowercase
clean = clean.toLowerCase();

// Step 3: Capitalize each word
clean = clean
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Step 4: Replace pro → Pro Edition
clean = clean.replace("Pro", "Pro Edition");

console.log("Clean Title:", clean);
console.log("Length:", clean.length);
