// https://leetcode.com/problems/valid-palindrome-ii/description/
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "aabcaa"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false
 
function validPalindrome(str) {
    let first = 0
    let last = str.length - 1

    const isValid = (first, last) => {
        while (first < last) {
            if (str[first] !== str[last]) {
                return false
            }
            first++; last--;
        }

        return true
    }

    while (first < last) {
        if (str[first] !== str[last]) {
            return isValid(first + 1, last) || isValid(first, last - 1)
        }
        first++; last--;
    }

    return true
}

console.log(validPalindrome('aabddaa'))