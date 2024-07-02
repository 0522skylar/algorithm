/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let arr = []
  while(head) {
    arr.push(head.val)
    head = head.next
  }
  let ansList = new ListNode(0, null)
  let curList = ansList
  for (let i = 0; i < arr.length; i++) {
    if (arr.length - n === i) {
      continue
    } else {
      let temp = new ListNode(arr[i], null)
      curList.next = temp
      curList = curList.next
    }
  }
  return ansList.next
};