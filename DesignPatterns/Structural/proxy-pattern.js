class FoodAPI {
  getValue(food) {
    console.log('Calling API');

    switch (food) {
      case 'Apple':
        return 1.2;
      case 'Chocolate':
        return 2.3;
      case 'Cake':
        return 5;
    }
  }
}

class FoodProxy {
  constructor() {
    this.api = new FoodAPI();
    this.cache = {};
  }

  getValue(food) {
    if (!this.cache[food]) {
      this.cache[food] = this.api.getValue(food);
    }

    return this.cache[food];
  }
}

const proxy = new FoodProxy();

console.log(proxy.getValue('Apple'));
console.log(proxy.getValue('Chocolate'));
console.log(proxy.getValue('Chocolate'));
console.log(proxy.getValue('Cake'));
console.log(proxy.getValue('Cake'));
console.log(proxy.getValue('Cake'));
