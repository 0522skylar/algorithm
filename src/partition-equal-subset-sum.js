/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    if(sum & 1) {
        return false;
    }
    console.log(sum >> 1 + 1, sum / 2 + 1, sum >> 2)// 2 5  2
    // +优先级高于右移
    let dp = new Array(nums.length).fill(false).map(() => new Array(sum /2 + 1).fill(false));
    console.log(dp);
    for(let i = 0; i < nums.length; i++) {
        dp[i][0] = true;
    }
    for(let i = 1; i < nums.length; i++) {
        for(let j = 1; j <= sum / 2; j++) {
            if(j < nums[i]) {
                dp[i][j] = dp[i-1][j];
            }
            else {
                dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i]]
            }
        }
    }
    console.log(dp);

    return dp[nums.length - 1][sum/2];
};

console.log(canPartition([1,2,5]));
// console.log(canPartition([1,2,3,4]));

function dfs(nums) {//TEL
    let ans = false
    const sum = nums.reduce((a, b) => a + b, 0)
    if(sum % 2) return false
    nums.sort((a, b) => b - a)
    function backTrack(arr, i, sum1, target) {
        if(sum1 == target) ans = true
        if(sum1 - arr[i] == target) ans = true
        if(sum1 < target) return
        if (!ans) {
            for(let j = i + 1; j < arr.length; j++) {
                backTrack(arr, j, sum1 - arr[i], target)
            }
        }
    }
    backTrack(nums, 0, sum, sum / 2)
    return ans
};

function test2(nums) {// [1, 2, 5]
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    if(sum & 1) {
        return false;
    }
    let dp = new Array(sum / 2 + 1).fill(false);
    for(let i = 0; i < nums.length; i++) {
        for(let s = sum; s >= nums[i]; s--) {
            if(!i) {
                dp[s] = (nums[i] === s);
            }
            else {
                dp[s] = dp[s] || dp[s-nums[i]];
            }
        }
    }
    return dp[sum];
}