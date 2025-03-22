function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoSortedLists(list1, list2) {

  if (!list1) return list2

  if (!list2) return list1

  let dummy = new ListNode()

  let current = dummy

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }
    current = current.next
  }
  current.next = list1 || list2

  return dummy.next

}


const result = mergeTwoSortedLists([1, 2, 4], [1, 3, 4])
console.log('result::: ', result);
