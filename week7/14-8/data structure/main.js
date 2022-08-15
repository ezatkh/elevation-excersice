class UniqueArray {
  constructor() {
    this.uniqueArray = [];
  }
  add(item) {
    let flag = true;
    for (let index in this.uniqueArray) {
      if (this.uniqueArray[index] == item) {
        return false;
      }
    }
    if (flag) this.uniqueArray.push(item);
  }
  showAll() {
    this.uniqueArray.forEach((element) => {
      console.log(element);
    });
  }
  exists(item) {
    for (let element of this.uniqueArray) {
      if (item == element) return true;
    }
    return false;
  }
  get(index) {
    return this.uniqueArray[index];
  }
}
let ua = new UniqueArray();
ua.add(1);
ua.add(2);
ua.add(1);
ua.add(12);
ua.add(15);
ua.showAll();
console.log(ua.exists(12));
console.log(ua.exists(22));
console.log(ua.get(0));
