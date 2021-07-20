// OPTION 1 - the classic option
class Location {
  constructor(lng, lat) {
    this.lng = lng;
    this.lat = lat;
  }
}

class Person {
  constructor(name) {
    this.name = name;
  }
}

class PersonBuilder {
  constructor(name) {
    this.person = new Person(name);
  }

  setAge(age) {
    this.person.age = age;
    return this;
  }

  setCity(city) {
    this.person.city = city;
    return this;
  }

  setCurrentLocation(lng, lat) {
    this.person.currentLocation = new Location(lng, lat);
    return this;
  }

  build() {
    return this.person;
  }
}

const person = new PersonBuilder('Iva')
  .setCity('Sofia')
  .setCurrentLocation(29.751, 157.83)
  .build();
console.log(person);

// OPTION 2 - alternative option
class Location2 {
  constructor(lng, lat) {
    this.lng = lng;
    this.lat = lat;
  }
}

class Person2 {
  constructor(name, { age, city = 'Sofia', location } = {}) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.currentLocation = location;
  }
}

const person2 = new Person2('Mira', {
  location: new Location2(29.751, 157.83),
});
console.log(person2);
