const assert = require('node:assert/strict');


const checkIfIsLeapYear = (year) => {
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)

}

assert.deepEqual(checkIfIsLeapYear(1997), true)
assert.deepEqual(checkIfIsLeapYear(2000), true)
assert.deepEqual(checkIfIsLeapYear(1996), true)
assert.deepEqual(checkIfIsLeapYear(2025), true)
assert.deepEqual(checkIfIsLeapYear(2019), true)



module.exports.checkIfIsLeapYear = checkIfIsLeapYear;


