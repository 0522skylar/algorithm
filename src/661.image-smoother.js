/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    let r = img.length;
    let c = img[0].length;
    let res = new Array(r).fill(0).map(() => new Array(c).fill(0));
    
    for(let i = 0; i < r; i++) {
        for(let j = 0; j < c; j++) {
            let sum = img[i][j];
            let cnt = 1;
            if(i > 0)  {
                sum += img[i-1][j];
                cnt++;
            }
            if(i < r-1){
                sum += img[i+1][j];
                cnt++;
            }
            if(j > 0 ) {
                sum += img[i][j-1];
                cnt++;
            }
            if(j < c-1){
                sum += img[i][j+1];
                cnt++;
            }
            if(i > 0 && j > 0)    {
                sum += img[i-1][j-1];
                cnt++;
            }
            if(i > 0 && j < c-1)  {
                sum += img[i-1][j+1];
                cnt++;
            }
            if(i < r-1 && j > 0)  {
                sum += img[i+1][j-1];
                cnt++;
            }
            if(i < r-1 && j < c-1){
                sum += img[i+1][j+1];
                cnt++;
            }
            res[i][j] = Math.floor(sum/cnt);
        }
    }
    return res;
};
console.log(imageSmoother([[1,1,1],[1,0,1],[1,1,1]]))
console.log(imageSmoother([[100,200,100],[200,50,200],[100,200,100]]))