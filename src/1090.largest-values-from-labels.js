/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, numWanted, useLimit) {
  let count = new Array(20005).fill(0)
  let n = labels.length;
  let idx = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    idx[i] = i;
  }
  idx.sort((a, b) => {
    return values[b] - values[a]
  })
  console.log(idx)
  let ans = 0

  for (let i = 0; i < n && numWanted > 0; i++, numWanted--) {
    while (i < n && count[labels[idx[i]]] >= useLimit) {
      i++;
    }
    if (i < n) {
      ans += values[idx[i]]
      count[labels[idx[i]]]++
    }
  }
  return ans;
};  
console.log(largestValsFromLabels([5,4,3,2,1], [1,1,2,2,3], 3,1));
console.log(largestValsFromLabels([5,4,3,2,1], [1,3,3,3,2], 3,2));
