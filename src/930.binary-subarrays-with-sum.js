/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
  let arr = []
  let count = 0
  for(let i = 0; i < nums.length; i++) {
    count += nums[i]
    arr.push(count)
  }
  let ans = 0
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === goal) {
      ans++
    }
    for(let j = 0; j < i; j++) {
      if(arr[i] - arr[j] === goal) {
        ans++
      }
    }
  }
  return ans;
};
console.log(numSubarraysWithSum([1,0,1,0, 1], 2))
console.log(numSubarraysWithSum([0,0,0,0,0], 0))