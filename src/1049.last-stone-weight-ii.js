/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
  let dp = new Array(150001).fill(0)
  let sum = 0
  for (let i = 0; i < stones.length; i++) {
    sum += stones[i]
  }
  let target = Math.floor(sum / 2)
  for (let i = 0; i < stones.length; i++) {
    for (let j = target; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
    }
  }
  // console.log(dp)
  return sum - dp[target] - dp[target]
};

console.log(lastStoneWeightII([2,7,4,1,8,1])) // 1
console.log(lastStoneWeightII([31,26,33,21,40])) // 5