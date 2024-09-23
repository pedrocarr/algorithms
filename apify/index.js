
/**
 * @param {number[]} array
 * @param {number} target
 * @returns {boolean}
 */
function addSumToTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] === target ) {
        console.log(true)
        return true
      }
    }
  }
  return false
}

addSumToTarget([1, 2, 3, 9], 8)
addSumToTarget([1, 2, 4, 4], 8)



