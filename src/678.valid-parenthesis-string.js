
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    /*let arr = [];
    let xing = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            arr.push(s[i]);
        } else if(s[i] === '*') {
            xing.push(s[i]);
        } else {
            if(arr.length != 0) {
                arr.pop();
            }
        }
    }
    console.log(arr, xing)
    if(arr.length === 0) {
        return true
    } else if(arr.length === xing.length) {
        return true
    } else {
        return false
    }*/

    let l = 0;//l代表左括号比较多，星号作为右括号时左括号的数量
    let h = 0; //h代表右括号比较多，星号作为左括号时左括号的数量
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            l++;
            h++;
        } else if(s[i] === ')') {
            if(l > 0) {
                l--;
            }
            h--;
        } else if(s[i] === '*') {
            if(l > 0) {
                l--;
            }
            h++;
        }
        if(h < 0) {
            return false
        }
    }
    return l === 0;
};

console.log(checkValidString("(((((()*)(*)*))())())(()())())))((**)))))(()())()"))
console.log(checkValidString("(*)"))