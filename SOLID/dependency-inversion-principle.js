// --- THE WRONG WAY ---
// this example is bad, because if we want to change GreenCard as payment method with Visa we need to refactor the Shop class
class Shop_A {
  constructor(customer) {
    this.greenCard = new GreenCard_A(customer);
  }

  purchaseBoots(quantity) {
    this.greenCard.makePayment(quantity * 52.5 * 100);
  }
}

class GreenCard_A {
  constructor(customer) {
    this.customer = customer;
  }

  makePayment(cents) {
    console.log(`${this.customer} made payment of ${cents / 100} with GC`);
  }
}

class Visa_A {
  makePayment(customer, dollars) {
    console.log(`${customer} made payment of ${dollars} with Visa`);
  }
}

const shop_a = new Shop_A('Iva');
shop_a.purchaseBoots(2);

// --- THE RIGHT WAY ---
// with this example the processors are responsible to handle the logic so we don't need to change the shop class
class Shop {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseBoots(quantity) {
    this.paymentProcessor.makePayment(quantity * 52.5);
  }
}

class GreenCard {
  constructor(customer) {
    this.customer = customer;
  }

  makePayment(cents) {
    console.log(`${this.customer} made payment of ${cents / 100} with GC`);
  }
}

class GreenCardProcessor {
  constructor(customer) {
    this.greenCard = new GreenCard(customer);
  }

  makePayment(dollars) {
    this.greenCard.makePayment(dollars * 100);
  }
}

class Visa {
  makePayment(customer, dollars) {
    console.log(`${customer} made payment of ${dollars} with Visa`);
  }
}

class VisaProcessor {
  constructor(customer) {
    this.customer = customer;
    this.visa = new Visa();
  }

  makePayment(dollars) {
    this.visa.makePayment(this.customer, dollars);
  }
}

const shop1 = new Shop(new GreenCardProcessor('Iva'));
shop1.purchaseBoots(2);

const shop2 = new Shop(new VisaProcessor('Iva'));
shop2.purchaseBoots(2);
