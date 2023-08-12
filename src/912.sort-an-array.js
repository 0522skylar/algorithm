/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  // nums.sort((a, b) => a - b)
  // qSort(nums, 0, nums.length - 1)
  insertSort(nums)
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

// 选择排序
const selectSort = (arr) => {
  let min = 0
  for (let i = 0; i < arr.length; i++) {
    min = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        min = j
      }
    }
    if (min != i) {
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }
}

const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let res = arr[i]
    for (let j = i - 1; j >= 0; j--) {
      if (res < arr[j]) {
        arr[j + 1] = arr[j]
        arr[j] = res
      } else {
        break
      }
    }
  }
}

console.log(sortArray([4,2,1,5,6,2]))