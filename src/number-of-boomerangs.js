/**
 * @param {number[][]} points
 * @return {number}
 */
 var numberOfBoomerangs = function(points) {
    let n = points.length;
    let ans = 0;
    for(let i = 0; i < n; i++) {
        let dicts = new Map();
        for(let j = 0; j < n; j++) {
            if(i == j) {
                continue;
            }
            let x1 = points[i][0];
            let y1 = points[i][1];
            let x2 = points[j][0];
            let y2 = points[j][1];
            let d = (x2-x1)*(x2-x1) + (y2-y1)*(y2-y1);
            dicts.set(d, (dicts.get(d) || 0) + 1)
        }
        // console.log(dicts);
        // for(let [_, key] of dicts.entries()) {
        //     ans += key * (key -1)
        // }
        for(let key of dicts) {
            ans += key[1] * (key[1] -1)
        }
    }
    return ans;
};
console.log(numberOfBoomerangs([[0,0],[1,0],[2,0]])) // [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]