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
var distributeCoins = function(root) {
  let ans = 0
  const dfs = (root) => {
    if (!root) {
      return 0
    }
    let t = dfs(root.left) + dfs(root.right) + root.val - 1
    ans += Math.abs(t)
    return t;
  }
  dfs(root)
  return ans
};