/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums.sort((a, b) => a - b);
    let ans = 0;
    for(let i = nums.length - 1; i >= 2; i--) {
        let k = 0; 
        let j = i - 1;
        while(k < j) {
            if(nums[k] + nums[j] > nums[i]) {
                ans += j - k;
                j --;
            }
            else {
                k ++;
            }
        }
    }

    return ans;
};


console.log(triangleNumber([2,2,3,4]))
console.log(triangleNumber([4,2,3,4]))