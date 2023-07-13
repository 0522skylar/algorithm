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
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    if(root === null) {
        return []
    }
    let map = new Map();
    let maxCnt = 0;
    const helper = (root) => {
        if(!root) {
         return 0;
        }
        let sum = root.val + helper(root.left) + helper(root.right);
        map.set(sum, (map.get(sum) || 0) + 1 );
        maxCnt = Math.max(maxCnt, map.get(sum));
        return sum
     }
    helper(root);
    let list = [];
    for(let [s, c] of map.entries()) {
        if(c == maxCnt) {
            list.push(s)
        }
    }

    const ans = new Array(list.length);
    for(let i = 0; i < list.length; i++) {
        ans[i] = list[i]
    }
    return ans;
};

