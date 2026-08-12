async function B() {
  // Microtask queue
  await Promise.resolve();
}

function A() {
  // Call stack
  console.log("2");
}

// Add to call stack
console.log("1");

// Adds to macrotask queue
setTimeout(() => {
  console.log("5");
}, 0);

// Add to microtask queue
Promise.resolve().then(() => {
  console.log("3");
});

// Call stack
A();

// Add to microtask queue
B().then(() => {
  console.log("4");
});
