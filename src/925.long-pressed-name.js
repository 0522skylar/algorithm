/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  let count = 0
  for(let i = 0; i < name.length; i++) {
    if (name[i] === typed[count]) {
      count++
      continue
    } else if(typed[count] === typed[count-1]) {
      count++
      i--
      continue
    } else {
      return false
    }
  }
  for(let j = count - 1; j < typed.length - 1; j++) {
    if(typed[j] != typed[j+1]) {
      return false
    }
  }
  return true
};

console.log(isLongPressedName("saeed", "ssaaedd"))
console.log(isLongPressedName("alex", "aaleex"))
