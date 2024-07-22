function create(obj) {
  function Fn() {}
  Fn.prototype = obj
  return new Fn()
}
// Object.create() 是 JavaScript 中的一个方法，用于创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
// 在 ES2015（ES6）之后，Object.create() 也可以用来创建具有特定属性的对象，这些属性通过第二个参数指定。
const obj1 = {
  a: 1,
  b: 2
}
const obj2 = create(obj1)
console.log(obj2.a) // 1，继承自obj1
