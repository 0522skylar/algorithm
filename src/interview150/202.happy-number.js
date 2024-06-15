/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let count = 1000
  while(count > 1) {
    count--
    let arr = n.toString().split('')
    let ans = 0
    for (let i = 0; i < arr.length; i++) {
      ans += Number(arr[i]) * Number(arr[i])
    }
    if (ans === 1) {
      return true
    } else {
      n = ans
    }
  }
  return false
};