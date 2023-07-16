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
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// 前序+后序 ===> 确定一棵二叉树
var constructFromPrePost = function(preorder, postorder) {
  let preIndx = 0;
  let postIndex = 0;
  const dfs = (pre, post) => {
    let node = new TreeNode(pre[preIndx++])
    if (node.val !== post[postIndex]) {
      node.left = dfs(pre, post)
    }
    if (node.val !== post[postIndex]) {
      node.right = dfs(pre, post)
    }
    postIndex++
    return node
  }

  return dfs(preorder, postorder)
};

console.log(constructFromPrePost([1,2,4,5,3,6,7], [4,5,2,6,7,3,1])) // [4,5,2,6,7,3,1]