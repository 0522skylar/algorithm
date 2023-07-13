/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

function TreeNNode (val, children) {
    this.val = val;
    this.children = children ? children : [];
}


function buildTreeN(val_list) {
    // 数组为空
	if(!val_list || val_list.length === 0) {
		return ;
    }
	// 根节点
	var root = new TreeNNode(val_list.shift());
    var nodeQueue = [root];
	// 对root节点进行操作，更新node
	while(val_list.length > 0){

		var node  = nodeQueue.shift();
		// n = node.level + 1;	// 获取父节点的层级，子节点在该层级上+1
		// 构建：左孩子节点
		if(val_list.length === 0) {
			break;
        }
		var childVal = val_list.shift();
        // node.val = childVal;
        // node.children = [];
        while(childVal != null) {
			node.children.push(new TreeNNode(childVal))
		    childVal = val_list.shift();
        }
        nodeQueue.push(node.children);
	
	}
	return root;
}


/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    const res = [];
    helper(root, res);
    return res;
}

const helper = (root, res) => {
    if (root === null) {
        return;
    }
    res.push(root.val);
    for (const ch of root.children) {
        helper(ch, res);
    }
};

// console.log(preorder(buildTreeN([1,null,3,2,4,null,5,6])))
console.log(buildTreeN([1,null,3,2,4,null,5,6]))

/*
var preorder = function(root) {
    const res = [];
    if (root == null) {
        return res;
    }

    const stack = [];
    stack.push(root);
    while (stack.length) {
        const node = stack.pop();
        res.push(node.val);
        for (let i = node.children.length - 1; i >= 0; --i) {
            stack.push(node.children[i]);
        }
    }
    return res;
};
*/
