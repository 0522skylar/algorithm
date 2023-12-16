/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation1 = function(values) { // 贪心,遗漏顺序排序
  let arr = values.sort((a, b) => a - b)
  let temp = arr[0] * arr[1]
  let ans = 0
  for (let i = 2; i < values.length; i++) {
    ans += temp * arr[i]
  }
  return ans;
};

console.log(minScoreTriangulation([1,3,1,4,1,5])) // 13

console.log(minScoreTriangulation([2,1,4,4])) // 24

function minScoreTriangulation(values) {
  let n = values.length
  let dp = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for (let j = 2; j < n; j++) {
    for (let i = j - 2; i >= 0; i--) {
      dp[i][j] = Number.MAX_VALUE
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j] + values[i] * values[k] * values
          [j])
      }
    }
  }
  return dp[0][n-1]
}

var minScoreTriangulation2 = function(values) {
  const n = values.length;
  const memo = new Map();
  const dp = (i, j) => {
      if (i + 2 > j) {
          return 0;
      }
      if (i + 2 === j) {
          return values[i] * values[i + 1] * values[j];
      }
      const key = i * n + j;
      if (!memo.has(key)) {
          let minScore = Number.MAX_VALUE;
          for (let k = i + 1; k < j; k++) {
              minScore = Math.min(minScore, values[i] * values[k] * values[j] + dp(i, k) + dp(k, j));
          }
          memo.set(key, minScore);
      }
      return memo.get(key);
  }
  return dp(0, n - 1);
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/minimum-score-triangulation-of-polygon/solutions/2202467/duo-bian-xing-san-jiao-pou-fen-de-zui-di-weqg/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。