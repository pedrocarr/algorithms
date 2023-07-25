const array = [16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]



const begin = array.slice(8, 17).reverse()
const final = array.slice(0, 8).reverse()

const newArray = begin.concat(final)



console.log(newArray)
