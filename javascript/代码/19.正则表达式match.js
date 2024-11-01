let str = "I love JavaScript";
let result = str.match(/Java(Script)/);

console.log( result[0] );     // JavaScript（完全匹配）
console.log( result[1] );     // Script（第一个分组）
console.log( result.length ); // 2

// 其他信息：
console.log( result.index );  // 7（匹配位置）
console.log( result.input );  // I love JavaScript（源字符串

console.log( result )

/*
[
  'JavaScript',
  'Script',
  index: 7,
  input: 'I love JavaScript',
  groups: undefined
]
*/

let str2 = "I love JavaScript, JavaScript is awsome"
let result2 = str2.match(/Java(Script)/g);
console.log( result2 )

