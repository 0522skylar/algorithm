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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const isSame = (a, b) => {
    if (!a && !b) {
      return true
    }
    if (!a || !b) {
      return false
    }
    if (a.val === b.val) {
      return isSame(a.left, b.right) && isSame(a.right, b.left)
    }
    return false
  }
  return isSame(root, root)
};