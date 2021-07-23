class Person {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }

  store() {
    return new Person(this.name, this.city);
  }

  restore(memento) {
    this.name = memento.name;
    this.city = memento.city;
  }
}

class CareTaker {
  constructor() {
    this.mementos = {};
  }

  add(key, memento) {
    this.mementos[key] = memento;
  }
  get(key) {
    return this.mementos[key];
  }
}

const iva = new Person('Iva Ivanova', 'Sofia');
const mira = new Person('Mira Petrova', 'Plovdiv');

const caretaker = new CareTaker();

caretaker.add(1, iva.store());
caretaker.add(2, mira.store());

console.log('Things go wrong');
iva.name = 'Ivka';
mira.name = 'Mirka';
console.log(iva);
console.log(mira);

console.log('Things get fixed');
iva.restore(caretaker.get(1));
mira.restore(caretaker.get(2));
console.log(iva);
console.log(mira);
