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
 * @return {number[]}
 */
var rightSideView = function(root) {
  let ans = []
  let result = []
  let deep = 0;
  function recursion(root) {
    if (!root) {
        return 
    }
      deep++;
      if (result[deep - 1]) {
          result[deep - 1].push(root)
      }
      else {
          result[deep - 1] = [root]
      }
          
      if (root.left) {
          recursion(root.left)
      }
        
      if (root.right) {
          recursion(root.right)
      }
      deep--
      return;
  }
  recursion(root)
//   console.log(result, deep)
  for (let i = 0; i < result.length; i++) {
    ans.push(result[i][result[i].length - 1].val)
  }
  return ans
};