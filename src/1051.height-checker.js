/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  let arr = heights.concat()
  arr.sort((a, b) => a - b)
  console.log(arr)
  let ans = 0
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] != arr[i]) {
      ans++
    }
  }
  return ans
};
console.log(heightChecker([1,1,4,2,1,3]))