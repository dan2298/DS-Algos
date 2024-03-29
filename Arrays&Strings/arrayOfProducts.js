// https://leetcode.com/problems/product-of-array-except-self/description/
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: 
// [1,1,2,6]
// [24,12,4,1]
let nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input:
// nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

function arrayOfProducts(arr) {
    let result = Array(arr.length).fill(1)
    let product = 1

    for (let i = 1; i < arr.length; i++) {
        product *= arr[i-1]
        result[i] = product
    }
   
    product = 1

    for (let i = arr.length-1; i >= 0; i--) {
        result[i] *= product
        product *= arr[i]
    }

    return result
}


console.log(arrayOfProducts(nums))