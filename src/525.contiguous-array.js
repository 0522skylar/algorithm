/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let maxLen = 0;
    const map = new Map();
    let count = 0;
    map.set(count, -1);
    const n = nums.length;
    for(let  i = 0; i < n; i++) {
        const num = nums[i];
        if(num === 1) {
            count++;
        }
        else {
            count--;
        }
        if(map.has(count)) {
            maxLen = Math.max(maxLen, i - map.get(count))
        } 
        else {
            map.set(count, i)
        }
    }
    return maxLen;
};

// console.log(findMaxLength([0,1,0, 0, 0, 1, 1, 0]))//6  1-6
// console.log(findMaxLength([1,1,1 ,1,0, 0, 0, 1, 1, 0]))//8
// console.log(findMaxLength([0,1]))//2
// console.log(findMaxLength([0,1,0]))//2
// console.log(findMaxLength([]))//0