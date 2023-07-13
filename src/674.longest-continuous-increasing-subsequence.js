/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let ans = 1;
    let count = 1;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > nums[i-1]) {
            count ++;
        }
        else {
            ans = Math.max(ans, count)
            count = 1;
        }
    }
    ans = Math.max(ans, count)
    return ans;
};
console.log(findLengthOfLCIS([1,3,5,4,7]))
console.log(findLengthOfLCIS([2,2,2,2,2]))

console.log(findLengthOfLCIS([1,3,5,7]))