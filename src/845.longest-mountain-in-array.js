/**
 * @param {number[]} arr
 * @return {number}
 */
/* 有重合的部分解决不了
var longestMountain = function(arr) {
  let ans = 0;
  let i = 1;
  let left = 0;
  let right = 0;
  while( i < arr.length) {
    if (arr[i-1] < arr[i] && right === 0) {
      left++
    } else if(arr[i-1] < arr[i] && right != 0) {

      left = 0;
      right = 0;
    } else if(arr[i-1] > arr[i] && left != 0) {
      right++;
    } else if(arr[i-1] > arr[i] && left == 0) {

      left = 0;
      right = 0;
    } else if(arr[i-1] === arr[i]) {
      left = 0;
      right = 0;
    }
    if (left != 0 && right != 0) {
      ans = Math.max(ans,left + right + 1)
    }
    console.log(left, right, i)
    i++
  }
  return ans;
};
*/


var longestMountain = function(arr) {
  let ans = 0;
  if (arr.length <= 2) {
    return 0
  }
  for(let i = 1; i < arr.length; i++) {
    
    if (arr[i-1] < arr[i] && arr[i+1] < arr[i]) {
      let left = i-1;
      let right = i+1;
      while(left > 0 && arr[left - 1] < arr[left]) {
        left--
      }
      while(right < arr.length - 1 && arr[right+1] < arr[right]) {
        right++
      }
      ans = Math.max(ans, right - left + 1 )
    }
  }
  return ans
};
// console.log(longestMountain([2,1,4,7,3,2,5]))
// console.log(longestMountain([2,2,2]))
// console.log(longestMountain([0,2,0,2,1,2,3,4,4,1])) // 3
console.log(longestMountain([875,884,239,731,723,685])) // 4