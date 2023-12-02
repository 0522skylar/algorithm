/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {
  let ans = []
  for (let i = 0; i < queries.length; i++) {
    let item = queries[i]
    let k = 0
    let pi = 0
    let str = true
    while(k < item.length) {
      if (pi < pattern.length && item[k] == pattern[pi]) {
        pi++
      } else if (item[k].charCodeAt() <= 'Z',charCodeAt() && 'A'.charCodeAt() <= item[k].charCodeAt()) {
        str = false
      }
      k++
    }
    if (str && pi == pattern.length) {
      ans.push(true)
    } else {
      ans.push(false)
    }
  }
  return ans;
};
console.log(camelMatch(["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], 'FB'))