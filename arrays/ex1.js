const prompt = require('prompt-sync')({sigint: true});

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const x = prompt("type first position: ")

const y = prompt("type second position: ")

const result = array[x] + array[y]

console.log('the result is: ' + result)

