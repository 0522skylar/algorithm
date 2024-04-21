/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let ans = 0;
  let ru = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i++) {
    ru = Math.min(ru, prices[i]);
    ans = Math.max(ans, prices[i] - ru);
  }
  return ans;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 5
console.log(maxProfit([7,6,4,3,1])) // 0