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