/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
var PredictTheWinner = function(nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    let len = nums.length;
    let dp = new Array(len).fill(1).map(() => new Array(len).fill(0));
    for(let i = 0; i < len; i++) {
        dp[i][i] = nums[i]
    }

    for(let j = 1; j < len; j++) {
        dp[j - 1][j] = Math.max(dp[j-1][j-1], dp[j][j])
    }
    for(let i = 2; i < len; i++) {
        for(let row = 0; i+ row < len; row++) {
            dp[row][row+i] = Math.max(nums[row] + Math.min(dp[row + 1][i + row - 1], dp[row+2][i+row]), 
            nums[i+row] + Math.min(dp[row][i+row-2], dp[row+1][i+row-1]));
        }
    }

    return dp[0][len - 1] >= (sum - dp[0][len - 1]);
};

*/

const PredictTheWinner = (nums) => {
    let length = nums.length;
    let dp = new Array(nums.length).fill(0);
    for (let i = 0; i < length; i++) {
        dp[i] = nums[i];
    }
    for (let i = length - 2; i >= 0; i--) {
        for (let j = i + 1; j < length; j++) {
            dp[j] = Math.max(nums[i] - dp[j], nums[j] - dp[j - 1]);
        }
    }
    console.log(dp)
    return dp[length - 1] >= 0;
}


console.log(PredictTheWinner([1,5,2]))
console.log(PredictTheWinner([1,5,233,7]))

