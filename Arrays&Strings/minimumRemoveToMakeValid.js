// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description/
// Given a string s of '(' , ')' and lowercase English characters.

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
 

// Example 1:

// Input:
let s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
// Example 2:

// Input:
// s = "a)b(c)d"
// Output: "ab(c)d"
// Example 3:

// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.

function minRemoveToMakeValid (str) {
    str = str.split('')
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(i)
        } else if (str[i] === ')') {
            if (stack.length) {
                stack.pop()
            } else {
                str[i] = ''
            }
        }
    }

    for (let i in stack) {
        str[stack[i]] = ''
    }

    return str.join('')
}

console.log(minRemoveToMakeValid(s))