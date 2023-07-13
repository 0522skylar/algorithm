"use strict";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 新建树节点类
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function buildTree(val_list) {
  // 数组为空
  if (!val_list || val_list.length === 0) {
    return;
  } // 根节点


  var root = new TreeNode(val_list.shift());
  var nodeQueue = [root]; // 对root节点进行操作，更新node

  while (val_list.length > 0) {
    var node = nodeQueue.shift(); // n = node.level + 1;	// 获取父节点的层级，子节点在该层级上+1
    // 构建：左孩子节点

    if (val_list.length === 0) {
      break;
    }

    var leftVal = val_list.shift();

    if (leftVal != null) {
      node.left = new TreeNode(leftVal);
      nodeQueue.push(node.left);
    } // 构建：右孩子节点


    if (val_list.length === 0) {
      break;
    }

    var rightVal = val_list.shift();

    if (rightVal != null) {
      node.right = new TreeNode(rightVal);
      nodeQueue.push(node.right);
    }
  }

  return root;
}
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */


var leafSimilar = function leafSimilar(root1, root2) {
  var dfs = function dfs(root, arr) {
    if (!root) {
      return;
    } else {
      if (root.left === null && root.right === null) {
        arr.push(root.val);
      } else {
        dfs(root.left, arr);
        dfs(root.right, arr);
      }
    }
  };

  var arr1 = [];
  var arr2 = [];
  dfs(root1, arr1);
  dfs(root2, arr2);
  console.log(arr1, arr2);

  if (arr1.join(',') === arr2.join(',')) {
    return true;
  } else {
    return false;
  }
};

console.log(leafSimilar(buildTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]), buildTree([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]))); // [3,5,1,6,2,9,8,null,null,7,14]
// [3,5,1,6,71,4,2,null,null,null,null,null,null,9,8]