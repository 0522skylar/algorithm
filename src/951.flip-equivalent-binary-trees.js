/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
  if (root1 === null && root2 === null) {
    return true
  }
  if (root1 === null || root2 === null) {
    return false
  }
  if (root1.val === root2.val) {
    return (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)) || (flipEquiv(root1.right, root2.left) && flipEquiv(root1.left, root2.right))
  }
  return false
};

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function (root1, root2) {
  /** 定义：输入两棵二叉树，判断这两棵二叉树是否是翻转等价的 */
  // 判断 root1 和 root2 两个节点是否能够匹配
  if (root1 == null || root2 == null) return root1==root2;
  if (root1.val != root2.val) return false;
  // 判断子树是否能够匹配，不翻转、翻转两种情况满足一种即可算是匹配
  return (
    (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)) ||
    (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left))
  );
};


// 作者：angela
// 链接：https://leetcode.cn/problems/flip-equivalent-binary-trees/solutions/1189867/bi-xu-miao-dong-4ju-dai-ma-jie-jue-by-an-s662/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。