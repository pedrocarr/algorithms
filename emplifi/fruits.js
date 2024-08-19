var fruits = ['apple', 'pear', 'banana', 'mango']


var prints = []


for(var i = 0; i < fruits.length; i++) {
  const fruit = fruits[i]
  var print = function () { console.log(fruit);}
  prints.push(print)
}


for(var a = 0; a < prints.length; a++) {
  prints[a]();
}
