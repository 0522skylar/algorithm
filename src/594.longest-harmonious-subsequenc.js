/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    nums.sort((a, b) => a - b)
    let ans = 0;
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        while(nums[i] - nums[count] > 1) {
            count ++;
        }
        if(nums[i] - nums[count] === 1) {
            ans = Math.max(ans, i - count + 1);
        }
    }
    return ans;
};

console.log(findLHS([1,3,2,2,5,2,3,7]))
console.log(findLHS([1,2,3,4]))
console.log(findLHS([1,1,1,1]))