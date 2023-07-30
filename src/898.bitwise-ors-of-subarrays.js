/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function(arr) {
  let ans = new Set()
  let cur = new Set()
  for(let item of arr) {
    let next = new Set()
    for (let orSum of cur) {
      // console.log(orSum)
      next.add(orSum | item)
    }

    cur = next
    cur.add(item)
    console.log(cur)
    for (let key of cur) {
      ans.add(key)
    }
    
  }
  // console.log(ans)
  return ans.size
};

console.log(subarrayBitwiseORs([1,1,2])) // 3
console.log(subarrayBitwiseORs([1,2,4])) // 6