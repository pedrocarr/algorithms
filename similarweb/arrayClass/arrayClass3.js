class MyArray4 {
  constructor () {
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
    const item = this.get(index)

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }

    delete this.data[this.length - 1]
    this.length--

    return item
  }
}

const array = new MyArray4()


array.push(1)
array.push(168)
array.push(190)
array.push(1234)

console.log(array.pop())

array.delete(2)

console.log(array.get(1))

console.log(array)
