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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let ans = [];
    let map = new Map();
    dfs(root, ans, map);
    return ans;
};

const dfs = (root, ans, map) => {
    if(!root) {
        return '#'
    }
    let str = '';
    // 如果没有空字符串,就会分不清楚左右子树
    str = String(root.val) +' '+ dfs(root.left, ans, map) +' '+ dfs(root.right, ans, map);
    if(map.has(str) && map.get(str) === 1) {
        ans.push(root)
    }
    if(map.has(str)) {
        map.set(str, map.get(str)+1)
    }
    else {
        map.set(str, 1)
    }
    return str;
}


console.log(findDuplicateSubtrees(buildTree([1,2,3,4,null,2,4,null,null,4])))
console.log(findDuplicateSubtrees(buildTree([2,1,1])))
console.log(findDuplicateSubtrees(buildTree([2,2,2,3,null,3,null])))
console.log(findDuplicateSubtrees(buildTree([2,1,11,11,null,1]))) // []