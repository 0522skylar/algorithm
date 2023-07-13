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
 * @return {string[][]}
 */
 var printTree = function(root) {
    let m = getDepth(root);
    let n = Math.pow(2, m) - 1;
    // console.log(m, n)
    let res = new Array(m).fill("").map(() => new Array(n).fill(""));
    printRes(res, root, 0, 0, n);
    return res;
};


const getDepth = (root) => {
    if(!root) {
        return 0;
    }
    let left = getDepth(root.left);
    let right = getDepth(root.right);
    return Math.max(left, right) + 1;
}

const printRes = (res, root, dep, left, right) => {
    if(!root) {
        return;
    }
    let str = String(root.val);
    let pos = Math.floor((left + right) / 2);
    // console.log(dep, pos, 123)
    res[dep][pos] = str;
    printRes(res, root.left, dep + 1, left, pos);
    printRes(res, root.right, dep + 1, pos, right);
}

console.log(printTree(buildTree([1,2])))