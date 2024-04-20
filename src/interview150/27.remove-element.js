/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  console.log(nums) //  它会打印出数组中 该长度范围内 的所有元素
  return i;
}; 

// 数组引用

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([3, 2, 2, 3], 2));