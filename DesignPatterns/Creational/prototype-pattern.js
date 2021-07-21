const personPrototype = {
  city: 'Sofia',
  getFullName() {
    return `${this.name} ${this.lastName}`;
  },
};

const person = Object.create(personPrototype, {
  firstName: {
    value: 'Iva',
    writable: false,
    enumerable: true,
  },
  lastName: {
    value: 'Ivanova',
    writable: false,
    enumerable: true,
  },
});

console.log(person);
