/**
 * @param {string[]} words
 * @return {string[]}
 */
const strNum = (str) => {
  let obj = {}
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] != undefined) {
      obj[str[i]]++
    } else {
      obj[str[i]] = 1
    }
  }
  return obj
}
var commonChars = function(words) {
  let ans = []
  // let obj = {}
  let arr = []
  for(let j = 0; j < words.length; j++) {
    const str = words[j]
    arr.push(strNum(str))
  }
  let firObj = arr[0]
  for (let i = 0; i < arr.length; i++) {
    // huanghaiyan
    let temp = []
    for (let item in arr[i]) {
      if (firObj[item] != undefined) {
        firObj[item] = Math.min(firObj[item], arr[i][item])
        temp.push(item)
      }
    }
    for (let item in firObj) {
      if (temp.indexOf(item) == -1) {
        firObj[item] = -1
      }
    }
  }
  
  for (let item in firObj) {
    if (firObj[item] != -1) {
      for (let i = 0; i < firObj[item] ; i++) {
        ans.push(item)
      }
    }
  }
  return ans
};
console.log(commonChars(["bella","label","roller"]))
