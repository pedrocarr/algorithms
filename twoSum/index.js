/**
 * @param {number[]} array
 * @param {number} target
 * @returns {boolean}
 */
function addSumToTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] === target ) {
        return true
      }
    }
  }
  return false
}
// space complexity 0 (1)
// time complexity 0 (n²)

const result = addSumToTarget([1, 2, 3, 9], 8)
console.log("🚀 ~ result:", result)
const result2 = addSumToTarget([1, 2, 4, 4], 8)
console.log("🚀 ~ result2:", result2)


/**
 * @param {number[]} array
 * @param {number} target
 * @returns {boolean}
 */
function addSumToTarget2(array, target) {
  const map = {}


  for (let i = 0; i < array.length; i++) {
    const num = array[i]
    const complement = target - num

    if (map.has(complement)) return true
  }

  return false
}

// space complexity 0 (1)
// time complexity 0 (n)


const result3 = addSumToTarget([1, 2, 3, 9], 8)
console.log("🚀 ~ result3:", result3)
const result4 = addSumToTarget([1, 2, 4, 4], 8)
console.log("🚀 ~ result4:", result4)


