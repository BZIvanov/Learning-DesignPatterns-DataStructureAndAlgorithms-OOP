class FastDeliveryCompany {
  calculate(item) {
    return item.weight * 1.15;
  }
}

class SpeedDeliveryCompany {
  calculate(item) {
    return item.weight * 1.05;
  }
}

class SecureDeliveryCompany {
  calculate(item) {
    return item.weight * 1.25;
  }
}

class Shipping {
  setStrategy(company) {
    this.company = company;
  }

  calculate(item) {
    return this.company.calculate(item);
  }
}

const fastDeliveryCompany = new FastDeliveryCompany();
const speedDeliveryCompany = new SpeedDeliveryCompany();
const secureDeliveryCompany = new SecureDeliveryCompany();

const shipping = new Shipping();
const orderedItem = { name: 'Book', weight: 0.5 };

shipping.setStrategy(fastDeliveryCompany);
console.log(
  `${shipping.company.constructor.name}: ${shipping.calculate(orderedItem)}`
);

shipping.setStrategy(speedDeliveryCompany);
console.log(
  `${shipping.company.constructor.name}: ${shipping.calculate(orderedItem)}`
);

shipping.setStrategy(secureDeliveryCompany);
console.log(
  `${shipping.company.constructor.name}: ${shipping.calculate(orderedItem)}`
);
