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
 * @return {void} Do not return anything, modify root in-place instead.
 */
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (root === null)
    return null
  let result = [];
  recursion(root);

  function recursion(root) {
    if (!root) {
      return null
    }
    result.push(root.val)
    if (root.left) {
      recursion(root.left)
    }
    if (root.right) {
      recursion(root.right)
    }
    return;
  }
  //   console.log(result)
  result.shift()
  const dfs = (root) => {
    if (result.length === 0) {
      return root
    }
    let cur = result.shift()
    // console.log(cur)
    root.left = null
    root.right = new TreeNode(cur, null, null)
    dfs(root.right)
  }
  return dfs(root)
};
var levelOrder = function (root) {
  if (root === null)
    return []
  let result = [];
  let deep = 0;

  recursion(root);

  function recursion(root) {
    deep++;
    if (result[deep - 1]) {
      result[deep - 1].push(root)
    } else {
      result[deep - 1] = [root]
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