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
 * @return {number}
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

var sumRootToLeaf = function(root) {
  if (root === null)
      return 0
  let ans = 0;

  const dfs = (root, res) => {
    if (root == null) {
      return
    }
    if (!root.left && !root.right) {
      res = res * 2 + root.val
      ans += res
    }
    res = res * 2 + root.val
    dfs(root.left, res)
    dfs(root.right, res)
  }
  dfs(root, 0)

  return ans;
};

console.log(sumRootToLeaf(buildTree([1,0,1,0,1,0,1]))) // 22
console.log(sumRootToLeaf(buildTree([1,1]))) // 3
console.log(sumRootToLeaf(buildTree([1, null ,0]))) // 2
console.log(sumRootToLeaf(buildTree([1]))) // 1
