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
 * @return {number}
 */
/*
var findBottomLeftValue = function (root) {
    let ans = 0;
    let height = 0;
    const bfs = (depth, root) => {
        if(!root) {
            return
        }
        if(depth >= height) {
            height++;
            ans = root.val;
        }
        bfs(depth + 1, root.left)
        bfs(depth + 1, root.right)
    }
    bfs(0, root);
    return ans;
};
*/
// 新建树节点类
function TreeNode (val, left, right) {
    this.val = (val === undefined) ? 0 : val;
    this.left = (left === undefined) ? null : val;
    this.right = (right === undefined) ? null : val;
}

// 入参一个数组，生成二叉树
/*
function buildTree(arr) {
	// 若没有参数或数组长度为0，则视为空树
    if (!arr || arr.length === 0) {
        return null;
    }
    
    // 先将数组第一个元素 设置为根结点
    let root = new TreeNode(arr.shift());
    
    // 节点队列 陆续从数组中为节点添加左右叶子
    let nodeQueue = [root];
    
    // 当数组剩余仍有元素，则持续为最近的节点添加叶子
    while (arr.length > 0) {
    
        // 从节点数组头部取出节点 为了添加叶子备用
        let node = nodeQueue.shift();
        
        // 若数组中无元素，则视为无叶子可添加,返回即可
        if (!arr.length) {
            break;
        }
        
        // 先从节点数组中取一个元素 转化为节点 拼接为左叶子
        let left = new TreeNode(arr.shift());
        node.left = left;
        nodeQueue.push(left);
        
        // 每拼接一片叶子节点 重新判断剩余叶子数量 若无剩余视为拼接完毕
        if (!arr.length) {
            break;
        }
        
        // 左侧叶子拼完，右边一样的操作
        let right = new TreeNode(arr.shift());
        node.right = right;
        nodeQueue.push(right);
    }
    
    // 最后返回根结点，通过根结点就能得到整个二叉树的结构
    return root;
}
*/
function creatTree (l){
    if(l[0]){
        let root = TreeNode(l[0]);
        let nodes = [root];
        let id = 1;
        while(nodes[0] && id < l.length){
            let node = nodes[0];
            if(l[id]){
                node.left = TreeNode(l[id]);
            } else {
                node.left = null;
            }
            nodes.push(node.left);
            if(id < l.length - 1 && l[id + 1]){
                node.right = TreeNode(l[id + 1]);
            } else {
                node.right = null;
            }
            node.push(node.right);
            id += 2;
            nodes.shift();
        }
        return root;
    } else {
        return null;
    }
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


var findBottomLeftValue = function(root) {
    let ret = 0;
    const queue = [root];
    while (queue.length) {
        const p = queue.shift();
        if (p.right) {
            queue.push(p.right);
        }
        if (p.left) {
            queue.push(p.left);
        }
        ret = p.val;
    }
    return ret;
};

console.log(findBottomLeftValue(buildTree([2,1,3])))
console.log(findBottomLeftValue(buildTree([1,2,3,4,null,5,6,null,null,7])))