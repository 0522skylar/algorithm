/**
 * @param {number[][]} wall
 * @return {number}
 */
/*
var leastBricks = function(wall) {
    let map = new Map();
    let len = 0;
    let arr = [];
    for(let i = 0; i < wall.length; i++) {
        if(wall[i].length > len) {
            len = wall[i].length;
            arr = wall[i];
        }
        map.set(i, [wall[i][0], 0]);
    }
    for(let i = 1; i < arr.length; i++) {
        arr[i] += arr[i-1];
    }
    // console.log(arr)
    let ans = Number.MAX_VALUE;
    for(let i = 0; i < len; i++) {
        let count = 0;
        for(let j = 0; j < wall.length; j++) {
            let item = map.get(j);
            
            if(item[0] < arr[i]) {
                let index = item[1] + 1;
                // console.log('index', index)
                map.set(j, [item[0] + wall[j][index], index])
            }
            if(item[0] === arr[i]) {
                count++;
            }
        }
        if(count != 0) {
            ans = Math.min(ans, count)
        }
    }
    // console.log(map)
    return ans;
};
*/

let leastBricks = (wall) => {
    let ans = 0;
    let map = new Map();
    for(let i = 0; i < wall.length; i++) {
        let rowSum = 0;
        for(let j = 0; j < wall[i].length - 1; j++) {
            rowSum += wall[i][j];
            if(map.has(rowSum)) {
                map.set(rowSum, map.get(rowSum) + 1); 
            }
            else {
                map.set(rowSum, 1)
            }
        }
     }
    //  console.log(map)
     for(let item of map.values()) {
        if(item > ans) {
            ans = item
        }
     }
     return wall.length - ans;
}
console.log(leastBricks( [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]))
console.log(leastBricks( [[1],[1],[1]]))

console.log(leastBricks([
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
    ]))