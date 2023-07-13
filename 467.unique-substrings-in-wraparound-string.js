/**
 * @param {string} p
 * @return {number}
 */
/*
var findSubstringInWraproundString = function(p) {
    let ans = 0;
    let myset = new Set();
    const boolzai = (p) => {
        let str = "zabcdefghijklmnopqrstuvwxyza";
        if(str.indexOf(p) != -1) {
            return 1;
        }
        return 0;
    }
    for(let i = 0; i < p.length; i++) {
        if(!myset.has(p[i])) {
            myset.add(p[i]);
            ans += boolzai(p[i])
        }
        let j = i;
        while(j != 0) {
            let str = p.slice(j-1, i+1);
            if(!myset.has(str)) {
                myset.add(str);
                ans += boolzai(str)
            }
            j --;
        }
    }
    return ans;
};
*/

var findSubstringInWraproundString = function(p) {
    let count = new Array(26).fill(0);
    for(let i = 0; i < p.length; i++) {
        let j = 1;
        while(i + j < p.length && p[j + i].charCodeAt() % 26 === (p[i + j - 1].charCodeAt() + 1) % 26) {
            // console.log(p[j + i], p[i + j - 1],'-----------', i)
            j++;
        }
        count[p[i].charCodeAt()- 'a'.charCodeAt()] = Math.max(count[p[i].charCodeAt() - 97], j);
    }
    let ans = 0;
    for(let j = 0; j < 26; j++) {
        ans += count[j]
    }
    return ans;
}
// console.log(findSubstringInWraproundString("zab")) // 6
// console.log(findSubstringInWraproundString("cac")) // 2
// console.log(findSubstringInWraproundString("a")) // 1
// console.log(findSubstringInWraproundString("abaab")) // 3
console.log(findSubstringInWraproundString("abcdef"))
// console.log(findSubstringInWraproundString("uvwxyzabcdefg")) // 91
