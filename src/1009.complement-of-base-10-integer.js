/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
  let twoStr = n.toString(2) + ''
  let resversStr = ''
  for (let i = 0; i < twoStr.length; i++) {
    if (twoStr[i] === '1') {
      resversStr += '0'
    } else {
      resversStr += '1'
    }
  }
  return parseInt(resversStr, 2)
};

console.log(bitwiseComplement(11))
console.log(bitwiseComplement(5))
console.log(bitwiseComplement(7))