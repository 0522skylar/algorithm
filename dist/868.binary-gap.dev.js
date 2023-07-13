"use strict";

/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function binaryGap(n) {
  var str = n.toString(2);
  var ans = 0;
  var count = -1;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      if (count === -1) {
        count = i;
      } else {
        ans = Math.max(ans, i - count);
        count = i;
      }
    }
  }

  return ans;
};

console.log(binaryGap(22));
console.log(binaryGap(8));
console.log(binaryGap(5));