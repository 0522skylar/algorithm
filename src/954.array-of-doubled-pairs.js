/**
 * @param {number[]} arr
 * @return {boolean}
 */
 // TEL
var canReorderDoubled1 = function(arr) {
  arr.sort((a, b) => a - b)
  while(arr.length) {
    let fir = arr.shift()
    if (arr.indexOf(fir *2) === -1) {
      if (arr.indexOf(fir / 2) === -1) {
        return false
      } else {
        arr.splice(arr.indexOf(fir / 2), 1)
      }
      
    } else {
      arr.splice(arr.indexOf(fir * 2), 1)
    }
  }
  return true
};

var canReorderDoubled = function(arr) {
  arr.sort((a, b) => a - b)
  let map = new Map()
  for (let i = 0; i < arr.length; i++) {
    map.has(arr[i]) ? map.set(arr[i], map.get(arr[i]) + 1) : map.set(arr[i], 1)
  }
  // let count = 0
  // console.log(arr)

  for (let item of map) {
    if (item[1] < 0) {
      return false
    }
    if (item[1] === 0) {
      continue
    }
    if (item[0] > 0) {
      if (map.has(item[0] * 2)) {
        map.set(item[0] * 2, map.get(item[0] * 2) - item[1])
      } else  {
        return false
      }
    } else {
      if (map.has(item[0] / 2)) {
        map.set(item[0] / 2, map.get(item[0] / 2) - item[1])
      } else  {
        return false
      }
    }
  }
  return true
};


console.log(canReorderDoubled([1,2,4,16,8,4])) // false
console.log(canReorderDoubled([4,-4,2, -2])) // true
console.log(canReorderDoubled([2,4,0,0,8,1])) // true
// 1,2  4,4  8 16

var canReorderDoubled = function(arr) {
  const cnt = new Map();
  for (const x of arr) {
      cnt.set(x, (cnt.get(x) || 0) + 1);
  }
  if ((cnt.get(0) || 0) % 2 !== 0) {
      return false;
  }

  const vals = [];
  for (const x of cnt.keys()) {
      vals.push(x);
  }
  vals.sort((a, b) => Math.abs(a) - Math.abs(b));

  for (const x of vals) {
      if ((cnt.get(2 * x) || 0) < cnt.get(x)) { // 无法找到足够的 2x 与 x 配对
          return false;
      }
      cnt.set(2 * x, (cnt.get(2 * x) || 0) - cnt.get(x));
  }
  return true;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/array-of-doubled-pairs/solutions/1380712/er-bei-shu-dui-shu-zu-by-leetcode-soluti-2mqj/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。