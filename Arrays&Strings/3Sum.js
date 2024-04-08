// https://leetcode.com/problems/3sum/description/
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: 
let nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

nums = [-2, 0, 0, 2, 2]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

function threeSum (arr) {
    const result = [];
    arr.sort((a, b) => a - b)

    for (let i = 0; i < arr.length; i++) {
        let left = i + 1
        let right = arr.length-1

        if (arr[i] !== arr[i-1]) {
            while (left < right) {
                if (arr[i] + arr[left] + arr[right] > 0) {
                    right--
                } else if (arr[i] + arr[left] + arr[right] < 0) {
                    left++
                } else {
                    result.push([arr[i], arr[left], arr[right]])
                    left++
                    right--
                    while (arr[left] === arr[left-1]) {
                        left++
                    }
                }
            }                  
        }
    }

    return result
}

console.log(threeSum(nums))