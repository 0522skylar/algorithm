/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let ans = 0;
    for(let i = 1; i < timeSeries.length; i++) {
        if(timeSeries[i] - timeSeries[i-1] >= duration) {
            ans += duration ;
        }
        else {
            ans += timeSeries[i] - timeSeries[i - 1]
        }
    }
    ans += duration;
    return ans;
};
console.log(findPoisonedDuration([1,4], 2))
console.log(findPoisonedDuration([1,2], 2))