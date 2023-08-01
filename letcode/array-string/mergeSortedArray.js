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
