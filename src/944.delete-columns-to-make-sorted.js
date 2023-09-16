/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
  let ans = 0
  let arr = new Array(strs[0].length).fill('')
  for(let i = 0; i < strs[0].length; i++) {
    for(let j = 0; j < strs.length; j++) {
      arr[i] += strs[j][i]
    }
  }

  for(let i  = 0; i < arr.length; i++) {
    for(let j = 1; j < arr[0].length; j++) {
      if (arr[i][j] < arr[i][j-1]) {
        ans++
        break
      }
    }
  }
  // console.log(arr)
  return ans;
};
console.log(minDeletionSize(["cba","daf","ghi"]))
console.log(minDeletionSize(['a', 'b']))
console.log(minDeletionSize(["zyx","wvu","tsr"]))

var minDeletionSize = function(strs) {
  const row = strs.length;
  const col = strs[0].length;
  let ans = 0;
  for (let j = 0; j < col; ++j) {
      for (let i = 1; i < row; ++i) {
          if (strs[i - 1][j] > strs[i][j]) {
              ans++;
              break;
          }
      }
  }
  return ans;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/delete-columns-to-make-sorted/solutions/1483008/shan-lie-zao-xu-by-leetcode-solution-bqyy/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。