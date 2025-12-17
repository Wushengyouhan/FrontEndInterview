// 将数字字符串化为有效的 JSON，然后将 JSON 字符串解析为 JavaScript 值：
const jsonNumber = JSON.stringify(4) // '4'
console.log(JSON.parse(jsonNumber)) // 4

// 将数组值字符串化为有效的 JSON，然后将 JSON 字符串解析为 JavaScript 值：
const jsonArray = JSON.stringify([1, 2, 3]) // '[1, 2, 3]'
console.log(JSON.parse(jsonArray)) // [1, 2, 3]

// 将对象字符串化为有效的 JSON，然后将 JSON 字符串解析为 JavaScript 值：
const jsonObject = JSON.stringify({ name: "Lydia" }) // '{"name":"Lydia"}'
console.log(JSON.parse(jsonObject)) // { name: 'Lydia' }