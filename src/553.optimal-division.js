/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
    // nums.sort((a, b) => b - a);
    if(nums.length === 1) {
        return '' + nums[0]
    }
    if(nums.length === 2) {
        return nums[0] + '/' + nums[1]
    }
    let ans = '(' + nums[1];
    // console.log(nums)
    for(let i = 2; i < nums.length; i++) {
        ans += '/' + nums[i];
    }
    
    // console.log(ans)
    return nums[0] + '/' + ans + ')';
};

console.log(optimalDivision([1000,100,10,2]))
console.log(optimalDivision([2,3,4])) // "2/(3/4)"
console.log(optimalDivision([3,2]))