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
 * @param {number} val
 * @return {TreeNode}
 */
// 二叉树的插入
var insertIntoMaxTree = function (root, val) {
  if (root === null) {
    return new TreeNode(val)
  }
  if (root.val < val) {
    let p = new TreeNode(val)
    p.left = root;
    return p;
  } else {
    root.right = insertIntoMaxTree(root.right, val)
    return root;
  }
};