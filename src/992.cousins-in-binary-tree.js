/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 新建树节点类
function TreeNode (val, left, right) {
  this.val = (val === undefined) ? 0 : val;
  this.left = (left === undefined) ? null : left;
  this.right = (right === undefined) ? null : right;
}
function buildTree(val_list) {
// 数组为空
if(!val_list || val_list.length === 0) {
  return ;
  }
// 根节点
var root = new TreeNode(val_list.shift());

var nodeQueue = [root];
// 对root节点进行操作，更新node
while(val_list.length > 0){
  var node  = nodeQueue.shift();
  // n = node.level + 1;	// 获取父节点的层级，子节点在该层级上+1
  // 构建：左孩子节点
  if(val_list.length === 0) {
    break;
      }
  var leftVal = val_list.shift();
  if(leftVal != null) {
    node.left = new TreeNode(leftVal);
    nodeQueue.push(node.left);
  }
  // 构建：右孩子节点
  if(val_list.length === 0) {
    break;
      }
  var rightVal = val_list.shift();
  if(rightVal != null) {
    node.right = new TreeNode(rightVal);
    nodeQueue.push(node.right);
  }
}
return root;
}
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

var isCousins = function(root, x, y) {
  let xx,yy,xd,yd

  const dfs = (node, dep, x, y, pre) => {
    if (node == null) {
      return
    }
    if (node.val == x) {
      xx = pre
      xd = dep
    } else if (node.val === y) {
      yy = pre
      yd = dep
    } else {
      dfs(node.left, dep + 1, x, y, node.val)
      dfs(node.right, dep + 1, x, y, node.val)
    }
  }

  dfs(root.left,1,x,y,root.val)
  dfs(root.right,1,x,y,root.val)

  return (xx !== yy) && (xd == yd)
};