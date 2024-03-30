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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
  const maxDepth = (node) => {
    if (!node) return 0;
    return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
  };
  if (root === null) {
    return root
  }
  else {
    let leftD = maxDepth(root.left)
    let rightD = maxDepth(root.right)
    if (leftD === rightD) {
      return root;
    }
    else if (leftD > rightD) {
      return lcaDeepestLeaves(root.left);
    }
    else {
      return lcaDeepestLeaves(root.right);
    }
  }
};