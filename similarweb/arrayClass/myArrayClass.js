class MyArray2 {
  constructor() {
    this.data = {}
    this.length = 0
  }

  get(index) {
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

  }

  shiftItems(){}
}


