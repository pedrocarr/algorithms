/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  let newString = s.toLowerCase().replace(/[_\W]/g,'')

  for (let i = 0, j = newString.length - 1; j >= i; i++, j--) {

    if (newString[i] !== newString[j]) return false

  }

  return true
}

const isPalindromeVar = isPalindrome("A man, a plan, a canal: Panama")
console.log(isPalindromeVar)
