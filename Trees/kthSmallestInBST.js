// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Example 1:
//        3 
//      /   \
//     1     4 
//      \
//       2   

// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// Example 2:
//         5 
//       /   \
//      3     6
//     /  \
//    2    4
//   /
//  1

// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

function kthSmallest(root, k, arr = []) {
    if (!root) {
        return null
    }

    kthSmallest(root.left, k, arr)
    arr.push(root.val)
    kthSmallest(root.right, k, arr)

    return arr[k-1]
}

class Node {
    constructor(val, left, right) {
        this.val = val;
        this.left = left || null
        this.right = right || null;
   }
}

var root = new Node(5);
root.left = new Node(3);
root.left.left = new Node(2);
root.left.right = new Node(4);
root.left.left.left = new Node(1);
root.right = new Node(6);
console.log(kthSmallest(root, 3))