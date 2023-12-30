/**
 * @param {number[]} arr
 * @return {number[]}
 */
var prevPermOpt1 = function(arr) {
  let n = arr.length
  let min = arr[n - 1] // 转换最右边的值
  for (let i = n - 2; i >= 0; i--) {
    if (min < arr[i]) {
      let p = -1
      for (let j = n - 1; j > i; j--) {
        if (arr[j] >= min && arr[j] < arr[i]) { // 找到比min更大的值,从右往左找,找第一个就交互位置
          p = j
          min = arr[j]
        }
      }
      console.log(p, min, i)
      // i下标和p下标互换值
      let temp = arr[p]
      arr[p] = arr[i]
      arr[i] = temp
      // arr[i] += arr[p]
      // arr[p] = arr[i] - arr[p]
      // arr[i] -= arr[p]
      break
    }
    min = Math.min(min, arr[i])
  }
  return arr
};

// console.log(prevPermOpt1([3,2,1]))
// console.log(prevPermOpt1([1,1,5]))
console.log(prevPermOpt1([1,9, 9,4,6,7]))