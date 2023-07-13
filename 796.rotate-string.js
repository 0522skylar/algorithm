/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
  if(s.length != goal.length) {
    return false
  }
  
  return (s + s).indexOf(goal) != -1
};

console.log(rotateString("abcde", "cdeab"))
console.log(rotateString("abcde", "abced"))
console.log(rotateString("bbbacddceeb",
"ceebbbbacdd"))