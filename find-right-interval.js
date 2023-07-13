/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
/*
 var findRightInterval = function(intervals) {
    if(intervals.length == 1) {
        return [-1];
    }
    let ans = [];
    for(let i = 0; i < intervals.length; i++) {
        let count = undefined;
        for(let j = 0; j < intervals.length; j++) {
            if(intervals[j][0] >= intervals[i][1]) {
                // count = count == undefined ? j : Math.min(count, j)
                if(count === undefined) {
                    count = j;
                }
                if(intervals[count][0] > intervals[j][0]) {
                    count = j
                }
            }
        }
        if(count === undefined) {
            ans.push(-1);
        }
        else {
            ans.push(count);
        }
    }
    return ans;
};

*/

var findRightInterval = function (intervals) {
    let originmap = new Map();
    for (let i = 0; i < intervals.length; i++) {
        originmap.set(intervals[i][0], i);
    }
    let sortintervals = JSON.parse(JSON.stringify(intervals));
    sortintervals.sort((a, b) => a[0] - b[0]);
    console.log(sortintervals)
    let sortmap = new Map();
    for (let i = 0; i < sortintervals.length; i++) {
        sortmap.set(sortintervals[i][0], i);
    }
    let ans = [];
    for (let i = 0; i < intervals.length; i++) {
        let starti = intervals[i][0];
        let endi = intervals[i][1];
        let index = sortmap.get(starti);
        let rightIndex = -1;
        for (let j = index; j < sortintervals.length; j++) {
            if (sortintervals[j][0] >= endi) {
                rightIndex = originmap.get(sortintervals[j][0]);
                break;
            }
        }
        ans.push(rightIndex);
    }
    return ans;
};
// console.log(findRightInterval([[1,2]])) // -1
// console.log(findRightInterval([[3,4],[2,3],[1,2]])) // [-1,0,1]
console.log(findRightInterval( [[1,4],[2,3],[3,4]])) // [-1,2,-1]