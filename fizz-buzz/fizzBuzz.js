// console.time('fizzBuzz')
// function fizzBuzz(n) {
//     let i = 1;
//   while(i <= n) {
//       if(i % 15 === 0) {
//           console.log('FizzBuzz');
//           i++;
//       } else if(i % 3 === 0) {
//           console.log('Fizz');
//           i++;
//       } else if(i % 5 === 0) {
//           console.log('Buzz');
//           i++;
//       } else {
//           console.log(i);
//           i++;
//       }
//   }
// }
// console.timeEnd('fizzBuzz');

// fizzBuzz(100);

console.time('fizzBuzzFor');
const fizzBuzzFor = (n) => {
    for(let i = 1; i <= n; i++) {
        if (i % 15 === 0) console.log('FizzBuzz');
        else if(i % 3 === 0) console.log('Fizz');
        else if(i % 5 === 0) console.log('Buzz');
        else console.log(i);
    }
}
console.timeEnd('fizzBuzzFor');

fizzBuzzFor(100);
// loop 100 times (i)

// if i div 3 & 5: print "FizzBuzz"

// if i div 3: print "Fizz"

// if i div 5: print "Buzz"

// else: print i

// ./keeper release x.x.x

// go through each project and create a branch that should be feature/release x.x.x

// go to the recipe.json and point every branch project towards to the nem release branch created

// go to the recipe.json and change ther version to x.x.x and also in the package

// and then every new branch has to git add . && git commit -m "build/release" && git push to the core
