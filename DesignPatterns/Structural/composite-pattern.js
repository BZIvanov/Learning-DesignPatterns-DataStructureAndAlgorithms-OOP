class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  total() {
    return this.price;
  }

  print() {
    console.log(`${this.name} - ${this.price}`);
  }
}

class ProductsGroup {
  constructor(groupName, composite = []) {
    this.groupName = groupName;
    this.composite = composite;
  }

  total() {
    return this.composite.reduce((acc, curr) => acc + curr.total(), 0);
  }

  print() {
    console.log(`----- ${this.groupName} -----`);
    this.composite.forEach((el) => el.print());
  }
}

// Food products
const banana = new Product('Banana', 12.3);
const apple = new Product('Apple', 9.5);
// Furniture products
const table = new Product('Table', 23.5);
const chair = new Product('Chair', 18.5);

// Products as groups
const foodProducts = new ProductsGroup('Food', [banana, apple]);
const furnitureProducts = new ProductsGroup('Furniture', [table, chair]);

foodProducts.print();
console.log(
  `Total price for ${foodProducts.groupName}: ${foodProducts.total()}`
);
furnitureProducts.print();
console.log(
  `Total price for ${furnitureProducts.groupName}: ${furnitureProducts.total()}`
);

// Composition of groups
const tree = new ProductsGroup('Tree', [foodProducts, furnitureProducts]);
console.log('**********************');
console.log(`Total price for everything: ${tree.total()}`);
