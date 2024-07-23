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
 * @return {number}
 */
var sumNumbers = function(root) {
  let arr = []
  let count = 0
  const dfs = (root, count) => {
    if (!root) {
      
      return count
    }
    count = count * 10 + root.val
    if (root.left) {
      dfs(root.left, count)
    }
    if (root.right) {
      dfs(root.right, count)
    }
    if (!root.left && !root.right) {
      arr.push(count)
    }
  }
  dfs(root, count)
  return arr.reduce((pre, cur) => pre + cur)
};