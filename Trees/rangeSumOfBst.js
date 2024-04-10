// https://leetcode.com/problems/range-sum-of-bst/description/

// 938. Range Sum of BST
// Solved
// Easy
// Topics
// Companies
// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

 

// Example 1:


// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
// Example 2:


// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23
// Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.

function rangeSumBst(tree, low, high, sum = 0) {
    const traverse = (tree) => {
        if (!tree) {
            return 
        }
        
        if (tree.val >= low && tree.val <= high) {
            sum += tree.val
        }
        traverse(tree.left)
        traverse(tree.right)
    }

    traverse(tree)
    return sum
}

class Node {
    constructor(val, left, right) {
        this.val = val;
        this.left = left || null
        this.right = right || null;
   }
}

var root = new Node(10);
root.left = new Node(5);
root.left.left = new Node(3);
root.left.right = new Node(7);
root.right = new Node(15);
root.right.right = new Node(18);


console.log(rangeSumBst(root, 7, 15))