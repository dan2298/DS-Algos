// https://leetcode.com/problems/reverse-linked-list/description/
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []
 

// 1 -> 2 -> 3 -> 4 -> 5
// 2 -> 3

// 1 -> null

// 3 -> 4
// 1 -> null

function reverseLinkedList(list) {
    let pointer1 = list.next
    list.next = null

    while (pointer1) {
        let pointer2 = pointer1.next
        pointer1.next = list
        list = pointer1
        pointer1 = pointer2
    }

    return list
}

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
  
const list = new LinkedList(1)
list.next = new LinkedList(2)
list.next.next = new LinkedList(3)
list.next.next.next = new LinkedList(4)
list.next.next.next.next = new LinkedList(5)
list.next.next.next.next.next = new LinkedList(6)
let newList = reverseLinkedList(list)
  
console.log(newList)