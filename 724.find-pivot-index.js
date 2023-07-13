/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = nums.reduce((pre, next) => pre + next);
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        // console.log(sum , total - sum)
        if(sum === total - sum - nums[i]) {
            return i;
        }
        sum += nums[i]
    }
    return -1
};
console.log(pivotIndex( [1, 7, 3, 6, 5, 6]))
console.log(pivotIndex( [1, 2, 3]))
console.log(pivotIndex( [2, 1, -1]))