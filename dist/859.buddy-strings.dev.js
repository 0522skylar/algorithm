"use strict";

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function buddyStrings(s, goal) {
  if (s.length != goal.length) {
    return false;
  }

  var diff = [];

  for (var i = 0; i < s.length; i++) {
    if (s[i] != goal[i]) {
      diff.push(i);
    }
  }

  if (diff.length === 0) {
    var arr = new Array(27).fill(0);

    for (var _i = 0; _i < s.length; _i++) {
      arr[s[_i].charCodeAt() - 'a'.charCodeAt()]++;

      if (arr[s[_i].charCodeAt() - 'a'.charCodeAt()] > 1) {
        return true;
      }
    }

    return false;
  } else if (diff.length === 2) {
    return s[diff[0]] === goal[diff[1]] && goal[diff[0]] === s[diff[1]];
  } else {
    return false;
  }
};

console.log(buddyStrings("ab", "ba"));
console.log(buddyStrings("ab", "ab"));
console.log(buddyStrings("aa", "aa"));