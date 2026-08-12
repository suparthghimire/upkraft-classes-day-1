// I want to run a piece of code after 2 seconds delay
// We can use setTimeout function to achieve this
// The callback fn of set timeout is stored in
// Macro task queue and will be executed after 2 seconds delay
// setTimeout(() => {
//   console.log("Set timeout, 2s");
// }, 2000); // 2000ms = 2 seconds

// // If I want to run a piece of code every 2 seconds
// // We can use setInterval function to achieve this
// // The callback fn of set interval is stored in
// // Macro task queue and will be executed every 2 seconds delay
// setInterval(() => {
//   console.log("Set interval, 2s");
// }, 2000);

console.log("Before set timeout");

setTimeout(() => {
  console.log("Set timeout, 2s");
}, 2000); // 2000ms = 2 seconds

console.log("After set timeout");
