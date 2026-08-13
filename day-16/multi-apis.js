// const api1 = "https://jsonplaceholder.typicode.com/todos/1";
// const api2 = "https://jsonplaceholder.typicode.com/todos/2";
// const api3 = "https://jsonplaceholder.typicode.com/todos/3";
// const api4 = "https://jsonplaceholder.typicode.com/todos/4";
// const api5 = "https://jsonplaceholder.typicode.com/todos/5";
const apis = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
];

async function fetchData(api, shouldFail = false) {
  if (shouldFail) {
    throw new Error(`API call failed for ${api}`);
  }
  const res = await fetch(api);
  const json = await res.json();

  return json;
}

async function allApiCalls() {
  try {
    // const $api1Data = fetchData(api1, false);
    // const $api2Data = fetchData(api2, false);
    // const $api3Data = fetchData(api3, false);
    // const $api4Data = fetchData(api4, false);
    // const $api5Data = fetchData(api5, false);

    const resolvedPromises = Promise.all(
      apis.map((api) => fetchData(api, false)),
    );

    // const [api1Data, api2Data, api3Data, api4Data, api5Data] =
    //   await Promise.all([
    //     $api1Data,
    //     $api2Data,
    //     $api3Data,
    //     $api4Data,
    //     $api5Data,
    //   ]);
    // const resolvedResoinse = await Promise.allSettled([
    //   $api1Data,
    //   $api2Data,
    //   $api3Data,
    //   $api4Data,
    //   $api5Data,
    // ]);

    // const resolvedResoinse = await Promise.race([
    //   $api1Data,
    //   $api2Data,
    //   $api3Data,
    //   $api4Data,
    //   $api5Data,
    // ]);

    const x = await Promise.reject(new Error("This is a rejected promise"));
    console.log({ x });

    const resolvedResoinse = await Promise.any([
      $api1Data,
      $api2Data,
      $api3Data,
      $api4Data,
      $api5Data,
    ]);

    console.log(resolvedResoinse);
  } catch (error) {
    console.log(error);
  }
}

allApiCalls();
