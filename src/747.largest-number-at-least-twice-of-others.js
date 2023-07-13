/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let arr = nums.concat();
    arr.sort((a, b) => b - a)

    if(arr.indexOf(0)!= -1 && arr[0] === 1) {
        return nums.indexOf(arr[0]);
    }
    if((arr[0] / 2) < arr[1]) {
        return -1;
    }
    else {
        return nums.indexOf(arr[0]);
    }
    // console.log(arr)
};

var dominantIndex1 = function(nums) {
    const len = nums.length;
    if (len === 1) return 0;
    let [max, less] = [-1, -1];
    let index = -1;
    for (let i = 0; i < len; i++) {
        if (nums[i] > max) {
            less = max;
            max = nums[i];
            index = i;
        } else if (nums[i] > less) {
            less = nums[i];
        }
    }
    return max >= 2 * less ? index : -1;
};
console.log(dominantIndex([3,6,1,0])) // 1
console.log(dominantIndex([1,2,3,4])) // -1
console.log(dominantIndex([0,0,0,1])) // 3
console.log(dominantIndex([0,0,1,3])) // 3
console.log(dominantIndex([0,0,0,2])) // 3