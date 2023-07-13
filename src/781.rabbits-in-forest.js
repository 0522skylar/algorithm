/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    let fill = new Array(1000).fill(0)
    let ans = 0;
    for(let i = 0; i < answers.length; i++) {
        if(fill[answers[i]] > 0) {
            fill[answers[i]] --
        } else {
            fill[answers[i]] = answers[i];
            ans += answers[i] + 1
        }
    }
    return ans;
    /*
    let map = new Map();
    let count = 0;
    for(let i = 0; i < answers.length; i++) {
        if(map.has(answers[i])) {
            map.set(answers[i], map.get(answers[i]) + 1)
        } else {
            count++;
            map.set(answers[i], 1)
        }
    }
    if(count > 1) {
        let ans = 0;
        for(let item of map) {
            // console.log(item[1])
            if(item[1] === 0) {
                ans += 1;
            }
            else if(item[1] > item[0] ) {
                ans += item[1] * item[0]
            } else {
                ans += item[0] + 1

            }
        }
        return ans;
    } else {
        return answers[0] + 1
    }
    */
};
console.log(numRabbits([1,1,2]))
console.log(numRabbits([0,0,1,1,1]))