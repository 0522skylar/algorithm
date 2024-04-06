/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {
  let stack = [Number.MAX_VALUE]
  
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    while(stack[stack.length - 1] < arr[i]) {
      
      res += stack.pop() * Math.min(arr[i], stack[stack.length - 1])
      console.log(res, 1)
    }
    stack.push(arr[i])
  }
  while(stack.length > 2) {
    res += stack.pop() * stack[stack.length - 1]
  }
  return res
};

// console.log(mctFromLeafValues([6,2,4])) // 32
console.log(mctFromLeafValues([1,2,3,4])) // 20
console.log(mctFromLeafValues([1,2,3,4,5])) // 40