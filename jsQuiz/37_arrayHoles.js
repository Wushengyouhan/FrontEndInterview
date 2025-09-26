const numbers = [1, 2, 3]
numbers[10] = 11
console.log(numbers)
console.log(numbers.length)
console.log(numbers[5]) // empty slot
console.log(numbers[10]) // has value
console.log('5' in numbers) // false - empty slot
console.log('10' in numbers) // true - has value