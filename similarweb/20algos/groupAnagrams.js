/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {

  let ans = {}

  for (let s of strs) {
    let key = s.split('').sort().join('')

    if (!ans[key]) {
      ans[key] = []
    }

    ans[key].push(s)
  }

  return Object.values(ans)

};

const result = groupAnagrams(["eat","tea","tan","ate","nat","bat"])

console.log(result)
