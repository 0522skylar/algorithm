/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
     if(intervals.length == 0) {
         return 0;
     }
    intervals = intervals.sort((a,b) => {
        console.log(a[1], b[1],Boolean( a[1] - b[1]), Boolean( a[1] > b[1]))
        return a[1] - b[1]
    })
    console.log(intervals)
    let ans = 1;
    let last = intervals[0][1];
    for(let i = 1; i < intervals.length; i++) {
        if(last <= intervals[i][0] ) {
            ans++;
            last = intervals[i][1]
        }
    }
    return intervals.length - ans;
};

let aa = [2,3,4,5,6,1];
console.log(aa.sort((a,b) => a>b))

// console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]))
// console.log(eraseOverlapIntervals([ [1,2], [1,2], [1,2] ]))
// console.log(eraseOverlapIntervals([ [1,2], [2,3] ]))
console.log(eraseOverlapIntervals([[1,100],[11,22],[1,11],[2,12]])) // 2