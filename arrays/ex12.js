const array1 = [3,2,1,5,2,6,8,9,6]
const array2 = [5,3,2,1,6,2,4,3,7]
const array3 = [7,6,5,9,6,3,4,6,7]

const firstThird = array1.slice(0, 3)
const secondThird = array2.slice(3, 6)
const thirdThird = array3.slice(6, 9)

const result = firstThird.concat(secondThird).concat(thirdThird);

console.log(result)