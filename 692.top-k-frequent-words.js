/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let mymap = new Map();
    let ans = [];
    for(let i = 0; i < words.length; i++) {
        if(mymap.has(words[i])) {
            let count = mymap.get(words[i]);
            mymap.set(words[i], count + 1);
        } else {
            mymap.set(words[i], 0);
        }
    }
    let arr = [];
    for(const key of mymap) {
        arr.push([key[1], key[0]]);
    }
    arr = arr.sort((a, b) => {
        if(a[0] != b[0]) {
            return b[0] - a[0];
        } else {
            return a[1].localeCompare(b[1])
        }
    })

    for(let i = 0; i < k; i++) {
        ans.push(arr[i][1]);
    }
    console.log(arr)
    // ans.sort();

    return ans;
};

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2))
console.log(topKFrequent( ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4))
console.log(topKFrequent( ["i","love","leetcode","i","love","coding"], 3))

console.log(topKFrequent(["aaa","aa","a"], 1))