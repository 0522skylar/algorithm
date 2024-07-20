/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  let post_idx
  const idx_map = new Map()
  const help = (in_left, in_right) => {
    if (in_left > in_right) {
        return null
    }
    const root_val = postorder[post_idx]
    const root = new TreeNode(root_val)
    const index = idx_map.get(root_val)
    post_idx--
    root.right = help(index+ 1, in_right)
    root.left = help(in_left, index - 1)
    return root
  }
  post_idx = postorder.length - 1
  inorder.forEach((val, idx) => {
    idx_map.set(val, idx)
  })
  return help(0, inorder.length - 1)
};