const array = [];

let i = 0;
let num = 0;

while (array.length < 10) {
  if (num % 2 != 0) {
    array.push(num)
    i += 1
  }
  num += 1
}

console.log(array);

