class Order {
  constructor() {
    this.paymentPendingState = new PaymentPendingState(this);
    this.cancelledOrderState = new CancelledOrderState(this);
    this.orderBeingPrepared = new OrderBeingPrepared(this);
    this.orderShipedState = new OrderShippedState(this);

    this.setState(this.paymentPendingState);
  }

  setState(state) {
    this.currentState = state;
  }

  getCurrentState() {
    return this.currentState;
  }
}

class PaymentPendingState {
  constructor(order) {
    this.order = order;
  }

  cancel() {
    console.log('Cancelling your unpaid order...');
    this.order.setState(this.order.cancelledOrderState);
  }

  verifyPayment() {
    console.log('Payment verified! Shipping soon.');
    this.order.setState(this.order.orderBeingPrepared);
  }

  ship() {
    console.log('Cannot ship order if payment is pending.');
  }
}

class CancelledOrderState {
  constructor(order) {
    this.order = order;
  }

  cancel() {
    console.log('This order is already cancelled');
    this.order.setState(this.order.cancelledOrderState);
  }

  verifyPayment() {
    console.log('The order is cancelled, you cannot pay anymore');
  }

  ship() {
    console.log('The order is cancelled, you cannot ship it anymore');
  }
}

class OrderBeingPrepared {
  constructor(order) {
    this.order = order;
  }

  cancel() {
    console.log('Cancelling your order... You will be refunded');
    this.order.setState(this.order.cancelledOrderState);
  }

  verifyPayment() {
    console.log('Payment is already verified');
  }

  ship() {
    console.log('Shipping your order now...');
    this.order.setState(this.order.orderShipedState);
  }
}

class OrderShippedState {
  constructor(order) {
    this.order = order;
  }

  cancel() {
    console.log('You cannot cancel an order that has been shipped');
  }

  verifyPayment() {
    console.log('Payment is already verified');
  }

  ship() {
    console.log('Order is already shipped');
  }
}

const order = new Order();

order.getCurrentState().verifyPayment();
order.getCurrentState().ship();
order.getCurrentState().cancel();

console.log('Order state: ' + order.getCurrentState().constructor.name);
