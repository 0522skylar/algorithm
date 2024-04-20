/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0
  let count = 0
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] == nums[j]) {
      count++;
      if (count >= 2) {
        continue
      }
      console.log(123)
      i++;
      nums[i] = nums[j];
    } else {
      count = 0
      i++;
      nums[i] = nums[j];
      console.log(123)
    }
  }
  // console.log(nums)
  return i + 1
};

var removeDuplicates1 = function(nums) {
  const n = nums.length;
  if (n <= 2) {
      return n;
  }
  let slow = 2, fast = 2;
  while (fast < n) {
      if (nums[slow - 2] != nums[fast]) {
          nums[slow] = nums[fast];
          console.log(1111)
          ++slow;
      }
      ++fast;
  }
  return slow;
};

console.log(removeDuplicates1([1,1,1,2,2,3]))