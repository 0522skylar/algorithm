/**
 * @param {string} seq
 * @return {number[]}
 * 找规律
 */
var maxDepthAfterSplit = function(seq) {
  const ans = []
  for (let i = 0; i < seq.length; i++) {
    ans[i] = seq[i] === '(' ? i & 1 : (i + 1) & 1
  }
    
  return ans;
};
console.log(maxDepthAfterSplit('(()())'))