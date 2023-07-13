/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function(s) {
  if(s.indexOf('@') != -1) {
    let arr = s.split('@')
    let ans = arr[0][0] + '*****' + arr[0][arr[0].length - 1] + '@' + arr[1]

    return ans.toLocaleLowerCase()    
  } else {
    s = s.replace(/[\+\-\(\)\s]/g, '')
    let len = s.length
    if(len == 10) {
      return '***-***-' + s.slice(-4)
    } else {
      let count = len -10
      let ans = '+'
      while(count --) {
        ans += '*'
      }
      return ans += '-***-***-' + s.slice(-4)
    }
  }
};

console.log(maskPII("LeetCode@LeetCode.com")) // ："l*****e@leetcode.com"
console.log(maskPII("AB@qq.com")) // "a*****b@qq.com"

console.log(maskPII("1(234)567-890")) // "***-***-7890"
console.log(maskPII("111(234)567-890")) // "***-***-7890"