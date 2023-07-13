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


/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    return maxTree(nums, 0 , nums.length - 1)
};

const maxTree = (arr, left, right) => {
    if(left > right) {
        return null;
    }
    // let bond = left;
    // for (let i = left + 1; i <= right; ++i) {
    //     if (arr[i] > arr[bond]) {
    //         bond = i;
    //     }
    // }
    let bond = findMax(arr, left, right);
    console.log(bond, arr[bond])
    const  root = new TreeNode(arr[bond]);
    root.left = maxTree(arr, left, bond - 1);
    root.right = maxTree(arr, bond + 1, right)
    return root;
}

const findMax = (arr, l, r) => {
    let max = Number.MIN_VALUE;
    let maxIndex = l;
    for(let i = l + 1; i <= r; ++i) {
        if(max < arr[i]) {
            max = arr[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}

console.log(constructMaximumBinaryTree([3,2,1,6,0,5]))
// console.log(findMax([3,2,1,6,0,5], 0, 5))