/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  // nums.sort((a, b) => a - b)
  qSort(nums, 0, nums.length - 1)
  return nums
};

// 快速排序
const qSort = (arr, s, e) => {
  let left = s;
  let right = e;
  if (left < right) {
    let temp = arr[left]
    while(left < right) {
      while(left < right && arr[right] >= temp) {
        right--
      }
      if (left < right) {
        arr[left] = arr[right]
      }
      while(left < right && arr[left] < temp) {
        left++
      }
      if (left < right) {
        arr[right] = arr[left]
      }
    }
    arr[left] = temp
    qSort(arr, s, left)
    qSort(arr, left + 1, e)
  }
}


console.log(sortArray([4,2,1,5,6,2]))