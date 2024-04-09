// You are given the root of a binary tree containing digits from 0 to 9 only.

// Each root-to-leaf path in the tree represents a number.

// For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
// Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

// A leaf node is a node with no children.

// Example 1:
//     1
//    / \
//   2   3
//
// Input: root = [1,2,3]
// Output: 25
// Explanation:
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.
// Therefore, sum = 12 + 13 = 25.

// Example 2:

// Input: root = [4,9,0,5,1]
// Output: 1026
// Explanation:
// The root-to-leaf path 4->9->5 represents the number 495.
// The root-to-leaf path 4->9->1 represents the number 491.
// The root-to-leaf path 4->0 represents the number 40.
// Therefore, sum = 495 + 491 + 40 = 1026.

function sumNumbers(root) {
    const countLeafNodes = (root, sum) => {
        if (!root) {
            return null
        }

        sum += root.val
        if (!root.right && !root.left) {
            //Number(num)
            return +sum 
        }
        
        return countLeafNodes(root.left, sum) + countLeafNodes(root.right, sum)
    }

   return countLeafNodes(root, '')
}


class Node {
    constructor(val, left, right) {
        this.val = val;
        this.left = left || null
        this.right = right || null;
   }
}

var root = new Node(4);
root.left = new Node(9);
root.left.left = new Node(5);
root.left.right = new Node(1);
root.right = new Node(0);
console.log(sumNumbers(root))
