/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    return binarySearch(nums, 0, nums.length - 1, target)
};

var binarySearch = function(number, left, right, target) {
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        if (target == number[mid]) {
            return mid;
        } else if (target < number[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
}

console.log(search([-1,0,3,5,9,12], 9))
console.log(search([-1,0,3,5,9,12], 2))