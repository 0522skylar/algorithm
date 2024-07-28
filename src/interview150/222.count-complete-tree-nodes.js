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
var countNodes = function(root) {
  let ans = 0
  const dfs = (root) => {
    if (!root) {
      return
    }
    if (root.left) {
      dfs(root.left)
    }
    ans++
    if (root.right) {
      dfs(root.right)
    }
    return
  }
  dfs(root)
  return ans
};