/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
  let temp = 0
  for (let i = 1; i <= k; i++) {
    temp = (temp * 10 + 1) % k
    if (temp === 0) {
      return i
    }
  }
  return -1
};
console.log(smallestRepunitDivByK(5))
console.log(smallestRepunitDivByK(7))// 111111
console.log(smallestRepunitDivByK(9))