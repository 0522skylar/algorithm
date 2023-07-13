/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  let ans = 0;
  for(let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) {
      ans = i;
      break
    }
  }
  return ans;
};

var peakIndexInMountainArray2  = function(arr) {
  let n = arr.length;
  let left = 1;
  let right = n - 2;
  let ans = 0

  while(left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[mid+1]) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}