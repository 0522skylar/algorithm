/**
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats1 = function(count) { // JavaScript heap out of memory
  let arr = []
  let sum = 0
  let zhong = 0
  let mode = 0
  for (let i = 0; i < count.length; i++) {
    // arr[count[i]]++
    if (count[i] === 0) { // TEL
      continue
    }
    sum += count[i] * i
    arr.push(...new Array(count[i]).fill(i))
    // mode = Math.max(mode, count[i])
    if (zhong < count[i]) {
      zhong = count[i]
      mode = i
    }
  }
  // count.sort((a, b) => a - b)
  let ans = []
  ans.push(arr[0])
  ans.push(arr[arr.length - 1])
  ans.push(sum / arr.length)
  if (arr.length % 2) {
    ans.push(arr[Math.floor(arr.length / 2)])
    console.log(arr.length)
  } else {
    // console.log(arr.length, arr[arr.length / 2])
    ans.push((arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2)
  }
  
  ans.push(mode)
  return ans;

};

const sampleStats = function(count) {
  let min = 0
  let max = 255
  let mode = 0, sum = 0, now = 0
  let total = 0
  
  while(count[min] == 0) {
    min++
  }
  while(count[max] == 0) {
    max--
  }
  for (let i = 0; i < 256; i++) {
    if (count[i] > count[mode]) {
      mode = i;
    }
    sum += count[i]
    total += i * count[i]
  }
  for (let i = 0; i < 256; i++) {
    now += count[i]
    if (now > sum / 2) {
      let medium = i
      if (sum % 2 == 0 && now - count[i] === sum / 2) {
        i--
        while(count[i] == 0) {
          i--
        }
        medium = (medium + i) / 2
      }
      return [min, max, total / sum, medium, mode]
    }
  }
  return null
}

console.log(sampleStats([0,1,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))


console.log(sampleStats([0,4,3,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))