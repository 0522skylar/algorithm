/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) { // TEL
  let count = 0
  while(count < k) {
    let fir =  nums[nums.length-1]
    for (let i = nums.length-1; i >= 0 ; i--) {
      nums[i] = nums[i - 1]
    }
    nums[0] = fir
    count++
  }
  return nums
};

var rotate1 = function(nums, k) { // success
  let arr = nums.concat()
  let n = nums.length 
  k = k % n
  let j = 0
  for (let i = n; i < 2 * n; i++) {
    // console.log(i - k < n ? i - k : i - (k + n) )
    
    nums[j] = arr[i - k < n ? i - k : i - (k + n) ]
    j++
  }
  return nums
};

console.log(rotate1([0,1,2,3], 2))
console.log(rotate1([1,2,3,4,5,6,7], 3))
console.log(rotate1([-1,-100,3,99], 2)) // [ 3, 99, -1, -100 ]