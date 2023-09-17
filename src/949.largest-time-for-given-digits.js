/**
 * @param {number[]} arr
 * @return {string}
 */
var largestTimeFromDigits = function(arr) {
  const indexArr = new Array(10).fill(0);
  // 将arr放到indexArr中,方便取值
  for (let num of arr) {
    indexArr[num] = (indexArr[num] || 0) + 1;
  }

  let h1 = 2, h2, m1, m2;

  // 这里的while是为了第三位超出时,让第一位和第二位进行重新让位(即重算)
  while (h1 >= 0) {
    // 第一位,取可能取到的最大值,即0-2
    h1 = get(indexArr, h1);
    if (h1 === false) {
      return '';
    }
    // 第二位,取可能取到的最大值,取决于第一位
    h2 = get(indexArr, h1 === 2 ? 3 : 9);
    if (h2 === false) {
      return '';
    }
    // 第三位,取可能取到的最大值,如果取不到则从h1 h2重算
    m1 = get(indexArr, 5);
    if (m1 === false) {
      indexArr[h1]++;
      indexArr[h2]++;
      h1--;
      continue;
    }
    // 第四位,取可能取到的最大值
    m2 = get(indexArr, 9);
    return `${h1}${h2}:${m1}${m2}`
  }
  return '';
}; 
// 取num以下indexArr中能取到的最大值,如果没有则返回false,有就返回那个最大值
const get = (indexArr, num) => {
  for (let i = num; i >= 0; i--) {
    if (indexArr[i] > 0) {
      indexArr[i]--;
      return i;
    }
  }
  return false;
}


// console.log(largestTimeFromDigits([1,2,3,4]))
// console.log(largestTimeFromDigits([5,5,5,5]))
// console.log(largestTimeFromDigits([0,0,0,0]))
console.log(largestTimeFromDigits([0,0,3,0]))
console.log(largestTimeFromDigits([9,0,7,7]))
console.log(largestTimeFromDigits([7,3,6,0]))
console.log(largestTimeFromDigits([0,6,8,1]))
console.log(largestTimeFromDigits([1,9,6,0]))
console.log(largestTimeFromDigits([2,0,6,6])) // 