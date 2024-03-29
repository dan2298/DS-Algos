// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Sample input: 
//       10 
//       / \
//      5   15
//     / \  / \
//    2  6 13 22 

// Sample output: 
// true

// Sample Input
//    2
//   / \
//  1   3
// Output: true

function isValidBST(tree) {
  return validateBST(tree, -Infinity, Infinity)
}

function validateBST(tree, min, max) {
  if (!tree)  return true

  if (tree.val < min || tree.val > max) {
    return false
  }

  const left = validateBST(tree.left, min, tree.val)
  const right = validateBST(tree.right, tree.val, max)

  return left && right
}


// // Sample input:
//         3 
//       /   \
//      2     5 
//     / \   / \
//    1   2 4   8  

class Node {
  constructor(val, left, right) {
      this.val = val;
      this.left = left || null
      this.right = right || null;
 }
}

var root = new Node(3);
root.left = new Node(2);
root.left.left = new Node(1);
root.left.right = new Node(2);
root.right = new Node(5);
root.right.right = new Node(8);
root.right.left = new Node(4);
console.log(isValidBST(root))