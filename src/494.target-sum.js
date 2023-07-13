/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let ans = 0;
    const dfs = (len, sum) => {
        if(len === nums.length) {
            if(sum === target) {
                ans++;
            }
            return ;
        }
        dfs(len + 1, sum - nums[len]);
        dfs(len + 1, sum + nums[len]);
    }
    dfs(0, 0);
    
    return ans;
};
console.log(findTargetSumWays([1,1,1,1,1], 3))
console.log(findTargetSumWays([1], 1))