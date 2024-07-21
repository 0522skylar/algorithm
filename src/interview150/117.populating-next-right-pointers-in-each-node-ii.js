/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
  if(!root) {
    return null
  }
  const queue = [root];
  while(queue.length) {
    let len = queue.length;
    let maxVal = null;
    while(len > 0) {
        len --;
        const t = queue.shift();
        if (maxVal !== null) {
          maxVal.next = t
        }
        maxVal = t
        if(t.left) {
            queue.push(t.left)
        }
        if(t.right) {
            queue.push(t.right)
        }
    }
    // res.push(maxVal)
}
return root;
};
function levelOrderV2(root) {
  if(!root) {
      return []
  }
  const res = []; // 每一行中最大的值
  const queue = [root];
  let list = []; // 层次遍历结果
  // bfs
  while(queue.length) {
      let len = queue.length;
      let maxVal = -Number.MAX_VALUE;
      while(len > 0) {
          len --;
          const t = queue.shift();
          
          maxVal = Math.max(maxVal, t.val);
          list.push(t.val)
          if(t.left) {
              queue.push(t.left)
          }
          if(t.right) {
              queue.push(t.right)
          }
      }
      res.push(maxVal)
  }
  return list;
}