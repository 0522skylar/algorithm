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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let sum = 0
  let ans = false
  if (!root) {
    return ans
  }
  const dfs = (root, sum) => {
    if (!root) {
      console.log(sum)
      if (sum === targetSum) {
        ans = true
      }
      return
    }
    sum += root.val
    if (root.left) {
      dfs(root.left, sum)
    }
    if (root.right) {
      dfs(root.right, sum)
    }
    if (!root.left && !root.right) {
      console.log(sum)
      if (sum === targetSum) {
        ans = true
      }
    }
    // console.log(sum)
    // if (sum === targetSum) {
    //     ans = true
    // }
  }
  dfs(root, sum)
  return ans
};