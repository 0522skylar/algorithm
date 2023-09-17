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

/**
 * @param {number[]} arr
 * @return {string}
 */
var largestTimeFromDigits = function(arr) {
  let result = "";

  arr = arr.sort((a, b) => b - a);

  function getTime(times, map, index) {
      if (result) return;
      if (index === 4) {
          result ='' +  times[0] + times[1] + ':' + times[2] + times[3];
          return;
      }
      for (let i = 0; i <= 3; i++) {
          val = arr[i];
          if (map[i]) continue;
          // 符合要求
          if (!strategy[index](times[index - 1], val)) continue;
          times.push(val);
          map[i] = true;
          getTime(times, map, index + 1);
          times.pop();
          map[i] = false;
      };
  }

  getTime([], {}, 0);

  return result;
};

const strategy = {
  0: (pre, cur) => cur <= 2 ? true: false,
  1: (pre, cur) => {
      if (pre === 2 && cur > 3) return false;
      return true;
  },
  2: (pre, cur) => cur <= 5 ? true : false,
  3: () => true
}

// 作者：Mancheste
// 链接：https://leetcode.cn/problems/largest-time-for-given-digits/solutions/2041537/di-gui-by-mancheste-jaq3/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
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