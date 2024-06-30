/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  let ansList = new ListNode(0)
  let ans = ansList
  let arr = []
  let index = 0
  if (left === right) {
    return head
  }
  while(head) {
    index++
    if (index === left) {
      arr.push(head.val)
      head = head.next
    } else if (index == right) {
      arr.push(head.val)
      head = head.next
      break
    } else {
      if (arr.length != 0) {
        arr.push(head.val)
        head = head.next
        // ansList = ansList.next
        continue
      } else {
        let flag = new ListNode(head.val)
      ansList.next = flag
      ansList = flag
      head = head.next
      }
      
    }
  }
//   console.log(arr)
  while(arr.length) {
    let temp = new ListNode(arr.pop(), null)
    ansList.next = temp
    ansList = temp
  }
  if (head) {
    ansList.next = head
  }
  return ans.next
};