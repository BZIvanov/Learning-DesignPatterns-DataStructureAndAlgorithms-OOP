interface AbstractFactory {
  createProduct1(): AbstractProduct1;

  createProduct2(): AbstractProduct2;
}

class ConcreteFactory1 implements AbstractFactory {
  public createProduct1(): AbstractProduct1 {
    return new Product1_1();
  }

  public createProduct2(): AbstractProduct2 {
    return new Product2_1();
  }
}

class ConcreteFactory2 implements AbstractFactory {
  public createProduct1(): AbstractProduct1 {
    return new Product1_2();
  }

  public createProduct2(): AbstractProduct2 {
    return new Product2_2();
  }
}

interface AbstractProduct1 {
  display(): void;
}

class Product1_1 implements AbstractProduct1 {
  public display(): void {
    console.log('Product 1 from factory 1');
  }
}

class Product1_2 implements AbstractProduct1 {
  public display(): void {
    console.log('Product 1 from factory 2');
  }
}

interface AbstractProduct2 {
  display(): void;
}

class Product2_1 implements AbstractProduct2 {
  public display(): void {
    console.log('Product 2 from factory 1');
  }
}

class Product2_2 implements AbstractProduct2 {
  public display(): void {
    console.log('Product 2 from factory 2');
  }
}

function client(factory: AbstractFactory) {
  const product1 = factory.createProduct1();
  const product2 = factory.createProduct2();

  product1.display();
  product2.display();
}

console.log('--- Factory 1 ---');
client(new ConcreteFactory1());

console.log('--- Factory 2 ---');
client(new ConcreteFactory2());
