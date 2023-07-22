/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
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
var allPossibleFBT = function(n) {
  let ans = []
  if (!n % 2) {
    return ans;
  } 
  if (n === 1) {
    let head = new TreeNode(0)
    ans.push(head)
    return ans
  }
  for (let i = 1; i < n; i+=2) {
    let left = allPossibleFBT(i)
    let right = allPossibleFBT(n - 1- i) 

    for(let item of left) {
      for(let key of right) {
        let head = new TreeNode(0)
        head.left = item
        head.right = key
        ans.push(head)
      }
    }
  }
  return ans;
};

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT2 = function (n) {
  // 题目描述的满二叉树不可能是偶数个节点
  if (n % 2 == 0) return [];
  // 备忘录，记录 n 个节点能够组合成的所有可能二叉树
  let memo = new Array(n + 1);
  // 定义：输入一个 n，生成节点树为 n 的所有可能的满二叉树
  let build = (n) => {
    let res = [];
    // base case
    if (n == 1) {
      res.push(new TreeNode(0));
      return res;
    }
    // 避免冗余计算
    if (memo[n]) return memo[n];
    // 递归生成所有符合条件的左右子树
    for (let i = 1; i < n; i += 2) {
      let j = n - i - 1;
      // 利用函数定义，生成左右子树
      let leftSubTree = build(i);
      let rightSubTree = build(j);
      // 左右子树的不同排列也能构成不同的二叉树
      for (let left of leftSubTree) {
        for (let right of rightSubTree) {
          // 生成根节点并加入到结果集中
          res.push(new TreeNode(0, left, right));
        }
      }
    }
    memo[n] = res;
    return res;
  };
  return build(n);
};


console.log(allPossibleFBT(7))