/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let ans = [0, 0, 0, 0];
    for(let i = 0; i < moves.length; i++) {
        if(moves[i] === 'U') {
            ans[0]++;
        }
        if(moves[i] === 'D') {
            ans[1]++;
        }
        if(moves[i] === 'R') {
            ans[2]++;
        }
        if(moves[i] === 'L') {
            ans[3]++;
        }
    }
    let one = Math.abs(ans[1] - ans[0]);
    let two = Math.abs(ans[3] - ans[2]);
    return one === two && two === 0;
};