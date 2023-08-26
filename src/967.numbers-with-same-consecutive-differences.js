/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
  let ans = new Set()
  const dfs = (num, k, str) => {
    if (str.length === num) {
      ans.add(Number(str))
      return;
    }
    for(let i = 0; i < 10; i++) {
      if(str.length == 0 && i  == 0) {
        continue
      }
      if(str.length === 0 || Math.abs(str[str.length - 1].charCodeAt() - '0'.charCodeAt() - i) === k) {
        str += i
        dfs(num, k, str)
        str = str.slice(0, str.length - 1)
      }
    }
  }

  dfs(n, k, '')
  return [...ans]
};
console.log(numsSameConsecDiff(2, 0))
console.log(numsSameConsecDiff(2, 1))
console.log(numsSameConsecDiff(2, 2))