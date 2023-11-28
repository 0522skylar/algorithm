/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
  let ans = []
  let last = head
  head = head.next
  while(last) {
    let temp = last;
    let val = temp.val;
    while(true) {
      temp = temp.next
      if (temp === null) {
        ans.push(0)
        break;
      } 
      if (temp.val > val) {
        ans.push(temp.val)
        break;
      }
    }
    last = last.next;
  }

  let res = []
  for (let i = 0; i < ans.length; i++) {
    res.push(ans[i])
  }

  return res
};