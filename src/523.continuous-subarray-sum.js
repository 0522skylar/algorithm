
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var checkSubarraySum = function(nums, k) {
    // if(nums.length === 1) {
    //     if(nums[0] % k === 0 && nums[0] != 0) {
    //         return true
    //     }
    //     else {
    //         return false
    //     }
    // }
    let arr = [nums[0]];
    for(let i = 1; i < nums.length; i++) {
        arr.push(arr[i-1] + nums[i])
    }
    arr.unshift(0) // 确保能够从第一个开始相加
    // console.log(arr)
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            // console.log(i, j, '------', arr[j] - arr[i])
            if((arr[j] - arr[i]) % k === 0 && j - i >= 2) {
                return true;
            }
        }
    }
    return false
};

console.log(checkSubarraySum([23,2,4,6,7], 6))
console.log(checkSubarraySum([23,2,6,4,7], 6))
console.log(checkSubarraySum([23,2,6,4,7], 13))
console.log(checkSubarraySum([23,2,4,6,6], 7)) // true
console.log(checkSubarraySum([0], 1)) // false
console.log(checkSubarraySum([1, 0], 2)) // false