/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
  let left = 0
  let right = 0
  for (let i = 0; i < weights.length; i++) {
    right += weights[i]
    left = Math.max(left, weights[i])
  }
  const check = (mid, weights, days) => {
    let n = weights.length
    let ot = 0
    for (let i = 0; i < n; i++) {
      ot += weights[i]
      if (ot <= mid) {
        continue
      } else {
        days--
        i--
        ot = 0
      }
    }
    return days >= 1
  }
  while(left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (check(mid, weights, days)) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
};

console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5)) // 15
console.log(shipWithinDays([3,2,2,4,1,4], 3)) // 6
console.log(shipWithinDays([1,2,3,1,1], 4)) // 3