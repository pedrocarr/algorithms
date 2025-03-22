
// VALID PARENTHESES

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true


// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @returns {boolean}
 */
function validParentheses(s) {

  const mapBrackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  const openBrackets = '({['

  let stack = []

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (openBrackets.includes(char)) {
      stack.push(char)
    } else {
      let lastOpenBracket = stack.pop()
      if (mapBrackets[lastOpenBracket] !== char) {
        return false
      }
    }
  }
  return stack.length === 0
}


// console.log(validParentheses("()")) // true
// console.log(validParentheses("{{{[[{}]]}}}")) // true
// console.log(validParentheses("{{{[{}]]}}}")) // false
// console.log(validParentheses("(]]]")) // true
// // true
// // false


/**
 *
 * @param {string} str
 * @returns {boolean}
 */
const validParentheses2 = str => {
  if (!str || str.length < 2 || typeof str !== 'string') return


  const mappingBrackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  const openBrackets = '({['

  let stack = []

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (openBrackets.includes(char)) {
      stack.push(char)
    } else {
      let lastOpenBracket = stack.pop()
      if (mappingBrackets[lastOpenBracket] !== char) {
        return false
      }

    }
  }
  return stack.length === 0
}

const result = validParentheses2("}]]}}}")
const result4 = validParentheses2("{{{[[{}]]}}}")
console.log('result::: ', result);
console.log('result::: ', result4);




