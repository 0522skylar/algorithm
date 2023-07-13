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
 * @param {TreeNode} root
 * @return {TreeNode}
 */


var subtreeWithAllDeepest = function subtreeWithAllDeepest(root) {
  if (root == null) {
    return null;
  } else {
    var leftDep = maxDep(root.left);
    var rightDep = maxDep(root.right);

    if (leftDep === rightDep) {
      return root;
    } else if (leftDep > rightDep) {
      return subtreeWithAllDeepest(root.left);
    } else {
      return subtreeWithAllDeepest(root.right);
    }
  }
};

var maxDep = function maxDep(root) {
  if (root == null) {
    return 0;
  } else {
    return Math.max(maxDep(root.left), maxDep(root.right)) + 1;
  }
};

console.log(subtreeWithAllDeepest(buildTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])));