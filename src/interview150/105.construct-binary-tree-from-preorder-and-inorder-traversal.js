/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length) {
    return null;
  }
  const root = new TreeNode(preorder[0]);
  const lefts = inorder.indexOf(preorder[0]);
  let pre1 = preorder.slice(1, 1 + lefts)
  let pre2 = preorder.slice(1 + lefts)
  let in1 = inorder.slice(0, lefts)
  let in2 = inorder.slice(1 + lefts, preorder.length)
  root.left = buildTree(pre1, in1)
  root.right = buildTree(pre2, in2)

  return root;
};