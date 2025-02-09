// @link https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150

function merge(nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);
}

/**
 * In this solution, nums1.splice(m, n, ...nums2) replaces the last n elements of nums1 with the elements of nums2,
 *  starting from index m. Then, nums1.sort((a, b) => a - b) sorts the merged array in non-decreasing order.
 */

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));

// output: [1,2,2,3,5,6]


const array1 = ["One", "Three", "Five"]
const array2 = ["Two", "Four", "Six", "Seven", "Eight", "Nine"]



function mergeArrays(arr1, arr2) {

  const accumulator = []

  const largestArray = Math.max(arr1.length, arr2.length)

  for (let i = 0; i < largestArray; i++) {
    accumulator.push(arr1[i])
    accumulator.push(arr2[i])
  }
  return accumulator.filter(Boolean)
}

const result = mergeArrays(array1, array2)

console.log(result)
