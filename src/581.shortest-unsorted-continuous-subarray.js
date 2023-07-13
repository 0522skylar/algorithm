/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let arr = nums.concat();
    arr.sort((a, b) => a - b);
    let start = 0;
    let end = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] != nums[i]) {
            start = i;
            break;
        }
    }
    for(let i = arr.length - 1; i >= 0; i--) {
        if(arr[i] != nums[i]) {
            end = i + 1;
            break;
        }
    }
    return end - start;
};
console.log(findUnsortedSubarray([2,6,4,8,10,9,15]))
console.log(findUnsortedSubarray([1,2,3,4]))
console.log(findUnsortedSubarray([1]))