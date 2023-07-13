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

// 新建树节点类
function TreeNode (val, left, right) {
    this.val = (val === undefined) ? 0 : val;
    this.left = (left === undefined) ? null : val;
    this.right = (right === undefined) ? null : val;
}


 function buildTree(val_list) {
	// 数组为空
	if(!val_list || val_list.length === 0)
		return ;
		
	// 根节点
	var root = new TreeNode(val_list.shift());
	
	var nodeQueue = [root];
	
	// 对root节点进行操作，更新node
	while(val_list.length > 0){
		var node  = nodeQueue.shift();
		// n = node.level + 1;	// 获取父节点的层级，子节点在该层级上+1
		
		// 构建：左孩子节点
		if(val_list.length === 0)
			break;
		var leftVal = val_list.shift();
		if(leftVal) {
			node.left = new TreeNode(leftVal);
			nodeQueue.push(node.left);
		}
		
		// 构建：右孩子节点
		if(val_list.length === 0)
			break;
		var rightVal = val_list.shift();
		if(rightVal) {
			node.right = new TreeNode(rightVal);
			nodeQueue.push(node.right);
		}
	}
	
	return root;
}
 var findMode = function(root) {
    let base = 0, count = 0, maxCount = 0;
    let answer = [];

    const update = (x) => {
        if (x === base) {
            ++count;
        } else {
            count = 1;
            base = x;
        }
        if (count === maxCount) {
            answer.push(base);
        }
        if (count > maxCount) {
            maxCount = count;
            answer = [base];
        }
    }

    const dfs = (o) => {
        if (!o) {
            return;
        }
        dfs(o.left);
        update(o.val);
        dfs(o.right);
    }

    dfs(root);
    return answer;
};

console.log(findMode(buildTree([1,null,2,2])))
console.log(findMode(buildTree([0])))