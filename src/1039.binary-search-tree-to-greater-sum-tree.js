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
var bstToGst = function(root) {
  let num = 0;
  const dfs = (root) => {
      if(root != null) {
          dfs(root.right);
          root.val = root.val + num;
          num = root.val;
          dfs(root.left);
          return root;
      }
      return null;
  }
  return dfs(root)
};