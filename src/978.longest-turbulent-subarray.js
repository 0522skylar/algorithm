/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
  let ans = 0;
  // let flag = arr[0]
  let k = 0
  if (arr.length < 3) {
    return new Set(arr).size
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i-1] > arr[i] && arr[i] < arr[i+1]) {
      continue
    } else if (arr[i-1] < arr[i] && arr[i] > arr[i+1]) {
      continue
    } else {
      ans = Math.max(ans, arr[i] !== arr[i-1] ? i - k + 1 : i - k)
      k = i;
    }
  }
  return ans;
};
console.log(maxTurbulenceSize([9,4,2,10,7,8,8,1,9]))
console.log(maxTurbulenceSize([4,8,12,16]))
console.log(maxTurbulenceSize([100]))
console.log(maxTurbulenceSize([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])) // 1