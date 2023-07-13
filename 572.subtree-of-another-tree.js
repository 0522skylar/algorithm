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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (root === null) {
        return subRoot === null;
    }
    const isSame = (p,q) => {
        if(!p || !q) {
            return p === q
        }
        return p.val === q.val && isSame(p.left,q.left) && isSame(p.right,q.right)
    }
    if(isSame(root,subRoot)) {
        return true
    }
    return isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot)
};


console.log(isSubtree(buildTree([3,4,5,1,2]), buildTree([4,1,2])))
console.log(isSubtree(buildTree([3,4,5,1,2,null,null,null,null,0]), buildTree([4,1,2])))
console.log(isSubtree(buildTree([1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,2]), buildTree([1,null,1,null,1,null,1,null,1,null,1,2])))