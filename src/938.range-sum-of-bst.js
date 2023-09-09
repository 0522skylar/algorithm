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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {


  let ans = 0

  const dfs = (root, low, high) => {
    if (root === null) {
      return
    }
    if (root.val >= low && root.val <= high) {
      ans += root.val
    }

    dfs(root.left, low, high)
    dfs(root.right, low, high)
  }

  dfs(root, low, high)
  return ans;
};

var rangeSumBST = function(root, low, high) {
  if (!root) {
      return 0;
  }
  if (root.val > high) {
      return rangeSumBST(root.left, low, high);
  }
  if (root.val < low) {
      return rangeSumBST(root.right, low, high);
  }
  return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/range-sum-of-bst/solutions/746069/er-cha-sou-suo-shu-de-fan-wei-he-by-leet-rpq7/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。