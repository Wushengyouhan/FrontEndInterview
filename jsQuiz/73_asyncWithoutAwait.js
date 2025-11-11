async function getData() {
  return await Promise.resolve("I made it!");
}

const data = getData()
console.log(data);

// async function test() {
//   const data = await getData();
//   console.log(data);
// }
// test();