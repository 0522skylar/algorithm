
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let flag = true;
    let ans = new Array(mat.length * mat[0].length).fill(0);
    let r = 0;
    let c = 0;
    let row = mat.length;
    let col = mat[0].length;
    for(let i = 0; i < ans.length; i++) {
        ans[i] = mat[r][c];
        if((r + c) % 2 === 0) {
            if(c=== col - 1) {
                r++;
            } else if(r === 0) {
                c++
            } else {
                r--;
                c++;
            }
        } else {
            if(r === row - 1) {
                c++;
            }
            else if( c== 0){
                r++;
            }
            else {
                r++;
                c--;
            }
        }
    }
    return ans;
};

console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]))
console.log(findDiagonalOrder([[1,2],[3,4]]))
// 3 , 3 = 5
// 2 2 = 3
// 2 3 = 4