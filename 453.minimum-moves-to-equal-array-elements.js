/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    nums.sort((a, b) => {
        return a - b;
    })
    let minVal = nums[0];
    let ans = 0;
    for(let i = 1; i < nums.length; i++) {
        ans += nums[i] - minVal;
    }
    return ans;
};
console.log(minMoves([1,2,3]))
console.log(minMoves([1,1,1]))
console.log(minMoves([1,2]))