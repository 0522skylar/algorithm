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
var averageOfLevels = function(root) {
  let ans = []
  let result = []
  let deep = 0;

  function recursion(root) {
    if (!root) {
      return
    }
    deep++;
    if (result[deep - 1]) {
      result[deep - 1].push(root.val)
    } else {
      result[deep - 1] = [root.val]
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
  for (let i = 0; i < result.length; i++) {
    const arr = result[i]
    let count = 0
    for (let j = 0; j < arr.length; j++) {
      count += arr[j]
    }
    ans.push(count / arr.length)
  }
  return ans
};