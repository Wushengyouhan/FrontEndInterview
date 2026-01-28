const person = {
  name: "Lydia Hallie",
  age: 21,
  *[Symbol.iterator]() { yield* Object.values(this) }
}

console.log([...person]); // ["Lydia Hallie", 21]
