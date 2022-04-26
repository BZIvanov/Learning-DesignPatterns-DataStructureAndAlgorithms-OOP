const personPrototype = {
  city: 'Sofia',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
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
console.log(person.firstName);
console.log(person.city);
console.log(person.getFullName());
