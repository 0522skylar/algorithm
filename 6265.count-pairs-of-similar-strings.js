/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    let ans = 0;

    for(let i = 0; i < words.length; i++) {
        let set = new Set(words[i].split(""));
        for(let j = words.length - 1; j >= 0; j--) {
            if(i != j) {
                let setb = new Set(words[j].split(""));
                let arra = [...set].sort().join('');
                let arrb = [...setb].sort().join('');
                if(arra.length === arrb.length && arra === arrb) {
                    ans++;
                }
            }
            
        }
    }
    return ans / 2;
};

console.log(similarPairs(["aba","aabb","abcd","bac","aabc"]))
console.log(similarPairs(["aabb","ab","ba"]))
console.log(similarPairs(["nba","cba","dba"]))