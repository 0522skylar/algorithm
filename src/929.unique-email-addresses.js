/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let map = new Set()
  for(let i = 0; i < emails.length; i++) {
    const item = emails[i].split('@')
    let temp = ''
    for(let j = 0; j < item[0].length; j++) {
      if(item[0][j] === '.') {
        continue
      } else {
        if(item[0][j] === '+') {
          break
        } else {
          temp += item[0][j]
        }
      }
    }

    temp += ('@' + item[1])

    map.add(temp)
  }
  console.log(map)
  return map.size
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]))

console.log(numUniqueEmails(["a@leetcode.com","b@leetcode.com","c@leetcode.com"]))

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.email.leet+alex@code.com"])) // 2