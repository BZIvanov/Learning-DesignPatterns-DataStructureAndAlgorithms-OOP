class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(name) {
    this._firstName = name;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(name) {
    this._lastName = name;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

const person = new Person('Iva', 'Petrova');

console.log(person.fullName); // Iva Petrova

person.lastName = 'Ivanova';

console.log(person.fullName); // Iva Ivanova
