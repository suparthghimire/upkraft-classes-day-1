const tables = [
  { table: "A", order: "Pizza", quantity: 2 },
  { table: "B", order: "Burger", quantity: 1 },
  { table: "C", order: "Pasta", quantity: 3 },
  { table: "D", order: "Salad", quantity: 1 }
];

const makeOrder = ({ table, order, quantity }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const timestamp = new Date().toLocaleTimeString();
      const isSuccess = Math.random() > 0.5;

      if (isSuccess) {
        resolve({
          table,
          order,
          quantity,
          status: "Ready",
          message: `✅ Table ${table}: ${quantity} ${order}(s) ready!`,
          timestamp
        });
      } else {
        reject({
          table,
          order,
          quantity,
          status: "Failed",
          error: `❌ Table ${table}: Failed to make ${order}!`,
          timestamp
        });
      }
    }, 1000);
  });

function runRestaurant(orders) {
  const startTime = Date.now();
  const log = (msg) => console.log(`[${((Date.now() - startTime) / 1000).toFixed(1)}s] ${msg}`);

  log(" Restaurant opened. Cooking orders sequentially...\n");

  const results = [];

  orders
    .reduce((chain, item) => {
      return chain.then(() => {
        log(` Table ${item.table} order sent to kitchen`);
        return makeOrder(item)
          .then((res) => {
            log(res.message);
            results.push(res);
          })
          .catch((err) => {
            log(err.error);
            results.push(err);
          });
      });
    }, Promise.resolve())
    .then(() => {
      const completed = results.filter((r) => r.status === "Ready").length;
      const failed = results.length - completed;

      console.log("\n SUMMARY");
      console.log(`Total: ${results.length} | ✅ Ready: ${completed} | ❌ Failed: ${failed}`);
      console.log(`Success Rate: ${Math.round((completed / results.length) * 100)}%\n`);
    });
}

runRestaurant(tables);