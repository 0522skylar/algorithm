"use strict";

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function peakIndexInMountainArray(arr) {
  var ans = 0;

  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      ans = i;
      break;
    }
  }

  return ans;
};

var peakIndexInMountainArray2 = function peakIndexInMountainArray2(arr) {
  var n = arr.length;
  var left = 1;
  var right = n - 2;
  var ans = 0;

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);

    if (arr[mid] > arr[mid + 1]) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
};