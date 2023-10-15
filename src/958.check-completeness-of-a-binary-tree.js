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
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  let quest = [root]
  let p = root
  while (quest.length) {
    p = quest.pop()
    if (p) {
      quest.unshift(p.left)
      quest.unshift(p.right)
    } else {
      while (quest.length) {
        p = quest.pop()
        if (p) {
          return false
        }
      }
    }
  }
  return true
};