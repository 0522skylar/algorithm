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
var maxPathSum = function(root) {
  let ret = -10000000000
  const dfs = (root) => {
    if (!root) {
      return 0
    }
    let left = Math.max(0, dfs(root.left))
    let right = Math.max(0, dfs(root.right))
    ret = Math.max(ret, root.val + left + right)
    return Math.max(left, right) + root.val
  }
  dfs(root)
  return ret
};