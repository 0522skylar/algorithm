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
 */
var CBTInserter = function(root) {
  this.root = root
};

/** 
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function(val) {
  let res = 0
  let queue = []
  queue.push(this.root)
  while(queue.length) {
    let size = queue.length
    for(let i = 0; i < size; i++) {
      let temp = queue.shift()
      if (temp.left === null && temp.right === null) {
        temp.left = new TreeNode(val)
        res = temp.val
        while(queue.length) {
          queue.shift()
        }
        break
      }
      if(temp.right === null) {
        temp.right = new TreeNode(val)
        res = temp.val
        while(queue.length) {
          queue.shift()
        }
        break
      }
      if(temp.left != null) {
        queue.push(temp.left)

      }
      if(temp.right != null) {
        queue.push(temp.right)
      }
    }
  }
  return res
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
  return this.root
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */

var obj = new CBTInserter(buildTree([1,2]))
var param_1 = obj.insert(3)
var param_3 = obj.insert(4)
var param_2 = obj.get_root()

console.log(param_1)
console.log(param_3)
console.log(param_2)


var CBTInserter = function(root) {
  this.candidate = [];
  this.root = root;

  const queue = [];
  queue.push(root);

  while (queue.length) {
      const node = queue.shift();
      if (node.left) {
          queue.push(node.left);
      }
      if (node.right) {
          queue.push(node.right);
      }
      if (!(node.left && node.right)) {
          this.candidate.push(node);
      }
  }
};

CBTInserter.prototype.insert = function(val) {
  const child = new TreeNode(val);
  const node = this.candidate[0];
  let ret = node.val;
  if (!node.left) {
      node.left = child;
  } else {
      node.right = child;
      this.candidate.shift();
  }
  this.candidate.push(child);
  return ret;
};

CBTInserter.prototype.get_root = function() {
  return this.root;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/complete-binary-tree-inserter/solutions/1689234/wan-quan-er-cha-shu-cha-ru-qi-by-leetcod-lf8t/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。