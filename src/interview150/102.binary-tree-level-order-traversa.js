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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null)
      return []
  let result = [];
  let deep = 0;

  recursion(root);
  function recursion(root) {
      deep++;
      if (result[deep - 1]) {
          result[deep - 1].push(root.val)
      }
          
      else {
          result[deep - 1] = [root.val]
      }
          
      if (root.left != null) {
          recursion(root.left)
      }
         
      if (root.right !== null) {
          recursion(root.right)
      }
      deep--
      return;
  }
  return result;
};