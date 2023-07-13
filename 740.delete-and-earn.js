/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    let arr = new Array(10001).fill(0);
    for(let i = 0; i < nums.length; i++) {
        arr[nums[i]] += nums[i]
    }

    let dp = new Array(10001).fill(0)
    dp[0] = 0;
    dp[1] = arr[1]
    for(let i = 2; i < arr.length; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + arr[i])
    }
    return dp[dp.length - 1]
};
console.log(deleteAndEarn([3,4,2]))
console.log(deleteAndEarn([2,2,3,3,3,4]))