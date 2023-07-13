/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    if(nums.length == 0) {
        return 0
    }
    let dp = new Array(nums.length).fill(1);
    let comb = new Array(nums.length).fill(1);
    let max = 1;
    let res = 0;
    for(let i = 1; i < dp.length; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                if(dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    comb[i] = comb[j];
                } else if(dp[j] + 1 === dp[i]) {
                    comb[i] += comb[j]
                }
            }
        }
        max = Math.max(max, dp[i]);
    }

    for(let i = 0; i < nums.length; i++) {
        if(dp[i] == max) {
            res += comb[i]
        }
    }
    return res;
};
console.log(findNumberOfLIS([1,1,1,1,1,1]))

console.log(findNumberOfLIS([1,3,5,4,7]))