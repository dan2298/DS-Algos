// https://leetcode.com/problems/merge-intervals/description/
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: 
let intervals = [[1,2],[3,5],[3,7],[6,8],[9,10]]
// Output: [[1,2],[3,8],[9,10]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:

// Input:
 intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

intervals = [[1,4],[0,0]]

function mergeIntervals(intervals) {
    const result = []
    intervals = intervals.sort((a, b) => a[0] - b[0])

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i-1][1] >= intervals[i][0]) {
            intervals[i] = [intervals[i-1][0], Math.max(intervals[i-1][1], intervals[i][1])]
        } else {
            result.push(intervals[i-1])
        }
    }

    result.push(intervals[intervals.length - 1])

    return result
}

console.log(mergeIntervals(intervals))