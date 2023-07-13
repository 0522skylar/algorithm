const e = require("express");

/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {

    const concatStr = (str) => {
        let reg = /\+|\-/g
        let nums = str.split(reg)
        if (!nums[0]) nums.shift()
        let symbols = str.match(reg) || []
        if (str[0] !== "-") symbols.unshift("+")

        let ans = []
        for(let i = 0; i < nums.length; i++) {
            ans.push(symbols[i] + nums[i])
        }
        return ans;
    }
    const params = (exp) => {
        let token = concatStr(exp)
        let res = new Array(2).fill(0);
        for(let i = 0; i < token.length; i++) {
            if(token[i] === '+x' || token[i] === 'x') {
                res[0]++;
            }
            else if(token[i] === '-x') {
                res[0]--;
            }
            else if(token[i].indexOf('x') != -1) {
                res[0] += Number(token[i].substring(0, token[i].indexOf('x')));
            }
            else {
                res[1] += Number(token[i]);
            }
        }
        return res;
    }
    let left = params(equation.split("=")[0])
    let right = params(equation.split("=")[1])

    console.log(left, right)
    left[0] -= right[0]
    left[1] = right[1] - left[1]

    if(left[0] === 0 && left[1] == 0) {
        return "Infinite solutions"
    }
    if(left[0] === 0) {
        return 'No solution'
    }
    return "x="+ left[1]/left[0];
    
};

console.log(solveEquation("x+5-3+x=6+x-2"))
console.log(solveEquation("x=x"))
console.log(solveEquation("2x=x"))