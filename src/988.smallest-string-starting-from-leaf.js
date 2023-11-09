/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

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
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function buildTree(val_list) {
  // 数组为空
  if (!val_list || val_list.length === 0) {
    return;
  } // 根节点


  var root = new TreeNode(val_list.shift());
  var nodeQueue = [root]; // 对root节点进行操作，更新node

  while (val_list.length > 0) {
    var node = nodeQueue.shift(); // n = node.level + 1;	// 获取父节点的层级，子节点在该层级上+1
    // 构建：左孩子节点

    if (val_list.length === 0) {
      break;
    }

    var leftVal = val_list.shift();

    if (leftVal != null) {
      node.left = new TreeNode(leftVal);
      nodeQueue.push(node.left);
    } // 构建：右孩子节点


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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
  let ans = ''

  const dfs = (root, arr) => {
    if (root === null) {
      return;
    }
    arr.push(String.fromCharCode(97 + root.val))
      
      if (root.left == null && root.right == null) {
        let temp = arr.reverse().join('')
        temp.reverse() // important
        if (ans == '') {
          ans = temp
        } else {
          ans = ans.localeCompare(temp) > 0 ? temp : ans
        }
      }
      dfs(root.left, arr)
      dfs(root.right, arr)
      arr.pop()
    
  }
  
  dfs(root, [])
  return ans;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function(root) {

  let ans = ""

  if (root == null)
      return ans
  
  let dfs = (node, curr) => {
      
      if (node == null)
          return
      
      curr.push(String.fromCharCode(97 + node.val))

      if (node.left == null && node.right == null) {

          const temp = curr.reverse().join("")
          curr.reverse()
          if (ans == "")
              ans = temp
          else 
              ans = ans.localeCompare(temp) > 0 ? temp : ans

      }

      dfs(node.left, curr)
      dfs(node.right, curr)
      curr.pop()

  }

  dfs(root, [])

  return ans
};

// 作者：Carl
// 链接：https://leetcode.cn/problems/smallest-string-starting-from-leaf/solutions/378409/js-dfs-by-carl-x/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
console.log(smallestFromLeaf(buildTree([0,1,2,3,4,3,4])))
console.log(smallestFromLeaf(buildTree([25,1,3,1,3,0,2])))