/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    //dp[j]：凑成总金额j的货币组合数为dp[j]
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for(let i = 0; i < coins.length; i++) {
        for(let j = coins[i]; j <= amount; j++) {
            dp[j] += dp[j - coins[i]];
        }
    }
    return dp[amount]
};

console.log(change(5, [1,2,5]))