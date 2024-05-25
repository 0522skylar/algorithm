/**
 * @param {number} num
 * @return {string}
 */
const map = {
  '1': 'I',
  '5': 'V',
  '10': 'X',
  '50': 'L',
  '100': 'C',
  '500': 'D',
  '1000': 'M',
  '4': 'IV',
  '9': 'IX',
  '40': 'XL',
  '90': 'XC',
  '400': 'CD',
  '900': 'CM'
}

const arr = [1,5,10,50,100,500,1000]
const numToSTr = (num) => {
  let str = ''
  if (num > 1000) {
    str += map[1000].repeat(Math.floor(num / 1000))
    return str
  }
  while(num) {
    for (let i = 0; i < arr.length; i++) {
      if (num < arr[i]) {
        if (num % arr[i - 1] == 0) {
          const ci = num / arr[i-1]
          str += map[arr[i - 1]].repeat(ci)
          num = 0
        } else {
          num -= arr[i > 1 ? i - 1 : i]
          str += map[arr[i > 1 ? i - 1 : i]]
        }
        break
      }
    }
  }
  return str
}


var intToRoman = function(num) {
  let ans = ''
  let numStr = String(num)
  for (let i = 0; i < numStr.length; i++) {
    let digit = Number(numStr[i])
    let count = Math.pow(10 , (numStr.length - i - 1))
    if (digit === 4) {
      ans += map[digit * count]
    } else if (digit === 9) {
      ans += map[digit * count]
    } else {
      if (map[digit * count] != undefined) {
        ans += map[digit * count]
      } else {
        ans += numToSTr(digit * count)
      }
    }
    // console.log(digit * count)
  }
  return ans
};

// console.log(intToRoman(3749))
// console.log(intToRoman(58))
// console.log(intToRoman(1994))
console.log(numToSTr(60))