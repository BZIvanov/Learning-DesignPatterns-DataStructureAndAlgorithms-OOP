class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    this.value = command.undo(this.value);
  }
}

class AddCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    return currentValue + this.value;
  }

  undo(currentValue) {
    return currentValue - this.value;
  }
}

class SubtractCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    return currentValue - this.value;
  }

  undo(currentValue) {
    return currentValue + this.value;
  }
}

class MultiplyCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    return currentValue * this.value;
  }

  undo(currentValue) {
    return currentValue / this.value;
  }
}

class DivideCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    return currentValue / this.value;
  }

  undo(currentValue) {
    return currentValue * this.value;
  }
}

class AddThenMultiplyCommand {
  constructor(addValue, multiplyValue) {
    this.addCommand = new AddCommand(addValue);
    this.multiplyCommand = new MultiplyCommand(multiplyValue);
  }

  execute(currentValue) {
    const result = this.addCommand.execute(currentValue);
    return this.multiplyCommand.execute(result);
  }

  undo(currentValue) {
    const result = this.multiplyCommand.undo(currentValue);
    return this.addCommand.undo(result);
  }
}

const calculator = new Calculator();

console.log('Calculator start at 0 and add 5');
calculator.executeCommand(new AddCommand(5));
console.log(calculator.value);

console.log('Multiply by 4');
calculator.executeCommand(new MultiplyCommand(4));
console.log(calculator.value);

console.log('Undo multiplication');
calculator.undo();
console.log(calculator.value);

console.log('Add 4 and multiply by 2');
calculator.executeCommand(new AddThenMultiplyCommand(4, 2));
console.log(calculator.value);
