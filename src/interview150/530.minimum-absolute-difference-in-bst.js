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
var getMinimumDifference = function(root) {
  let ans = Number.MAX_VALUE
  let preVal = -1
  const dfs = (root) => {
    if (root == null) {
      return ans
    }
    if (root.left) {
      dfs(root.left)
    }
    if (preVal === -1) {
      preVal = root.val
    } else {
      ans = Math.min(ans, Math.abs(preVal - root.val))
      preVal = root.val
    }
    
    if (root.right) {
      dfs(root.right)
    }
  }
  dfs(root)
  return ans
};