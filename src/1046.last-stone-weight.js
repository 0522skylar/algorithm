/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  while(stones.length > 1) {
    stones.sort((a, b) => b - a)
    let a = stones[1]
    let b = stones[0]
    if (a  == b) {
      stones.shift()
      stones.shift()
    } else if (a < b) {
      stones.push(b - a)
      stones.shift()
      stones.shift()
    } else {
      stones.push(a - b)
      stones.shift()
      stones.shift()
    }
  }
  return stones[0] === undefined ? 0 : stones[0]
};