/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
  let ans = 0
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] == 0) {
      ans += customers[i]
      customers[i] = 0
    }
  }
  let num = customers[0]
  let maxV = customers[0]
  for (let i = 1; i < customers.length; i++) {
    if (i < minutes) {
      num += customers[i]
    } else {
      num += customers[i] - customers[i - minutes]
    }
    maxV = Math.max(maxV, num)
  }
  return ans + maxV
};

// console.log(maxSatisfied([1,0,1,2,1,1,7,5], [0,1,0,1,0,1,0,1], 3)) // 16
// console.log(maxSatisfied([1], [0], 1))
// console.log(maxSatisfied([3], [1], 1))
// console.log(maxSatisfied([8,8], [1, 0], 2)) // 16
console.log(maxSatisfied([2,6,6,9], [0,0,1,1], 1)) // 15