// const exercisesList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



// // loop for iterating and printing only the even numbers

// for(i = 0; i <= exercisesList.length -1 ; i++) {
//     if(i % 2 !== 0) {
//         console.log(exercisesList[i])
//     }
// }


// // for ... in iterate and calculate the some of all
// let sum = 0
// for(const index in exercisesList) {
//   // index
//     console.log(index)
//     sum += exercisesList[index]
// }


// console.log(sum)

// // the same way to sum everything but with reduce

// const sumOfNumbers = exercisesList.reduce((acc, currentValue) => acc + currentValue)
// console.log(sumOfNumbers)

// // for ... of checks if the number is greater than five then prints any message

// for(const item of exercisesList) {
//   console.log(item)


// }


let i = 0;
let j = 10;
checkiandj: while (i < 4) {
  console.log(i);
  i += 1;
  checkj: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 === 0) {
      continue checkj;
    }
    console.log(j, "is odd.");
  }
  console.log("i =", i);
  console.log("j =", j);
}
