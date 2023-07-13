/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
 var findLongestWord = function(s, dictionary) {
    let ans = [];
    for(let i = 0; i < dictionary.length; i++) {
        let key = 0;
        for(let j = 0; j < s.length; j++) {
            if(s[j] === dictionary[i][key]) {
                key++;
            }
        }
        if(key === dictionary[i].length) {
            ans.push(dictionary[i])
        }
    }
    if(ans.length > 1) {
        ans.sort((word1, word2) => {
            if (word1.length !== word2.length) {
                return word2.length - word1.length;
            } else {
                return word1.localeCompare(word2);
            }
        })
    }
    return ans[0];
};

console.log(findLongestWord("abpcplea", ["ale","apple","monkey","plea"]))
console.log(findLongestWord("abpcplea", ["a","b","c"]))
console.log(findLongestWord("bab",["ba","ab","a","b"]))
console.log(findLongestWord("abpcplea",["ale","apple","monkey","plea", "abpcplaaa","abpcllllll","abccclllpppeeaaaa"]))