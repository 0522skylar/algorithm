/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var updateMatrix = function(mat) {
    let map = new Array(mat.length);    // 用于输出的数组
    let quque = [];                     // 队列
     /* 给map赋初值*/
    for(let i = 0; i < mat.length; i++){
        map[i] = new Array(mat[0].length).fill(Infinity);
        for(let j = 0; j < mat[0].length; j++){
            if(mat[i][j] == 0){
                quque.push([i,j]);
                map[i][j] = 0;
            }
        }
    }
   /*遍历0周边的数，如果大于0+1，则赋值，将此推进队列，继续遍历*/
    while(quque.length > 0){
        let size = quque.length;
        for(let k = 0; k < size; k++){
            let [i,j] = quque.shift();
           
            if(i - 1 >= 0 && map[i - 1][j] > map[i][j] + 1){
                map[i - 1][j] = map[i][j] + 1;
                quque.push([i - 1,j])
            }
            if(i + 1 < map.length && map[i + 1][j] > map[i][j] + 1){
                map[i + 1][j] = map[i][j] + 1;
                quque.push([i + 1,j])
            }
            if(j - 1 >= 0 && map[i][j - 1] > map[i][j] + 1){
                map[i][j - 1] = map[i][j] + 1;
                quque.push([i,j - 1])
            }
            if(j + 1 < map[0].length && map[i][j + 1] > map[i][j] + 1){
                map[i][j + 1] = map[i][j] + 1;
                quque.push([i,j + 1])
            }
        }
        
    }
    return map;
};



const updateMatrixTwo = (mat) => {
    let map = new Array(mat.length);

    let queue = [];

    for(let i = 0; i < mat.length; i++) {
        map[i] = new Array(mat[0].length).fill(Number.MAX_VALUE);

        for(let j = 0; j < mat[0].length; j++) {
            if(mat[i][j] === 0) {
                queue.push([i, j]);

                map[i][j] = 0;
            }
        }
    }

    while(queue.length > 0) {
        let size = queue.length;
        for(let k = 0; k < size; k++) {
            let [i, j] = queue.shift();
            if(i - 1 >= 0 && map[i - 1][j] > map[i][j] + 1) {
                map[i-1][j] = map[i][j] + 1;
                queue.push([i - 1, j])
            }

            if(i + 1 < map.length && map[i + 1][j] > map[i][j] + 1) {
                map[i + 1][j] = map[i][j] + 1;
                queue.push([i + 1, j])
            }

            if(j - 1 >= 0 && map[i][j - 1] > map[i][j] + 1) {
                map[i][j-1] = map[i][j] + 1;
                queue.push([i, j - 1])
            }

            if(j + 1 < map[0].length && map[i][j + 1] > map[i][j] + 1) {
                map[i][j + 1] = map[i][j] + 1;
                queue.push([i, j + 1])
            }
        }
    }

    return map
}

console.log(updateMatrixTwo([[0,0,0],[0,1,0],[1,1,1]]))