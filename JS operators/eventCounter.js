let count = 0;

function increment() {
    count++;
    console.log("Count =", count);

    function logInside() {
        console.log("Nested Function Count =", count);
    }
    logInside();
}

function decrement() {
    count--;
    console.log("Count =", count);

    function logInside() {
        console.log("Nested Function Count =", count);
    }
    logInside();
}

// Simulated "clicks"
increment();
increment();
decrement();
