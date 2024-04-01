// https://leetcode.com/problems/binary-tree-right-side-view/
// 199. Binary Tree Right Side View

// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example 1:
// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

//      1
//     / \       
//    2   3
//     \   \
//      5   4


// Example 2:
// Input: root = [1,null,3]
// Output: [1,3]

// Example 3:
// Input: root = []
// Output: []
 

function binaryRightSideView(tree) {
    const result = [tree.val];
    const queue = [tree]

    while (queue.length) {
        const len = queue.length

        for (let i = 0; i < len; i++) {
            const current = queue.shift()
            if (current.left) {
                queue.push(current.left)
            } 
    
            if (current.right) {
                queue.push(current.right)
            }
        }
        
        if (queue.length) result.push(queue[queue.length - 1].val)
    }

    return result 
}

class Node {
    constructor(val, left, right) {
        this.val = val;
        this.left = left || null
        this.right = right || null;
   }
}

var root = new Node(1);
root.left = new Node(2);
root.left.right = new Node(5);
root.right = new Node(3);
root.right.right = new Node(4);

console.log(binaryRightSideView(root))