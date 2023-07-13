/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let ans = []
    for(let i = 0; i < letters.length; i++) {
        if(letters[i].charCodeAt() > target.charCodeAt()) {
            ans.push(letters[i])
        }
    }
    ans.sort()
    if(ans.length == 0) {
        return letters[0]
    } else {
        return ans[0]
    }
};

console.log(nextGreatestLetter(["c", "f", "j"], 'a'))
console.log(nextGreatestLetter(["c", "f", "j"], 'c'))
console.log(nextGreatestLetter(["x","x","y","y"], 'z'))