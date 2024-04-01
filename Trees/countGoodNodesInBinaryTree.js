// https://leetcode.com/problems/count-good-nodes-in-binary-tree/description/

// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.

// Example 1:
//        3 
//      /   \
//     1     4 
//    /     / \
//   3     1   5
//
// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.

// Example 2:
// Input: root = [3,3,null,4,2]
// Output: 3
// Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.

// Example 3:
// Input: root = [1]
// Output: 1
// Explanation: Root is considered as good.
 
function goodNodes(tree) {
    let result = 0
    const traverse = (tree, max) => {
        if (!tree) {
            return result
        }
    
        if (tree.val >= max) {
            result++
            max = tree.val
        }
        
        traverse(tree.left, max, result) 
        traverse(tree.right, max, result)
    }

    traverse(tree, tree.val)
    return result
}

class Node {
    constructor(val, left, right) {
        this.val = val;
        this.left = left || null
        this.right = right || null;
   }
  }
  
  var root = new Node(3);
  root.left = new Node(1);
  root.left.left = new Node(3);
  root.right = new Node(4);
  root.right.right = new Node(5);
  root.right.left = new Node(1);
  console.log(goodNodes(root))