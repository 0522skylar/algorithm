/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function(label) {
  let level = 1, i = 1
  while(level < label) {
    i++
    level = Math.pow(2, i) - 1
  }
  let ans = []
  let node = label
  ans.push(node)
  while(i > 1) {
    let nodes = Math.pow(2, i) - 1

    let index = (nodes - node) / 2
    // console.log(index)

    node = Math.pow(2, i - 2) + Math.floor(index);
    ans.push(node)
    i--
  }
  ans.reverse()
  return ans;
};
console.log(pathInZigZagTree(14))
console.log(pathInZigZagTree(26))