/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != nums[i+1]) {
            return nums[i];
        }
        else {
            i++;
        }
    }
};

console.log(singleNonDuplicate( [1,1,2,3,3,4,4,8,8]))
console.log(singleNonDuplicate(  [3,3,7,7,10,11,11]))