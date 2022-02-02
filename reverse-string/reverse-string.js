// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

const reverseString = (str) => {
    return str.split('').reverse().join('');
}



const isPalindrome = (str) => {
    const revString = str.split('').reverse().join('');
    
    return revString === str;
} 


const reverseInt = (int) => {
    const revString = int.toString().split('').reverse().join('');

    return parseInt(revString) * Math.sign(int);
}


const capitalizeLetters = (str) => {
  return str
  .toLowerCase()
  .split(' ')
  .map(word => word[0].toUpperCase() + word.substr(1))
  .join(' ');

}




const fizzBuzz = () => {
    for(let i = 1; i <= 100; i++) {
        if(i % 15 === 0) {
            console.log('FizzBuzz');
        } else if(i % 3 === 0) {
            console.log('Fizz');
        } else if(i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

// call function

const output = fizzBuzz();

console.log(output);