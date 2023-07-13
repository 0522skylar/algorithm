/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  let map = new Map();
  for (let i = 0; i < cpdomains.length; i++) {
    let item = cpdomains[i].split(' ');
    let arr = item[1].split('.')
    if(map.has(item[1])) {
      map.set(item[1], map.get(item[1]) + Number(item[0]))
    } else {
      map.set(item[1], Number(item[0]))
    }
    // console.log(map, item[0])
    const len = arr.length;
    for(let j = 1; j < len; j++) {
      arr.splice(0, 1)
      if(map.has(arr.join('.'))) {
        // console.log(map.get(arr.join('.')))
        map.set(arr.join('.'), map.get(arr.join('.')) + Number(item[0]))
      } else {
        map.set(arr.join('.'), Number(item[0]))
      }
    }
  }

  let ans = [];
  for (let item of map) {
    // console.log(item)
    ans.push(item[1] + ' ' + item[0])
  }
  return ans
};
// console.log(subdomainVisits(["9001 discuss.leetcode.com"]))
console.log(subdomainVisits( ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]))