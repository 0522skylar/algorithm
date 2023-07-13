/**
 * @param {number[][]} points
 * @return {number}
 */
//  var findMinArrowShots = function(points) {
//     let ans = 1;
//     points.sort((a, b) => {
//         if(a[0] === b[0]) {
//             return a[1] - b[1]
//         }
//         return a[0] - b[0]
//     })
//     console.log(points);
//     let [start, end] = points[0];

//     for(let i = 1; i < points.length; i++) {
//         if(points[i][0] > end) {
//             ans ++;
//             start = points[i][0];
//             end = points[i][1];
//         }
//         else {
//             start = points[i][0];
//             end = Math.min(end, points[i][1])
//         }
//         console.log(start, end)
//     }
//     return ans;
// };


var findMinArrowShots = function(points) {
    if (!points.length ) {
        return 0;
    }

    points.sort((a, b) => a[1] - b[1]);
    console.log(points)
    let pos = points[0][1]
    let ans = 1;
    for (let balloon of points) {
        if (balloon[0] > pos) {
            pos = balloon[1];
            ans++;
        }
    }
    return ans;
};

console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12], [1,2]])) // 2
// console.log(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]])) // 4
// console.log(findMinArrowShots([[9,12],[1,10],[4,11],[8,12],[3,9],[6,9],[6,7]]))// 2