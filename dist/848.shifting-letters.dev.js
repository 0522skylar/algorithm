"use strict";

/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function shiftingLetters(s, shifts) {
  var arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var index = 0;
  var ans = [];

  for (var i = s.length - 1; i >= 0; i--) {
    index += shifts[i];
    ans.push(arr[(s[i].charCodeAt() + index - 97) % 26]);
  }

  return ans.reverse().join('');
};

console.log(shiftingLetters("abc", [3, 5, 9]));
console.log(shiftingLetters("aaa", [1, 2, 3]));