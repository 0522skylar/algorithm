/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (root === null)
    return []
  let result = [];
  let deep = 0;

  let p = [root]
  while(p.length != 0) {
    let len = p.length
    result.push([])
    for (let i = 0; i < len; i++) {
      const node = p.shift()
      result[result.length - 1].push(node.val)
      if (node.left) {
        p.push(node.left)
      }
      if (node.right) {
        p.push(node.right)
      }
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (i % 2) {
        result[i] = result[i].reverse()
    }
  }
  return result;
};