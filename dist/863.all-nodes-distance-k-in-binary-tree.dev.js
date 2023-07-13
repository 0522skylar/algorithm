"use strict";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function distanceK(root, target, k) {
  var list = new Array();
  var map = new Map();
  dfs(root, null, map);
  find(target, null, k, list, map);
  return list;
};

var dfs = function dfs(node, pre, map) {
  if (node === null) {
    return;
  }

  map.set(node, pre);
  pre = node;
  dfs(node.left, pre, map);
  dfs(node.right, pre, map);
};

var find = function find(node, pre, k, list, map) {
  if (node === null) {
    return;
  }

  if (k === 0) {
    list.push(node.val);
  }

  if (node.left != pre) {
    find(node.left, node, k - 1, list, map);
  }

  if (node.right != pre) {
    find(node.right, node, k - 1, list, map);
  }

  if (map.get(node) != pre) {
    find(map.get(node), node, k - 1, list, map);
  }
};