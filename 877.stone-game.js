/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
  let one = 0;
  let two = 0;


  while(piles.length) {
    if (piles[0] > piles[piles.length - 1]) {
      if (piles.length % 2) {
        one += piles[0]
      } else {
        two += piles[0]
      }
      piles.shift()
    } else {
      if (piles.length % 2) {
        one += piles[piles.length - 1]
      } else {
        two += piles[piles.length - 1]
      }
      piles.pop()
    }
  }
  // console.log(one, two)
  return true
  return two - one > 0
};

// 无论数据如何，都是A获胜，因为A比B先选择，所以A永远胜于B
console.log(stoneGame([5,3,4,5]))
console.log(stoneGame([3,7,2,3]))
console.log(stoneGame([3,2,10,4])) // 先取最小值