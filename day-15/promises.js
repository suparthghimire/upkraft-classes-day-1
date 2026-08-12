// Promise is a class in js
// We can instantiate a promise using the new keyword

// Promises are used to handle async opr in js
// They take more priority than callbacks and timers
// They are much more redable
// They are also preferred over callback function
const promise = new Promise((resolve, reject) => {
  resolve("Promise is resolved");
  //   reject(new Error("Promise is rejected")); // Rejecting the promise with an error
  // Resolve is called when the promise is fulfilled -- success
  // Reject is called when promise is rejected -- Failure
});

promise
  .then((value) => {
    console.log("RESOLVED:", value);
  })
  .catch((error) => {
    console.log("REJECTED:", error);
  })
  .finally(() => {
    // This will run regardless of whether
    // the promise is resolved or rejected
    console.log("Promise is settled");
  });
