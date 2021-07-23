class Iterator {
  constructor(list) {
    this.list = list;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.list.length;
  }

  next() {
    return this.list[this.index++];
  }
}

const iterator = new Iterator(['Iva', true, 'hello', 5, 9]);

while (iterator.hasNext()) {
  console.log(iterator.next());
}
