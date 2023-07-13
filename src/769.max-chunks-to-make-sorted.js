const { max } = require("lodash");

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let ans = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count = Math.max(count, arr[i]);
        if(count === i) {
            ans++;
        }
    }
    return ans;
};

console.log(maxChunksToSorted([4,3,0,1,2]))
console.log(maxChunksToSorted([1,0,2,3,4]))