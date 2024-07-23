function myInstanceOf (left, right) {
  // 用来测试一个对象是否是某个构造函数的实例
  let proto = Object.getPrototypeOf(left) // 获取对象的原型
  prototype = right.prototype
  while(true) {
    if (!proto) {
      return false
    }
    if (proto === prototype) {
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
}

// console.log(myInstanceOf(1,2))
// console.log(myInstanceOf(1,true))
// console.log(myInstanceOf(1,'abs'))
// console.log(myInstanceOf({},{a: 111}))

class Animal {}
class Dog extends Animal {}

let dog = new Dog();
console.log(myInstanceOf(dog, Dog)); // 应该返回 true
console.log(myInstanceOf(dog, Animal)); // 应该返回 true
console.log(myInstanceOf(dog, Object)); // 应该返回 true
console.log(myInstanceOf(dog, String)); // 应该返回 false