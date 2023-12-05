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

// dfs层次遍历二叉树
// var levelOrder = function(root) {
//     if (root === null)
//         return []
//     let result = [];
//     let deep = 0;

//     recursion(root);
//     function recursion(root) {
//         deep++;
//         if (result[deep - 1]) {
//             result[deep - 1].push(root)
//         }
            
//         else {
//             result[deep - 1] = [root]
//         }
            
//         if (root.left != null) {
//             recursion(root.left)
//         }
           
//         if (root.right !== null) {
//             recursion(root.right)
//         }
//         deep--
//         return;
//     }
//     return result;
// };
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
  
  const dfs = (root, max, min) => {
    if (root === null) {
      return max - min;
    }
    max = Math.max(max, root.val)
    min = Math.min(min, root.val)
    let leftDiff = dfs(root.left, max, min)
    let rightDiff = dfs(root.right, max, min)

    return Math.max(leftDiff, rightDiff)
  }
  return dfs(root, root.val, root.val)
};

console.log(maxAncestorDiff(buildTree([8,3,10,1,6,null,14,null,null,4,7,13])))
console.log(maxAncestorDiff(buildTree([1,null,2,null,0,3])))