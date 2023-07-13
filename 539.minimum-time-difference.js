/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let arr = [];
    arr = timePoints.map(item => {
        let res = item.split(":");
        return Number(res[0]) * 60 + Number(res[1]);
    })
    arr.sort((a, b) => a - b);
    let ans = Number.MAX_VALUE;
    for(let i = 1; i < arr.length; i++) {
        let res = arr[i] - arr[i-1];
        if(res > 720) {
            res = arr[i-1] + 1440 - arr[i]
        }
        ans = Math.min(ans, res);
    }
    return  Math.min(ans, arr[0] + 1440 - arr[arr.length - 1]);
};
console.log(findMinDifference(["23:59","00:00"]))
console.log(findMinDifference(["00:00","23:59","00:00"]))
console.log(findMinDifference(["01:01","02:01","03:00"]))
console.log(findMinDifference(["00:00","04:00","22:00"]))