"use strict";

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
var middleNode = function middleNode(head) {
  var p = head,
      q = head;

  while (q != null && q.next != null) {
    q = q.next.next;
    p = p.next;
  }

  return p;
};