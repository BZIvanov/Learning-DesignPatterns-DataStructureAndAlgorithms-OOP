// Example 1
interface IPlatform {
  build(app: string): void;
}

class IOS {
  build(app: string) {
    console.log(`${app} build completed`);
  }
}

class Android {
  build(app: string) {
    console.log(`${app} build completed`);
  }
}

class ReactNative {
  name: string;
  private type: IPlatform;

  constructor(name: string, type: IPlatform) {
    this.name = name;
    this.type = type;
  }

  build(platform: string) {
    console.log(`Building ${this.name}`);
    this.type.build(platform);
  }
}

const androidApp = new ReactNative('My App', new Android());
androidApp.build('Android App');

console.log('-------------------');

// Example 2
interface IPaymentProcessor {
  processPayment(payment: string): void;
}

class CashPaymentProcessor {
  processPayment(payment: string) {
    console.log('Processing cash payment...');
    console.log(payment);
    console.log('Payment processed!');
  }
}

class OnlinePaymentProcessor {
  processPayment(payment: string) {
    console.log('Processing online payment...');
    console.log(payment);
    console.log('payment processed!');
  }
}

class User {
  name: string;
  private paymentProcessor: IPaymentProcessor;

  constructor(name: string, paymentProcessor: IPaymentProcessor) {
    this.name = name;
    this.paymentProcessor = paymentProcessor;
  }

  processPayment(product: string) {
    console.log(`Processing payment for ${this.name}`);
    this.paymentProcessor.processPayment(product);
  }
}

const user1 = new User('Iva', new CashPaymentProcessor());
user1.processPayment('Shoes');
const user2 = new User('Kiril', new OnlinePaymentProcessor());
user2.processPayment('Book');
