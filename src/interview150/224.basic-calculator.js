/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let arr = []
  let ans = 0
  let sign = 1
  for (let i = 0; i < s.length; i++) {
    let ch = s[i]
    if (ch >= '0'  && ch <= '9') {
      let cur = ch.charCodeAt() - '0'.charCodeAt()
      while(i + 1 < s.length && s[i+1] >= '0' && s[i+1] <= '9') {
        cur = cur * 10 + s[++i].charCodeAt() - '0'.charCodeAt()
      }
      ans = ans + sign * cur
    }
    else if (ch === '+') {
      sign = 1
    } else if (ch === '-') {
      sign = -1
    } else if (ch === '(') {
      arr.push(ans)
      ans = 0
      arr.push(sign)
      sign = 1
    } else if (ch === ')') {
      ans = arr.pop() * ans + arr.pop()
    }
  }
  return ans
};

console.log(calculate("1 + 1"))
console.log(calculate(" 2-1 + 2 "))
console.log(calculate("(1+(4+5+2)-3)+(6+8)"))
console.log(calculate("  30"))