const obj = {
  name: 'Alice'
};

function greet(...greeting) {
  console.log(`${greeting}, my name is ${this.name}`);
}

// 使用 call
greet.call(obj, 'Hello'); // 输出: Hello, my name is Alice

// 使用 apply
greet.apply(obj, ['Hi']); // 输出: Hi, my name is Alice

// 使用 bind
const greetAlice = greet.bind(obj, 'Good morning');
greetAlice(); // 输出: Good morning, my name is Alice
