/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let map = {
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900,
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let index = 0
  let ans = 0
  while(index < s.length) {
    if (s[index] + s[index +1] === 'IV') {
      ans += map['IV']
      index += 2
    } else if (s[index] + s[index +1] === 'IX') {
      ans += map['IX']
      index += 2
    } else if (s[index] + s[index +1] === 'XL') {
      ans += map['XL']
      index += 2
    } else if (s[index] + s[index +1] === 'XC') {
      ans += map['XC']
      index += 2
    } else if (s[index] + s[index +1] === 'CD') {
      ans += map['CD']
      index += 2
    } else if (s[index] + s[index +1] === 'CM') {
      ans += map['CM']
      index += 2
    } else {
      ans += map[s[index]]
      index += 1
    }

  }
  return ans;
};

console.log(romanToInt('MCMXCIV'))