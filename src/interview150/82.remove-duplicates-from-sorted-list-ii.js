/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let ansList = new ListNode(0, null)
  let curList = ansList
  let temp = -101
  let count = 0
  while(head) {
    if (head.val !== temp)  {
      
      if (count === 0 && temp !== -101) {
        let flag = new ListNode(temp, null)
        curList.next = flag
        curList = curList.next
      }
      temp = head.val
      count = 0
    } else {
      count++
    }
    head =  head.next
  }
  if (temp !== -101 && count===0) {
    let flag = new ListNode(temp, null)
    curList.next = flag
    curList = curList.next
  }
  
  return ansList.next
};