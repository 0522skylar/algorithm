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


var minDeletionSize = function (strs) {
  const n = strs.length, m = strs[0].length;
  // 存储比较过的字符
  const arr = Array.from(strs, () => []);
  // 记录删除次数
  let cnt = 0;
  for (let i = 0; i < m; i++) {
      // 用于记录是否可以提前退出
      let flag = true;
      // 先添加第一个字符到数组
      arr[0][i - cnt] = strs[0][i];
      for (let j = 1; j < n; j++) {
          // 添加字符到数组
          arr[j][i - cnt] = strs[j][i];
          // 比较数组的字典序
          // 等于的话还需要判断后面的字符
          if (arr[j - 1] >= arr[j]) {
              flag = false;
              // 大于的话，需要删除当前列的字符
              // 这里不做删除操作，通过下一次循环覆盖这次添加的支字符
              if (arr[j - 1] > arr[j]) {
                  cnt++;
                  break;
              }
          }
      }
      // 如果满足任意arr[j - 1][i] < arr[j][i]，则可以提前退出
      if (flag) break;
  }
  return cnt;
};

// 作者：3N26
// 链接：https://leetcode.cn/problems/delete-columns-to-make-sorted-ii/solutions/1038816/js-shuang-bai-zi-fu-shu-zu-bi-jiao-da-xi-rhd3/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。