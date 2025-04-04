class MyArray3 {
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

    const item = this.data[index]

    this.shiftItems(index)


    return item

  }

  shiftItems(index) {
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }

    delete this.data[this.length - 1]

    this.length--
  }
}

const newArray = new MyArray3();

newArray.push("hi");
newArray.push("you");
newArray.push("!");

// newArray.pop();

console.log(newArray);
// console.log(newArray);
newArray.delete(0);
newArray.delete(1);

console.log(newArray);

