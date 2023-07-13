"use strict";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function canPartitionKSubsets(nums, k) {
  var sum = 0;

  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  if (sum % k != 0) {
    return false;
  }

  sum = sum / k;
  nums.sort(function (a, b) {
    return a - b;
  });

  if (nums[nums.length - 1] > sum) {
    return false;
  }

  var arr = new Array(k).fill(sum);
  return help(nums, nums.length - 1, arr, k);
};

var help = function help(nums, cur, arr, k) {
  if (cur < 0) {
    return true;
  }

  for (var i = 0; i < k; i++) {
    if (arr[i] === nums[cur] || cur > 0 && arr[i] - nums[cur] >= nums[0]) {
      arr[i] -= nums[cur];

      if (help(nums, cur - 1, arr, k)) {
        return true;
      }

      arr[i] += nums[cur];
    }
  }

  return false;
};

console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4));
console.log(canPartitionKSubsets([1, 2, 3, 4], 3));