/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a ,b) => a - b) // 胃口
    s.sort((a ,b) => a - b) // 饼干
    let ans = 0;
    for(let i = 0; i < g.length; i++) {
        for(let j = 0; j < s.length; j++) {
            if(s[j] >= g[i]) {
                ans ++;
                s.splice(j, 1);
                break;
            }
        }
    }
    return ans;
};

console.log(findContentChildren([1, 2, 3], [1, 1])) // 1
console.log(findContentChildren([1, 2], [1, 2, 3])) // 2