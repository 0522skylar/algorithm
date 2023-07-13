"use strict";

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function scoreOfParentheses(s) {
  var len = s.length;
  var n = 0;
  var ans = 0;

  for (var i = 0; i < len; i++) {
    if (s[i] === '(') {
      if (n === 0) {
        n = 1;
      } else {
        n = n * 2;
      }
    } else if (s[i] == ')') {
      if (s[i - 1] === '(') {
        ans += n;
      }

      n = n / 2;
    }
  }

  return ans;
};

console.log(scoreOfParentheses('()'));
console.log(scoreOfParentheses('()()'));
console.log(scoreOfParentheses("(()(()))"));