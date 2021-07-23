class Employee {
  constructor(name, salary) {
    this.name = name;
    this._salary = salary;
  }

  get salary() {
    return this._salary;
  }

  set salary(value) {
    this._salary = value;
  }

  accept(visitorFn) {
    visitorFn(this);
  }
}

const iva = new Employee('Iva', 2500);
console.log(iva.salary);

function increaseSalary(employee) {
  employee.salary = employee.salary * 1.25;
}

iva.accept(increaseSalary);
console.log(iva.salary);
