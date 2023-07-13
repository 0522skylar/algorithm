/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
  let len = s.length;
  let n = 0;
  let ans = 0;
  for(let i = 0; i < len; i++) {
    if (s[i] === '(') {
      if (n === 0) {
        n = 1;
      } else {
        n = n * 2
      }
    } else if(s[i] == ')') {
      if (s[i-1] === '(') {
        ans += n;
      }
      n = n / 2;
    }
  }
  return ans;
};
console.log(scoreOfParentheses('()'))
console.log(scoreOfParentheses('()()'))
console.log(scoreOfParentheses("(()(()))"))