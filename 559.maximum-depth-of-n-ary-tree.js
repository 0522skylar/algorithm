/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
 var maxDepth = function(root) {
    if(root === 0) {
        return 0;
    }
    if(root === null) {
        return 0;
    }
    if(root.children === null) {
        return 1;
    }
    let depth = 0;
    for(let i = 0; i < root.children.length; i++) {
        depth = Math.max(depth, maxDepth(root.children[i]))
    }
    return depth + 1;
};