/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  let sum = 0
  let map = new Map() // 对应第一次出现的前缀和的下标
  let ans = 0
  for (let i = 0; i < hours.length; i++) {
    sum += hours[i] > 8 ? 1 : -1
    if (sum > 0) {
      ans = Math.max(ans, i + 1)
    } else {
      if (map.has(sum - 1)) {
        ans = Math.max(ans, i - map.get(sum - 1))
      }
    }
    if (!map.has(sum)) {
      map.set(sum, i)
    }
  }
  // console.log(map)
  return ans
};

console.log(longestWPI([9, 9, 6, 0, 6, 6, 9]))
console.log(longestWPI([6, 9, 6, 0, 6, 9, 9]))
console.log(longestWPI([6, 6, 6]))