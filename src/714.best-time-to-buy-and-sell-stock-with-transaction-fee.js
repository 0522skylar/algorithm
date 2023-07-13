/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let n = prices.length;
    if(n < 2) {
        return 0;
    }
    let dp1 = new Array(n).fill(0) // 第i天手上有股票时的最大收益
    let dp2 = new Array(n).fill(0) // 第i天手上无股票时的最大收益
    dp1[0] = -prices[0];
    for(let i = 1; i < n; i++) {
        dp1[i] = Math.max(dp1[i-1], dp2[i-1] - prices[i])
        dp2[i] = Math.max(dp2[i-1], dp1[i-1] + prices[i] - fee)
    }
    console.log(dp1, dp2)
    return dp2[n-1]
};
console.log(maxProfit( [1, 3, 2, 8, 4, 9], 2))
console.log(maxProfit( [1,3,7,5,10,3], 3))
