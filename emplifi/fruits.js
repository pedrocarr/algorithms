var fruits = ['apple', 'pear', 'banana', 'mango']


let prints = []


for(let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i]
  let print = function () {console.log(fruit)}
  prints.push(print)
  console.log(prints)
}

// console.log(prints)


for(let a = 0; a < prints.length; a++) {
  prints[a]();
}
// prints
