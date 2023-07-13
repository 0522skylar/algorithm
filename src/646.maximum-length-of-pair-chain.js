/**
 * @param {number[][]} pairs
 * @return {number}
 */

var findLongestChain = function(pairs) {
    pairs.sort((a, b) => {
        return a[1] - b[1]
    })
    let temp = pairs[0][1]
    let ans = 1;
    for(let i = 1; i < pairs.length; i++) {
        if(temp < pairs[i][0]) {
            ans++;
            temp = pairs[i][1]
        }
    }
    return ans;
}


var findLongestChain1 = function(pairs) {
    const n = pairs.length;
    pairs.sort((a, b) => a[0] - b[0]);
    const dp = new Array(n).fill(1);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (pairs[i][0] > pairs[j][1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return dp[n - 1];
};



var findLongestChain2 = function(pairs) {
    pairs.sort((a, b) => a[0] - b[0]);
    const arr = [];
    for (const p of pairs) {
        let x = p[0], y = p[1];
        if (arr.length === 0 || x > arr[arr.length - 1]) {
            arr.push(y);
        } else {
            const idx = binarySearch(arr, x);
            arr[idx] =  Math.min(arr[idx], y);
        }
    }
    return arr.length;
}

const binarySearch = (arr, x) => {
    let low = 0, high = arr.length - 1;
    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);
        if (arr[mid] >= x) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
};


console.log(findLongestChain([[1,2], [2,3], [3,4]]))