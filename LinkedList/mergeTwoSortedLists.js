// https://leetcode.com/problems/merge-two-sorted-lists/description/
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:
// Input: 
// list1 = [1,2,4], 
// list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 
function mergeTwoSortedLists(list1, list2) {
    let newList = new LinkedList(5); 
    let pointer = newList

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            pointer.next = list1
            list1 = list1.next
        } else {
            pointer.next = list2
            list2 = list2.next
        }

        pointer = pointer.next
    }

    pointer.next = list1 || list2
    return newList.next
}

class LinkedList {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}

const list = new LinkedList(1)
list.next = new LinkedList(2)
list.next.next = new LinkedList(4)

const list1 = new LinkedList(1)
list1.next = new LinkedList(3)
list1.next.next = new LinkedList(4)

console.log(mergeTwoSortedLists(list, list1))