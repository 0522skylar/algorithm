/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    // console.log(matrix.length, matrix[0].length)
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(i - 1 >= 0 && j - 1 >= 0 ) {
                if(matrix[i][j] !== matrix[i-1][j-1]) {
                    return false
                }
            }
        }
    }
    return true
};

console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]))
console.log(isToeplitzMatrix([[1,2],[2,2]]))