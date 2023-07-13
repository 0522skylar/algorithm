/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    let arr = s.split('');
    let ans = [];
    const dfs = (str, index) => {
        ans.push(str.join(',').replaceAll(',', ''))
        for(let i = index; i < str.length; i++) {
            if(str[i].charCodeAt() >= 48 && str[i].charCodeAt() <= 57) {
                continue
            } else if(str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
                let temp = str.concat();
                temp[i] = str[i].toLocaleLowerCase();
                dfs(temp, i + 1)
            } else {
                let temp = str.concat();
                temp[i] = str[i].toLocaleUpperCase();
                dfs(temp, i + 1)
            }
        }
    }

    dfs(arr, 0)
    return ans;
};

console.log(letterCasePermutation("a1b2"))
console.log(letterCasePermutation("3z4"))