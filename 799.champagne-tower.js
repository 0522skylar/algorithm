/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
  let dp = new Array(101).fill(0.0).map(() => new Array(101).fill(0.0))
  dp[0][0] = poured
  for(let i = 0; i <= query_row; i++) {
    for(let j = 0; j <= i; j++) {
      if(dp[i][j] >= 1) {
        let remain = dp[i][j]-1;
        dp[i][j] = 1;
        dp[i+1][j] += remain / 2
        dp[i+1][j+1] += remain / 2

      }
    }
  }
  return dp[query_row][query_glass]
};

console.log(champagneTower(1,1,1))
console.log(champagneTower(2,1,1))
console.log(champagneTower(100000009, 33, 17))