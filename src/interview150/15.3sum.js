/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let ans = []
  let left = 1
  let right = nums.length - 1
  // nums = [...new Set(nums)]
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i-1]) {
      continue
    }
    left = i +1
    right = nums.length - 1
    while(left < right) {
      if (nums[left] + nums[right] === - nums[i]) {
        ans.push([nums[left], nums[right], nums[i]])
        while (left < right) {
            // 不管前后相不相等，left 都要往前走
            left++;
            if (nums[left - 1] != nums[left]) break;
        }
        while (left < right) {
            // 不管前后相不相等，right 都要往后走
            right--;
            if (nums[right + 1] != nums[right]) break;
        }
      }
      else if (nums[left] + nums[right] < -nums[i]) {
        left++
      } else {
        right--
      }
    }
  }
  return ans;
};
console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([-0,1,1]))
console.log(threeSum([0,0,0,0]))