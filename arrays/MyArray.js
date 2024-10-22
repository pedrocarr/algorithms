// class MyArray {
//   constructor() {
//     this.length = 0
//     this.data = {}
//   }

//   get(index) {
//     return this.data[index]
//   }

//   push(item) {
//     this.data[this.length] = item
//     this.length++

//     return this.length
//   }

//   pop() {
//     const lastItem = this.data[this.length - 1]
//     delete this.data[this.length - 1]
//     this.length--
//     return lastItem
//   }

//   delete(index) {

//     const item = this.data[index]

//     this.shift(index)

//     return item
//   }

//   shift(index){

//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1]

//     }

//     delete this.data[this.length - 1]

//     this.length--
//   }
// }


// const newArray = new MyArray()
// newArray.push("item")
// newArray.push("oi")
// newArray.push("ola")
// newArray.push("hey")
// newArray.pop()
// newArray.get(0)
// // newArray.delete(5)
// // newArray.delete(1)

// console.log(newArray)


class MyArray {

  constructor() {
      this.length = 0;
      this.data = {};
  }

  get(index) {
      return this.data[index];
  }

  push(item) {
      this.data[this.length] = item;
      this.length++;

      return this.length;
  }

  pop() {
      const lastItem = this.data[this.length - 1];

      delete this.data[this.length - 1];
      this.length--;

      return lastItem;
  }

  delete(index) {
      if (!index) console.error("Provide a index")
      const item = this.data[index];

      this.shiftItems(index);

      return item;
  }

  shiftItems(index) {
      for (let i = index; i < this.length - 1; i++) {
          this.data[i] = this.data[i + 1];
      }

      if (this.data[index]) {
        delete this.data[this.length - 1];
        this.length--;

      }
  }
}

const newArray = new MyArray();

newArray.push("hi");
newArray.push("you");
newArray.push("!");

newArray.pop();

newArray.delete(4)
console.log(newArray)
