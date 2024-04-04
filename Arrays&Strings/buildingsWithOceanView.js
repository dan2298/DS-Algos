// https://leetcode.com/problems/buildings-with-an-ocean-view/description/
// Given an array of integers heights of length n, indicating that there are n buildings, heights[i] represents the height of the building at the corresponding position.

// To the right of a building is the ocean, and for each building, if all buildings to the right of that building are strictly lower than it, then that building has a view of the ocean.

// Returns a list of indexed subscripts of all buildings with an ocean view, in ascending order, with index subscripts starting at 0.

// Example 1:
// Input:
// 
let heights = [5, 2, 3, 4]
// Output:
// [0, 3]
// Explanation:
// Building No.1 is 2 in height and Building No.2 is 3 in height and is not strictly higher than the building to its right

// Example 2:
// Input:
// heights = [2, 2, 2, 2, 2]
// Output:
// [4]
// Explanation:
// There are no buildings strictly higher than the right side, so only the rightmost building, No. 4, has a view of the sea

function findBuildings(arr) {
    const result = [];
    let max = -Infinity

    for (let i = arr.length -1; i >= 0; i--) {
        if (arr[i] > max) {
            result.push(i)
            max = arr[i]
        }
    }

    return result.reverse()
}

console.log(findBuildings(heights))