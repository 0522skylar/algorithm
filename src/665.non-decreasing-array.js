/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let diff = 0;
    if(nums[0] > nums[1]) {
        nums[0] = nums[1];
        diff++;
    }
    for(let i = 1; i < nums.length - 1; i++) {
        if(nums[i] > nums[i + 1]) {
            console.log(nums[i])
            diff++;
            if(diff > 1) {
                return false;
            }
            let left = nums[i-1];
            if(left > nums[i+1]) {
                nums[i+1] = nums[i];
            } else {
                nums[i] = left;
            }
        }
    }
    
    
    return true;
};

console.log(checkPossibility([4,2,3])) // t
console.log(checkPossibility([4,2,1])) // f
console.log(checkPossibility([3,4,2,3])) // false
console.log(checkPossibility([5,7,1,8])) // t
