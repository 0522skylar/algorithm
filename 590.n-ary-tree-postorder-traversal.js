/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const res = [];
    helper(root, res);
    return res;
};

const helper = (root, res) => {
    if (root === null) {
        return;
    }
    for (const ch of root.children) {
        helper(ch, res);
    }
    res.push(root.val);

};