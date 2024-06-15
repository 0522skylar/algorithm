/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate1 = function(nums, k) { // TEL
  for (let i = 0; i < nums.length; i++) {
    for (let j = k + i; j > i; j--) {
      if (nums[j] === nums[i]) {
        return true
      }
    }
  }
  return false
};

var containsNearbyDuplicate = function(nums, k) { // TEL
  let left = 0
  let right = 1
  while(left <= right && right <= nums.length) {
    if (nums[left] === nums[right] && right - left <= k) {
      return true
    } else {
      if (right - left >= k) {
        left++
        right = left + 1
      } else {
        right++
      }
    }
    // console.log(left , right)
  }
  return false
};

console.log(containsNearbyDuplicate([1,0,1,1], 1))
console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))
console.log(containsNearbyDuplicate([0,1,2,3,2,5], 3)) // true