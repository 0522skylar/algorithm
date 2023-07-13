"use strict";

var _require = require("fs-extra"),
    lstat = _require.lstat;
/**
 * @param {string} s
 * @return {number}
 */


var countBinarySubstrings = function countBinarySubstrings(s) {
  var ans = 0;
  var cur = 1;
  var last = 0;

  for (var i = 1; i < s.length; i++) {
    if (s[i] == s[i - 1]) {
      cur++;
    } else {
      last = cur;
      cur = 1;
    }

    if (last >= cur) {
      ans++;
    }
  }

  return ans;
}; // console.log(countBinarySubstrings("00110011"))


console.log(countBinarySubstrings("10101"));