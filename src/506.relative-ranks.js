/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const arr = score.concat();
    score.sort((a,b) => b - a);
    let ans = [];
    for(let i = 0; i < arr.length; i++) {
        let index = (score.indexOf(arr[i]) + 1).toString();
        if(index === '1') {
            ans.push("Gold Medal")
            continue;
        } else if(index == '2') {
            ans.push("Silver Medal")
            continue;
        }
        else if(index === '3') {
            ans.push("Bronze Medal")
            continue;
        }
        ans.push(index)
    }
    // console.log(arr, score)
    
    return ans;
};
console.log(findRelativeRanks([5,4,3,2,1]))
console.log(findRelativeRanks([10,3,8,9,4]))