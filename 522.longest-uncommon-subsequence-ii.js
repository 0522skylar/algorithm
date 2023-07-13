/**
 * @param {string[]} strs
 * @return {number}
 */
 var findLUSlength = function(strs) {
    const len = strs.length;
    let ans = -1;
    for (let i = 0; i < len; ++i) {
        let check = true;
        for (let j = 0; j < len; ++j) {
            if (i !== j && isSubseq(strs[i], strs[j])) {
                check = false;
                break;
            }
        }
        if (check) {
            ans = Math.max(ans, strs[i].length);
        }
    }
    return ans;
};

const isSubseq = (s, t) => {
    let ptS = 0, ptT = 0;
    while (ptS < s.length && ptT < t.length) {
        if (s[ptS] === t[ptT]) {
            ++ptS;
        }
        ++ptT;
    }
    return ptS === s.length;
}


console.log(findLUSlength(["aba","cdc","eae"]))
console.log(findLUSlength(["aaa","aaa","aa"]))