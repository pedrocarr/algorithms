const isPalindrome = (str) => {
  const revString = str.split('').reverse().join('');

  return revString === str;
}


console.log(isPalindrome("FELIPE"))
console.log(isPalindrome("FELIPE"))


