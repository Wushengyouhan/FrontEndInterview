const regexp = /\d+/g;  // 匹配一个或多个数字，带有全局标志 'g' 会有一个内置属性lastIndex，会接着匹配下一个
const str = 'I have 2 apples and 3 bananas';

let result;
while ((result = regexp.exec(str)) !== null) {
  console.log(`Found ${result[0]} at index ${result.index}`);
  //Found 2 at index 7
  //Found 3 at index 20

  console.log(result);
  /*
  [
    '2',
    index: 7,
    input: 'I have 2 apples and 3 bananas',
    groups: undefined
  ]
  [
    '3',
    index: 20,
    input: 'I have 2 apples and 3 bananas',
    groups: undefined
  ]
  */
}