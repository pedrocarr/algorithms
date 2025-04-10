class Checking {
  constructor(amount) {
    this.balance = amount; // property
  }


  deposit(amount) {

    this.balance = this.balance + amount
    return this.balance
  }

  withdrawal(amount) {
    if (amount > this.balance) {
      console.log("Insuficient funds!!")
    } else {
      this.balance = this.balance - amount
    }
    return this.balance
  }

  toString() {
    console.log(`Balance is ${this.balance}`)
  }
}

const account = new Checking(1000)
console.log("🚀 ~ account:", account)
let deposit = account.deposit(500)
let balance = account.toString()
// console.log("🚀 ~ balance:", balance)
let withdrawal = account.withdrawal(1000)

balance = account.toString()

deposit = account.deposit(3567)




withdrawal = account.withdrawal(65777)
balance = account.toString()



const a = [1,2,3]

let result = a.reduceRight((a, b) => a + b)


console.log(result)


function search(nums, target) {

  let beginIndex = 0
  let finalIndex = nums.length - 1

  while (beginIndex <= finalIndex) {
      let midpoint = Math.floor(beginIndex  + (finalIndex - beginIndex) / 2)

      let midpointValue = nums[midpoint]

      if (target === midpointValue) {
          return target
      } else if (target < midpointValue) {
          finalIndex = midpoint - 1
      } else {
          beginIndex = midpoint + 1
      }
  }
  return -1

};


var search = function(nums, target) {

  let beginIndex = 0
  let finalIndex = nums.length - 1

  while (beginIndex <= finalIndex) {
      const midpoint = Math.floor(beginIndex + (finalIndex - beginIndex) / 2)

      const midpointValue = nums[midpoint]

      if (target === midpointValue) {
          return midpoint
      } else if (target < midpointValue) {
          finalIndex = midpoint - 1
      } else {
          beginIndex = midpoint + 1
      }
  }
  return -1
};


function reverseWords(s) {

  let reverseWords = ''
  let finalIndex = s.length - 1
  for (let i = finalIndex; i >= 0; i--) {
    reverseWords = reverseWords + s[i]

  }

  console.log(reverseWords)
  return reverseWords
}


const res = reverseWords("Ola Mundo")
console.log("🚀 ~ res:", res)
reverseWords("Helloo World")




