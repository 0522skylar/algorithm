/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  let con = nums.concat()
  let ans = nums.concat()
  let arr = ans.sort((a,b)=> a-b)
  let arr2 = con.sort((a, b) => b - a)
  // console.log(arr, arr2)
  if (nums.join('') === arr.join('') || nums.join('') === arr2.join('')) {
    return true
  } else {
    return false
  }
};

console.log(isMonotonic([1,2,2,3]))
// console.log(isMonotonic([1,2,2,3]))
// console.log(isMonotonic([6,5,4,4]))
// console.log(isMonotonic([1,3,2]))

// console.log(isMonotonic([11,11,9,4,3,3,3,1,-1,-1,3,3,3,5,5,5]))