let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Try different test cases
isDoorLocked = false;
console.log("Test Case 2 =>", isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside ? "Secure" : "Unsafe");
