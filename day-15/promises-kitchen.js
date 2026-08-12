// THis function, is promising
// THe caller
// That it will respond back
// Once it knows whether the food can be made
// Or it cannot be made
function kitchen(timeToMakeFood, order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() >= 0.5) {
        resolve({
          message: `Your food is ready`,
          order,
        });
      } else {
        reject(new Error(`Sorry, we cannot make your food: ${order}`));
      }
    }, timeToMakeFood);
  });
}

const table1Order = kitchen(2000, "Pasta")
  .then((orderData) => {
    return orderData;
    // console.log(orderData.message, orderData.order);
  })
  .catch((error) => {
    console.log(error.message);
  });

console.log(table1Order);

// async and await

// table1Order.then((orderData) => {
//   console.log(orderData.message, orderData.order);
// });
// const table2Order = kitchen(3000, "Pizza")
//   .then((orderData) => {
//     console.log(orderData.message, orderData.order);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// const table3Order = kitchen(2000, "Momo")
//   .then((orderData) => {
//     console.log(orderData.message, orderData.order);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// console.log(table1Order, table2Order, table3Order);
