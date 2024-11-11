const math = require('mathjs');

// 使用 BigNumber 处理 0.1 和 0.2
const a = math.bignumber(0.1);
const b = math.bignumber(0.2);

// 进行加法运算
const result = math.add(a, b);
console.log(typeof result);  //object

console.log(math.number(result) === 0.3); //true
