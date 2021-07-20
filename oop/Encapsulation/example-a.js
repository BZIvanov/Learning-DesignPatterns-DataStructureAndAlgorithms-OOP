const person = {
  firstName: 'Iva',
  lastName: 'Petrova',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(names) {
    const [fName, lName] = names.split(' ');
    this.firstName = fName;
    this.lastName = lName;
  },
};

console.log(person.fullName); // Iva Petrova
person.fullName = 'Iva Ivanova';

console.log(person.fullName); // Iva Ivanova
