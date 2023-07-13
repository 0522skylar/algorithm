/**
 * @param {number} n
 * @return {number}
 */
/*
var soupServings = function(n) {
  n = Math.ceil(n / 25);
  if(n >= 179) {
    return 1.0
  }
  const memo = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
  const dfs = (a, b) => {
    if(a == 0 && b != 0) {
      return 1
    }
    if(a === 0 && b === 0) {
  
      return 0.5
    }
  
    if(a != 0 && b === 0) {
      return 0
    }
  
    // let str = String(a) + String(b)
    if(memo[a][b] != 0) {
      return memo[a][b]
    }
  
    let prob = 0.0;
    prob += dfs(Math.max(0, a-4), b)
    prob += dfs(Math.max(0, a-3), b)
    prob += dfs(Math.max(0, a-2), b)
    prob += dfs(Math.max(0, a-1), b)
  
    prob *= 0.25
  
    memo[a][b] = prob
    return prob
  }
  return dfs(n, n)
};
*/
var soupServings = function(n) {
  n = Math.ceil(n / 25);
  if (n >= 179) {
      return 1.0;
  }
  const memo = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
  const dfs = (a, b) => {
      if (a <= 0 && b <= 0) {
          return 0.5;
      } else if (a <= 0) {
          return 1;
      } else if (b <= 0) {
          return 0;
      }
      if (memo[a][b] === 0) {
          memo[a][b] = 0.25 * (dfs(a - 4, b) + dfs(a - 3, b - 1) + dfs(a - 2, b - 2) + dfs(a - 1, b - 3));
      }
      return memo[a][b];
  };
  return dfs(n, n);
}


console.log(soupServings(100)) // 0.71875
console.log(soupServings(50))//0.62500


