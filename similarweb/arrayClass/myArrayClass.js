class MyArray2 {
  constructor() {
    this.data = {}
    this.length = 0
  }

  get(index) {
    if (!this.length) {
      return "Array is Empty"
    }
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item
    this.length++
    return this.length
  }

  pop() {
    const lastItem = this.data[this.length - 1]

    delete this.data[this.length - 1]

    this.length--

    return lastItem
  }


  delete(index) {
    const item = this.get(index)

    this.shiftItems(index)


    return item




  }

  shiftItems(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }

    delete this.data[this.length - 1]

    this.length--

  }
}

const myclass = new MyArray2()
console.log('myclass::: ', myclass)





