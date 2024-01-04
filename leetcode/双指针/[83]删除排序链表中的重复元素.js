/**
 * 做的时候得困难主要是关于ListNode结构使用出现了疑惑
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
  if(head===null) return head
  let slow = head, fast = head
  while(fast) {
    if(slow.val !== fast.val) {
      // 对于链表操作来说，先后顺序很重要！
      slow.next = fast
      slow = slow.next
    }
    fast = fast.next
  }
  slow.next = null
  return head
};