/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let key = [
        ['q', 'w','e','r','t','y','u','i','o','p'],
        ['a','s','d','f','g','h','j','k','l'],
        ['z','x','c','v','b','n','m']
    ]

    let ans = []

    for(let i = 0; i < words.length; i++) {
        let c = words[i].toLowerCase();
        let first = key[0].indexOf(c[0]) != -1 ? 
        0 : key[1].indexOf(c[0]) != -1 ? 
        1 : key[2].indexOf(c[0]) != -1 ? 2 : 0;

        let second = -1;
        let flag = 0;
        for(let j = 1; j < c.length; j ++) {
            second = key[first].indexOf(c[j]) != -1 ? first : -2
            if(second != first) {
                break;
            }
        }
        if(flag) {
            continue;
        }
        if(second == -1 || second === first) {
            ans.push(words[i])
        }

    }

    return ans;
};
console.log(findWords(["Hello","Alaska","Dad","Peace"]))
// console.log(findWords( ["omk"]))
// console.log(findWords( ["adsdf","sfd"]))