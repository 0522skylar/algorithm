/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let j = 0
  for (let i = 0; i < n; i++) {
    for (j = m -1; j >= 0; j--) {
      if (nums1[j] > nums2[i]) {
        nums1[j+1] = nums1[j]
      } else {
        break
      }
    }
    nums1[j+1] = nums2[i]
    m++
  }
  return nums1
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
console.log(merge([4,5,6,0,0,0], 3, [1,2,3], 3))