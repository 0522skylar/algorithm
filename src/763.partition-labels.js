/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let ans = [];
    
    let map = new Map();
    let start = 0;
    let end = 0;
    for(let i = 0; i < s.length; i++) {
        map.set(s[i], i);
    }
    for(let i = 0; i < s.length; i++) {
        end = Math.max(end, map.get(s[i]));
        if(i === end) {
            ans.push(end - start + 1)
            start = i + 1;
        }
    }
    return ans;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"))
console.log(partitionLabels("eccbbbbdec"))

