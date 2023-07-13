/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    let reg = /[0-9]/g;
    let str = licensePlate.replace(reg, '');
    str = str.replace(" ", "").toLowerCase();
    console.log(str)
    let ans = '';
    
    for(let i = 0; i < words.length; i++) {
        let item = words[i];
        let index = item.indexOf(str[0]);
        if(index != -1) {
            let count = 1;
            let deleArr =  item.split('')
            deleArr.splice(index, 1)
            item = deleArr.join("");
            let flag = 1;
            while(count < str.length) {
                index = item.indexOf(str[count]);
                if(index === -1) {
                    flag = 0;
                    break;
                }
                deleArr =  item.split('')
                deleArr.splice(index, 1)
                item = deleArr.join("");
                count++;
            }
            if(ans === '' && flag) {
                ans = words[i]
            }
            if(flag && ans.length > words[i].length) {
                ans = words[i]
            }
        }
    }
    return ans;
};

console.log(shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]))
// console.log(shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"]))