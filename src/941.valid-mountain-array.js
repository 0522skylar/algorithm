/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  if (arr.length < 3) {
    return false
  }
  let maxVal = Math.max(...arr)
  let index = arr.indexOf(maxVal)
  if(index === arr.length - 1 || index === 0) {
    return false
  }
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < maxVal && arr[i] < arr[i+1]) {
      continue
    } else if (i > index && arr[i-1] > arr[i]) {
      continue
    } else if (i ==index ){
      continue
    } else {
      return false
    }
  }
  return true
};
console.log(validMountainArray([0,3,2,1]))

var validMountainArray = function(arr) {
  const N = arr.length;
  let i = 0;

  // 递增扫描
  while (i + 1 < N && arr[i] < arr[i + 1]) {
      i++;
  }

  // 最高点不能是数组的第一个位置或最后一个位置
  if (i === 0 || i === N - 1) {
      return false;
  }

  // 递减扫描
  while (i + 1 < N && arr[i] > arr[i + 1]) {
      i++;
  }

  return i === N - 1;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/valid-mountain-array/solutions/470827/you-xiao-de-shan-mai-shu-zu-by-leetcode-solution/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。