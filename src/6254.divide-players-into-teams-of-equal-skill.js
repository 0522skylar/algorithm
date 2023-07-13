/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    skill.sort((a, b) => a - b);
    console.log(skill)
    let len = skill.length;

    let sum = skill[0] + skill[len - 1];
    let ans = skill[0] * skill[len - 1];

    for(let i = 1; i < len / 2; i++) {
        if(skill[i] + skill[len - 1 - i] !== sum) {
            return -1;
        }
        ans += skill[i] * skill[len - 1 - i]
    }
    return ans
};
console.log(dividePlayers([3,2,5,1,3,4]))
console.log(dividePlayers([3,4]))
console.log(dividePlayers([1,1,2,3]))