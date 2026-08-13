// import { resData } from "./api/json-placeholder.js";

const api = "https://jsonplaceholder.typicode.com/todos";

// async
// await

async function getData() {
  try {
    const res = await fetch(api);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
  }
}

async function main() {
  const jsonData = await getData();
  console.log(jsonData);
}

// What will this be?
main();
