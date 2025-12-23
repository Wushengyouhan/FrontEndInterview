const myMap = new Map()
const myFunc = () => 'greeting'

myMap.set(myFunc, 'Hello world!')

//1
console.log(myMap.get('greeting'));
//2
console.log(myMap.get(myFunc));
//3
console.log(myMap.get(() => 'greeting'));