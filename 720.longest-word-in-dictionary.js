/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort();
    let ans = '';
    let set =  new Set();
    for(let i = 0; i < words.length; i++) {
        if(words[i].length == 1 || set.has(words[i].substring(0, words[i].length - 1))) {
            ans = words[i].length > ans.length ? words[i] : ans;
            set.add(words[i])
        }
    }
    return ans;
    // console.log(words);
};
console.log(longestWord(["w","wo","wor","worl", "world"]))
console.log(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]))