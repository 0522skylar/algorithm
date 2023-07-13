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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if(depth === 0 || depth === 1) {
        let t = new TreeNode(val);
        if(depth == 1) {
            t.left = root;
        }
        else {
            t.right = root;
        }
        return t;
    }
    if(root != null && depth > 1) {
        root.left = addOneRow(root.left, val, depth > 2 ? depth - 1 : 1);
        root.right = addOneRow(root.right, val, depth > 2 ? depth - 1 : 0);

    }
    return root;
};