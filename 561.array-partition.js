/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b) => a - b);
    let ans = 0;
    for(let i = 0; i < nums.length ; i += 2) {
        ans += Math.min(nums[i], nums[i+1]);
    }
    return ans;
};

console.log(arrayPairSum([1,4,3,2]))
console.log(arrayPairSum([6,2,6,5,1,2]))