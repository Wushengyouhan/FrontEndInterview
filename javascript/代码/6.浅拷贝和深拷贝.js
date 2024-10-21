let obj = {

};
obj.friend = obj



function deepClone(obj, hash = new WeakMap()) {
  //递归出口: 基本类型直接返回
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  //递归出口2: 避免循环引用
  if (hash.has(obj)) {
    return hash.get(obj)
  }

  //根据obj的类型初始化一个克隆对象
  let cloneObj = Array.isArray(obj) ? [] : {}
  //将原对象和它的副本存储到 WeakMap 中，防止循环引用
  hash.set(obj, cloneObj)

  //遍历属性
  for (let key in obj) {
    //这个是为了只遍历对象本身的属性，而不会去管原型链上的属性  
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }

  return cloneObj
}

let b = deepClone(obj)


console.log(b);
console.log(obj);
