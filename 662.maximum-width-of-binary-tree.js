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
 * @return {number}
 */
/*
var widthOfBinaryTree = function(root) {
    let maxVal = 0;
    const dfs = (r, level, index, list) => {
        if(r === null) {
            return
        }
        if(level > list.length) {
            list.push(index)
        }
        maxVal = Math.max(maxVal, index - list[level - 1] + 1);
        // console.log(maxVal)
        dfs(r.left, level + 1, index * 2, list)
        dfs(r.right, level + 1, index * 2 + 1, list)
    }
    let arr = [];
    dfs(root, 1,1 , arr)
    return maxVal;
};
*/
function widthOfBinaryTree(root){ // bfs
    if (!root) return 0
    const queue = [[root, 0]]
    let res = 0
    while (queue.length) {
      const levelLength = queue.length
      let min = 0
      let max = 0
      for (let i = 0; i < levelLength; i++) {
        const [head, pos] = queue.shift();
  
        if (i === 0) min = pos
        if (i === levelLength - 1) max = pos
        head.left && queue.push([head.left, (pos <<1) + 1])
        head.right && queue.push([head.right, (pos <<1) + 2])
      }
  
      const cand = max - min + 1
      cand > res && (res = cand)
    }
  
    return res
};
console.log(widthOfBinaryTree(buildTree( [1,3,2,5,3,null,9])))