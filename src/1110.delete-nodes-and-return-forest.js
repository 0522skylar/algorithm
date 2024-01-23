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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    // let node = new TreeNode()
    let ans = []
    let arr = new Array(1010).fill(0)
    for (let i = 0; i < to_delete.length; i++) {
      arr[to_delete[i]] = 1
    }
    const dfs =(root, isTree) => {
        if(root === null) return null
        let flag = arr[root.val]
        if (!flag & isTree) {
          ans.push(root)
        } 
        root.left = dfs(root.left, flag)
        root.right = dfs(root.right, flag)
        return flag ? null : root;
    }
    // node = dfs(root, to_delete)
    dfs(root, true)
    return ans
};

console.log(delNodes(buildTree([1,2,3,4,null,null,4,null,null,4]), [4,3,1,2]))