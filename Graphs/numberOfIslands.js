// https://leetcode.com/problems/number-of-islands/
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
let grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
// Output: 1


// Example 2:
// Input:
grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
// Output: 3

function numOfIslands(grid) {
    const rows = grid.length
    const cols = grid[0].length
    let map = {}
    let islands = 0

    const bfs = (row, col) => {
        if (row < rows && row >= 0 && col < cols && col >= 0) {
            if (grid[row][col] == 1) {
                grid[row][col] = '0'
                map[`${row}-${col}`] = 1
                
                // LEFT UP RIGHT DOWN
                const directions = [[0, -1], [-1, 0], [0, 1], [1, 0]]
                for (let el in directions) {
                    const newRow = row + directions[el][0] 
                    const newCol = col + directions[el][1]
                    if (!map[`${newRow}-${newCol}`]) {
                        bfs(newRow, newCol)
                    }
                }
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                islands++
                bfs(i, j)
            }

        }
    }

    return islands
}

console.log(numOfIslands(grid))