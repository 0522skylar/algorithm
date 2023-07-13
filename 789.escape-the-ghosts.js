/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
    // 两点之间距离的计算公式,除去开根号和相乘
    let dis = Math.abs(target[0]) +  Math.abs(target[1])
    // 原点距离终点长度
    for(let i = 0; i < ghosts.length; i++) {
        let item = ghosts[i]
        // 各个阻碍者距离终点距离
        if(Math.abs(item[0] - target[0]) + Math.abs(item[1] - target[1]) <= dis) {
            return false
        }
    }
    return true
};
console.log(escapeGhosts([[1,0],[0,3]],  [0,1])) // t
console.log(escapeGhosts([[1,0]],  [2,0])) // f
console.log(escapeGhosts([[2,0]],  [1,0])) // f