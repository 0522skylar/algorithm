"use strict";

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/*
var advantageCount = function(nums1, nums2) {
  let ans = []
  nums1 = nums1.sort((a, b) => a - b)
  for(let i = 0; i < nums2.length; i++) {
    let falg = false;
    for(let j = 0; j < nums1.length; j++) {
      if (nums1[j] > nums2[i]) {
        ans.push(nums1[j])
        falg = true
        nums1.splice(j, 1)
        break
      }
    }
    if(!falg) {
      ans.push(nums1[0])
      nums1.shift();
    }
  }
  return ans;
};
*/
var advantageCount = function advantageCount(nums1, nums2) {
  var n = nums1.length;
  var idx1 = new Array(n).fill(0);
  var idx2 = new Array(n).fill(0);

  for (var i = 0; i < n; ++i) {
    idx1[i] = i;
    idx2[i] = i;
  }

  idx1.sort(function (i, j) {
    return nums1[i] - nums1[j];
  });
  idx2.sort(function (i, j) {
    return nums2[i] - nums2[j];
  });
  var ans = new Array(n).fill(0);
  console.log(idx1, idx2);
  var left = 0,
      right = n - 1;

  for (var _i = 0; _i < n; ++_i) {
    if (nums1[idx1[_i]] > nums2[idx2[left]]) {
      ans[idx2[left]] = nums1[idx1[_i]];
      ++left;
    } else {
      ans[idx2[right]] = nums1[idx1[_i]];
      --right;
    }
  }

  return ans;
}; // console.log(advantageCount([2,7,11,15], [1,10,4,11]))


console.log(advantageCount([12, 24, 8, 32], [13, 25, 32, 11]));