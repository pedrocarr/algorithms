class MyHashSet {
  constructor() {
      this.data = []
  }

  contains(key){
      if (this.data.includes(key)) {
          return true
      }
      else return false
  }
  add(key) {
      if (!this.data.includes(key)) {
          this.data.push(key)
      } else return;
  }
  remove(key){
      this.data = this.data.filter(data => data !== key)
  }
}
