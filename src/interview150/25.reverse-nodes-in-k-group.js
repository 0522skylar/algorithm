/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let ansList = new ListNode(0, null)
  let curList = ansList
  let count = 0
  let arr = []
  while(head) {
    if (count < k) {
      count++
      let val = head.val
      arr.push(val)
      head = head.next
    } else {
      count = 0
      for (let i = arr.length - 1; i >= 0; i--) {
        let temp = new ListNode(arr[i], null)
        curList.next = temp
        curList = curList.next
      }
      arr = []
    }
  }
  if (arr.length === k) {
    for (let i = arr.length - 1; i >= 0; i--) {
      let temp = new ListNode(arr[i], null)
      curList.next = temp
      curList = curList.next
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      let temp = new ListNode(arr[i], null)
      curList.next = temp
      curList = curList.next
    }
  }
  return ansList.next
};