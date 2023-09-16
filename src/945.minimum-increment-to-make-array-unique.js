/**
 * @param {number[]} nums
 * @return {number}
 */
// TTL exceed time limit
var minIncrementForUnique1 = function(nums) {
  let ans = 0
  let arr = new Array(100000).fill(0)
  for(let i = 0; i < nums.length; i++) {
    arr[nums[i]]++
  }
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0 && arr[i] != 1) {
      for(let j = 2; j <= arr[i] ; j++) {
        let index = i + 1
        ans++
        while(arr[index] != 0) {
          index ++
          ans++
        }
        arr[index]++
        // console.log(index, 11)
      }
      
    }
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
  let ans = 0
  let arr = new Array(500001).fill(0)
  for(let i = 0; i < nums.length; i++) {
    arr[nums[i]]++
  }
  for(let i = 0; i <500001; i++) {
    if(arr[i] <= 1) {
      continue
    }
    ans += arr[i] - 1
    arr[i+1] += arr[i] - 1
    arr[i] = 1
  }
  return ans;
}
console.log(minIncrementForUnique([1,2,2]))
console.log(minIncrementForUnique([3,2,1,2,1,7]))
console.log(minIncrementForUnique([2,2,2,1]))