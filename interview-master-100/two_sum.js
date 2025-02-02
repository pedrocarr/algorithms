// ** TWO SUM **

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) { // 0 (n^2)

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}


twoSum([2, 7, 11, 15], 9) // 9
twoSum([3, 2, 4], 6) // 6
twoSum([3, 3], 6) // 6


// HASH MAP SOLUTION

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum2(nums, target) { // 0 (n)

  let hashmap = {}

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]

    let complement = target - num

    if (complement in hashmap) {
      return [hashmap[complement], i]
    }
    hashmap[num] = i
  }
  return []
}

twoSum2([2, 7, 11, 15], 9) // 9
twoSum2([3, 2, 4], 6) // 6
twoSum2([3, 3], 6) // 6



const twoSum3 = (nums, target) => {

  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}

const result = twoSum3([1, 2, 3, 4, 5, 6], 1)
console.log('result::: ', result);


const twoSum4 = (nums, target) => {
  const hashmap = {}


  for (let i = 0; i < nums.length; i++) {

    let num = nums[i]
    let complement = target - num

    if (complement in hashmap) {

      return [hashmap[complement], i]
    }

    hashmap[num] = i
  }

  return []
}


const result2 = twoSum4([1, 2, 3, 4, 5, 6], 11)
console.log('result::: ', result2);



/**
 * @param {Array<number>} nums
 * @param {number} target
 * @returns {Array<number>}
 */
const twoSum5 = (nums, target) => {
  for (let i = 0; i < nums.length; i ++) {
    for (let j = i + 1 ; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}


const result3 = twoSum5([1,2,3,4,5,6,6,7,7,8,9,0], 17)
console.log('result3::: ', result3);

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
const twoSum6 = (nums, target) => {

  let hashmap = {}

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]

    let complement = target - num

    if (complement in hashmap) {

      return [hashmap[complement], i]

    }

    hashmap[num] = i
  }

  return []

}

/**
 *
 * @param {number[]} nums
 * @param {number} target
 */
const twoSum7 = (nums, target) => {
  const hashmap = {}

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]

    let complement = target - num

    if (complement in hashmap) {
      return [hashmap[complement], i]
    }
    hashmap[num] = i
  }
  return []
}

const res = twoSum7([1,2,3,4,5,6,7,8,9], 12)
console.log('res::: ', res);



/**
 *
 * @param {number[]} nums
 * @param {number} target
 */

function twoSum8(nums, target) {


  let hashmap = {}

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let complement = target - num

    if (complement in hashmap) {
      return [hashmap[complement], i]
    }

    hashmap[num] = i
  }

  return []
}

const res2 = twoSum8([1,2,3,4,5,6,7], 13)
console.log('res2::: ', res2);
