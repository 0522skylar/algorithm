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
    this.val = (val === undefined) ? 0 : val;
    this.left = (left === undefined) ? null : left;
    this.right = (right === undefined) ? null : right;
}

function buildTree(val_list) {
    // 数组为空
    if (!val_list || val_list.length === 0) {
        return;
    }
    // 根节点
    var root = new TreeNode(val_list.shift());

    var nodeQueue = [root];
    // 对root节点进行操作，更新node
    while (val_list.length > 0) {
        var node = nodeQueue.shift();
        // n = node.level + 1;	// 获取父节点的层级，子节点在该层级上+1
        // 构建：左孩子节点
        if (val_list.length === 0) {
            break;
        }
        var leftVal = val_list.shift();
        if (leftVal != null) {
            node.left = new TreeNode(leftVal);
            nodeQueue.push(node.left);
        }
        // 构建：右孩子节点
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
 * @return
 * 
 *  {number}
 */

var longestUnivaluePath = function (root) {
    let maxL = 0; // 必须要在里面,形成闭包, 否则会保留上次结果

    if (root === null) {
        return 0;
    }
    const getMaxL = (root, val) => { // 两种方法遍历都对
        if(root === null) {
            return 0;
        }
        let left = getMaxL(root.left, root.val)
        let right = getMaxL(root.right, root.val)
    
        maxL = Math.max(maxL, left + right);
        if(root.val === val) {
            return Math.max(left, right) + 1;
        }
        return 0;
    }
    
    const getMaxLMethod2 = (node) => {
        if (node == null) return 0;
        let left = getMaxL(node.left);
        let right = getMaxL(node.right);
        let arrowLeft = 0,
            arrowRight = 0;
        if (node.left != null && node.left.val == node.val) {
            arrowLeft = left + 1;
        }
    
        if (node.right != null && node.right.val == node.val) {
            arrowRight = right + 1;
        }
    
        maxL = Math.max(maxL, arrowLeft + arrowRight);
        return Math.max(arrowLeft, arrowRight);
    }
    // getMaxL(root);
    getMaxLMethod2(root)
    return maxL;
};



/*
const getMaxL = (root, val) => {
    if(root === null) {
        return 0;
    }
    let left = getMaxL(root.left, root.val)
    let right = getMaxL(root.right, root.val)

    maxL = Math.max(maxL, left + right);
    console.log(left, right)
    if(root.val === val) {
        return Math.max(left, right) + 1;
    }
    return 0;
}
*/


console.log(longestUnivaluePath(buildTree([5,4,5,1,1,5])))
console.log(longestUnivaluePath(buildTree([1,4,5,4,4,5])))
console.log(longestUnivaluePath(buildTree([1])))