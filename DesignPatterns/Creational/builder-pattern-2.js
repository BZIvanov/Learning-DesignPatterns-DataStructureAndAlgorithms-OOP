// below code is an example of using and switching between 2 subbuilders

class SomePerson {
  constructor() {
    // person address info
    this.streetAddress = this.postcode = this.city = '';
    // person employment info
    this.companyName = this.position = '';
    this.annualIncome = 0;
  }

  toString() {
    return `The person lives at ${this.streetAddress}, ${this.city}, ${this.postcode} and works at ${this.companyName} as a ${this.position} earning ${this.annualIncome}`;
  }
}

class SomePersonBuilder {
  constructor(person = new SomePerson()) {
    this.person = person;
  }

  get lives() {
    return new PersonAddressBuilder(this.person);
  }

  get works() {
    return new PersonJobBuilder(this.person);
  }

  build() {
    return this.person;
  }
}

class PersonJobBuilder extends SomePersonBuilder {
  constructor(person) {
    super(person);
  }

  atCompany(companyName) {
    this.person.companyName = companyName;
    return this;
  }

  asA(position) {
    this.person.position = position;
    return this;
  }

  earning(annualIncome) {
    this.person.annualIncome = annualIncome;
    return this;
  }
}

class PersonAddressBuilder extends SomePersonBuilder {
  constructor(person) {
    super(person);
  }

  atAddress(streetAddress) {
    this.person.streetAddress = streetAddress;
    return this;
  }

  withPostcode(postcode) {
    this.person.postcode = postcode;
    return this;
  }

  inCity(city) {
    this.person.city = city;
    return this;
  }
}

const pb = new SomePersonBuilder();
const myPerson = pb.lives
  .atAddress('blvd. Bulgaria')
  .inCity('Sofia')
  .withPostcode('1234')
  .works.atCompany('AwesomeCompany')
  .asA('Developer')
  .earning(7800)
  .build();

console.log(myPerson.toString());
