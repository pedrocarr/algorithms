const isPalindrome = (str) => {
  const revString = str.split('').reverse().join('');
  
  return revString === str;
} 
