/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {
  let dp = new Array(books.length + 1).fill(Number.MAX_VALUE)
  dp[0] = 0
  for (let i = 0; i < books.length; i++) {
    let sum = 0;
    let max = 0
    for (let j = i; j >= 0;j--) {
      sum += books[j][0]
      max = Math.max(max, books[j][1])
      if (sum > shelfWidth) {
        break
      }
      dp[i+1] = Math.min(dp[i+1], dp[j] + max)
    }
  }
  return dp[books.length]
};

console.log(minHeightShelves([[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], 4))