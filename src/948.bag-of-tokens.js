/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
  let ans = 0
  tokens.sort((a, b) => a - b)
  // console.log(tokens)
  let left = 0
  let right = tokens.length - 1
  while(left <= right) {
    if (power >= tokens[left]) {
      ans ++
      power -= tokens[left]
      left++
    } else {
      if (ans > 0) {
        power += (tokens[right] - tokens[left])
        left++
        right--
      } else {
        return ans
      }
    }
  }
  return ans
};
console.log(bagOfTokensScore([100], 50))
console.log(bagOfTokensScore([100, 200], 150))
console.log(bagOfTokensScore([100, 200, 300,400], 200))