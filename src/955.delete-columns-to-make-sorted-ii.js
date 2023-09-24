/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
  let ans = 0
  let len = strs[0].length
  let vis = new Array(len).fill(false)
  for(let i = 0; i < len; i++) {
    let flag = 1
    for(let j = 0; j < strs.length - 1; j++) {
      if (!vis[j] && strs[j][i] > strs[j+1][i]) {
        console.log(i, strs[j][i], strs[j+1][i])
        ans++
        flag = false
        break
      }
    }
    if (flag) {
      for(let j = 0; j < strs.length - 1; j++) {
        if(strs[j][i] < strs[j+1][i]) {
          vis[j] = true
        }
      }
    }
  }
  return ans;
};

console.log(minDeletionSize(["xga","xfb","yfa"])) // 1
// 这个要把第二列删除，因为xga xfb第一列相同，那么字典序就要按照后面的g和f来排列，这就不符合字典序列了。