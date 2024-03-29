// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Example 1:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.
// Example 2:


// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
// Example 3:

// Input: root = [1,2], p = 1, q = 2
// Output: 1

function lowestCommonAncestor (tree, p, q) {
    if (!tree) {
        return false 
    } else if  (tree.val === p || tree.val === q) {
        return tree
    }
    
    const left = lowestCommonAncestor(tree.left, p, q)
    const right = lowestCommonAncestor(tree.right, p, q)

    if (left && right) {
        return tree
    }

    return left || right
}


// console.log(lowestCommonAncestor(1))

// // Sample input:
//         3 
//       /   \
//      5     1 
//     / \   / \
//    6   2 0   8  
//       / \
//      7   4

class Node {
    constructor(val, left, right) {
        this.val = val;
        this.left = left || null
        this.right = right || null;
   }
}

var root = new Node(3);
root.left = new Node(5);
root.left.left = new Node(6);
root.left.right = new Node(2);
root.left.right.left = new Node(7);
root.left.right.right = new Node(4);
root.right = new Node(1);
root.right.right = new Node(8);
root.right.left = new Node(0);
console.log(lowestCommonAncestor(root, 4, 6))
