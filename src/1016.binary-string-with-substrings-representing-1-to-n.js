/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function(s, n) {
  for (let i = 1; i <= n; i++) {
    let str = i.toString(2)
    if (s.indexOf(str) === -1) {
      return false
    }
  }
  return true
};