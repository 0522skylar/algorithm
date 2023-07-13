/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            ans.push([ arr[i] / arr[j], arr[i], arr[j]])
        }
    }

    ans.sort((a, b) => {
        return a[0] - b[0]
    })
    // console.log(ans)

    return [ans[k - 1][1], ans[k - 1][2]]
};

console.log(kthSmallestPrimeFraction([1,2,3,5], 3))
console.log(kthSmallestPrimeFraction([1,7], 1))