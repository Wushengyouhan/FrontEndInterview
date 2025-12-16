const emojis = ['✨', '🥑', '😍']

console.log('=== 原始数组 ===')
console.log('emojis:', emojis)
console.log('')

// map: 不改变原数组，返回新数组
console.log('=== map() ===')
const mapResult = emojis.map(x => x + '✨')
console.log('返回值:', mapResult)
console.log('原数组:', emojis)
console.log('改变原数组: 否')
console.log('')

// filter: 不改变原数组，返回新数组
console.log('=== filter() ===')
const filterResult = emojis.filter(x => x !== '🥑')
console.log('返回值:', filterResult)
console.log('原数组:', emojis)
console.log('改变原数组: 否')
console.log('')

// find: 不改变原数组，返回找到的元素
console.log('=== find() ===')
const findResult = emojis.find(x => x !== '🥑')
console.log('返回值:', findResult)
console.log('原数组:', emojis)
console.log('改变原数组: 否')
console.log('')

// reduce: 不改变原数组，返回累积值
console.log('=== reduce() ===')
const reduceResult = emojis.reduce((acc, cur) => acc + '✨')
console.log('返回值:', reduceResult)
console.log('原数组:', emojis)
console.log('改变原数组: 否')
console.log('')

// slice: 不改变原数组，返回新数组（注意：slice只接受2个参数，第三个参数会被忽略）
console.log('=== slice() ===')
const sliceResult = emojis.slice(1, 2, '✨')
console.log('返回值:', sliceResult)
console.log('原数组:', emojis)
console.log('改变原数组: 否')
console.log('注意: slice(1, 2, "✨") 第三个参数会被忽略')
console.log('')

// splice: 改变原数组，返回被删除的元素
console.log('=== splice() ===')
const emojisCopy = [...emojis]  // 复制数组，因为 splice 会改变原数组
const spliceResult = emojisCopy.splice(1, 2, '✨')
console.log('返回值:', spliceResult)
console.log('原数组（已改变）:', emojisCopy)
console.log('改变原数组: 是')
console.log('')

console.log('=== 总结 ===')
console.log('改变原数组的方法: splice()')
console.log('不改变原数组的方法: map(), filter(), find(), reduce(), slice()')
