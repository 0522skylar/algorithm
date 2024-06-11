/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct  = function(ransomNote, magazine) {
  let curArr = magazine.split('')
  for (let i = 0; i < ransomNote.length; i++) {
    let index = curArr.indexOf(ransomNote[i])
    if (index === -1) {
      return false
    } else {
      curArr.splice(index,1, 0)
    }
  }
  return true
};