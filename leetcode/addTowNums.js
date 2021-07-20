/**
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l3 = new ListNode(0);
  let res = l3;
  let flag = 0;
  while (l1 || l2 || flag) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let sum = val1 + val2 + flag;
    flag = sum >= 10 ? 1 : 0;
    sum = sum % 10;
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
    l3.next = new ListNode(sum);
    l3 = l3.next;
  }
  return res.next;
};
addTwoNumbers([2, 4, 3], [5, 6, 4]) // [7,0,8]