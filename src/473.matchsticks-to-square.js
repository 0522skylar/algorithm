/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
/*
var makesquare = function(matchsticks) {
  if(matchsticks.length < 4 ) {
    return false
  }
  let sum = matchsticks.reduce((pre, next) => pre + next )
  if(sum % 4 !== 0) {
    return false
  }
  matchsticks.sort((a,b)=>a-b)
  let arr = [0,0,0,0];
  return dfs(matchsticks, matchsticks.length - 1,arr , sum / 4)
};

const dfs = (nums, pos, sums, avg) => {
  if(pos === -1) {
    return sums[0] == avg && sums[1] == avg && sums[2] === avg
  }
  for(let i = 0; i < 4; i++) {
    if(sums[i] + nums[pos] > avg) {
      continue;
    }
    sums[i] += nums[pos];
    if(dfs(nums, pos - 1, sums, avg)) {
      return true
    }
    sums[i] -= nums[pos]
  }
  return false;
}
*/

const makesquare = function(matchsticks) {
  let sum = matchsticks.reduce((pre, next) => pre + next )
  if(sum % 4 !== 0) {
    return false
  }
  const len = Math.floor(sum / 4);
  const n = matchsticks.length;
  // 1<<4 === 2*2*2*2
  const dp = new Array(1<<n).fill(-1);
  dp[0] = 0;
  for(let s = 1; s< (1<<n); s++) {
    for(let k = 0; k < n; k++) {
      if((s & (1<<k)) === 0) {
        continue;
      }
      const s1 = s & ~(1<<k);
      if(dp[s1] >= 0 && dp[s1] + matchsticks[k] <= len) {
        dp[s] = (dp[s1] + matchsticks[k]) % len;
        break;
      }
    }
  }
  return dp[(1<<n) - 1] === 0;
  
}
console.log(makesquare([3,3,3,3,4]))
console.log(makesquare([1,1,2,2,2]))