"use strict";

/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function lenLongestFibSubseq(arr) {
  // TEL
  var max = 2;
  var map = new Map();

  for (var i = 0; i < arr.length; i++) {
    // 用hash缓存加法结果,就不会超时
    map.set(arr[i], i);
  }

  for (var _i = 0; _i < arr.length; _i++) {
    for (var j = _i + 1; j < arr.length; j++) {
      // let x = arr[i]
      // let y = arr[j]
      // let sum = x + y
      var x = _i;
      var y = j;
      var cur = 2;

      while (y < arr.length && map.has(arr[x] + arr[y])) {
        var temp = y;
        y = map.get(arr[x] + arr[y]);
        x = temp; // sum = x + y;

        cur++;
      }

      max = Math.max(max, cur);
    }
  }

  return max < 3 ? 0 : max;
};

console.log(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(lenLongestFibSubseq([1, 3, 7, 11, 12, 14, 18]));