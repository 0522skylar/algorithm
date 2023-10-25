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
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function(root, voyage) {

  let i = 0;
  let flag = false;
  let ans = []
  const dfs = (root, voyage) => {
    if (root === null) {
      return;
    }
    if (root.val !== voyage[i]) {
      flag = true;
      return 
    }
    if (root.left != null && root.left.val != voyage[i+1]) {
      let temp = root.left;
      root.left = root.right;
      root.right = temp;
      ans.push(root.val)
    }
    i++;
    dfs(root.left, voyage)
    dfs(root.right, voyage)
  }
  dfs(root, voyage);
  if (flag) {
    let res = []
    res.push(-1)
    return res;
  }
  return ans;
  
};

