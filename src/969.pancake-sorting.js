/**
 * @param {number[]} arr
 * @return {number[]}
 */

const pancake = (a, b) => {
  if (b <= a) {
    return a;
  }
  return b - a - 1
}
var pancakeSort = function (arr) {
  let res = []
  let index = new Array(arr.length + 1).fill(0)
  for (let i = 0; i < arr.length; i++) {
    index[arr[i]] = i;
  }
  // console.log(index)
  for (let i = arr.length; i > 0; i--) {
    if (index[i] === i - 1) {
      continue;
    }
    res.push(index[i] + 1) // 从下标0开始反转,所以先将最大的值排好序
    res.push(i)
    for (let j = 0; j < i; j++) {
      let flag = index[j]
      flag = pancake(flag, index[i] + 1)
      flag = pancake(flag, i)
      index[j] = flag;
    }
  }
  return res;
};

console.log(pancakeSort([3,2,4,1]))
 // 4 2 3 
 // 1 3 2 4
 // 3 1 2 4
 // 2 1 3 4
 // 1 2 3 4