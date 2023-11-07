/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function(a, b) {
  let ans = ''
  while(a > 0 && b > 0) {
    if (a > b) {
      ans += 'aab'
      a -= 2
      b--
    } else if (a === b) {
      ans += 'ab'
      a--
      b--
    } else {
      ans += 'bba';
      a--
      b -= 2
    }
  }
  while(a > 0) {
    ans += 'a'
    a--
  }
  while(b > 0) {
    ans += 'b'
    b--
  }

  return ans;
};
console.log(strWithout3a3b(1,2))
console.log(strWithout3a3b(4,1))
console.log(strWithout3a3b(2,2))
console.log(strWithout3a3b(3,3))