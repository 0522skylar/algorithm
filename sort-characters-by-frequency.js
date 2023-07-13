/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) { // 桶排，哈希
    let map = new Map();
    for(let i = 0; i < s.length; i++) {
        if(map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        }
        else {
            map.set(s[i], 1)
        }
    }
    let arr = [...map];
    arr.sort((a,b) => {
        return b[1] - a[1]
    })
    // console.log(arr)
    let ans = '';

    for(let i = 0; i < arr.length; i++) {
        while(arr[i][1] -- ) {
            ans += arr[i][0]
        }
    }
    return ans;
};

console.log(frequencySort("tree"))
console.log(frequencySort("cccaaa"))