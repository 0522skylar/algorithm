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

// dfs层次遍历二叉树
var levelOrder = function(root) {
    if (root === null)
        return []
    let result = [];
    let deep = 0;

    recursion(root);
    function recursion(root) {
        deep++;
        if (result[deep - 1]) {
            result[deep - 1].push(root)
        }
            
        else {
            result[deep - 1] = [root]
        }
            
        if (root.left != null) {
            recursion(root.left)
        }
           
        if (root.right !== null) {
            recursion(root.right)
        }
        deep--
        return;
    }
    return result;
};

// 层次遍历bfs
function levelOrderV2(root) {
    if(!root) {
        return []
    }
    const res = []; // 每一行中最大的值
    const queue = [root];
    let list = []; // 层次遍历结果
    // bfs
    while(queue.length) {
        let len = queue.length;
        let maxVal = -Number.MAX_VALUE;
        while(len > 0) {
            len --;
            const t = queue.shift();
            
            maxVal = Math.max(maxVal, t.val);
            list.push(t.val)
            if(t.left) {
                queue.push(t.left)
            }
            if(t.right) {
                queue.push(t.right)
            }
        }
        res.push(maxVal)
    }
    return list;
}
//https://www.yuque.com/tiantian-teysg/qiq464/dl28kp
console.log(levelOrder(buildTree([1,3,2,5,3,null,9])))