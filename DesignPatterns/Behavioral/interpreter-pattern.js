class Context {
  constructor(input) {
    this.input = input;
    this.output = 0;
  }

  startsWith(str) {
    return this.input.substr(0, str.length) === str;
  }
}

class Expression {
  constructor(one, four, five, nine, multiplier) {
    this.one = one;
    this.four = four;
    this.five = five;
    this.nine = nine;
    this.multiplier = multiplier;
  }

  interpret(context) {
    if (context.input.length === 0) {
      return;
    } else if (context.startsWith(this.nine)) {
      context.output += 9 * this.multiplier;
      context.input = context.input.substr(2);
    } else if (context.startsWith(this.four)) {
      context.output += 4 * this.multiplier;
      context.input = context.input.substr(2);
    } else if (context.startsWith(this.five)) {
      context.output += 5 * this.multiplier;
      context.input = context.input.substr(1);
    }

    while (context.startsWith(this.one)) {
      context.output += 1 * this.multiplier;
      context.input = context.input.substr(1);
    }
  }
}

const romanNumber = 'MCMLXXXVII';
const context = new Context(romanNumber);
console.log(context);
const tree = [];

tree.push(new Expression('M', ' ', ' ', ' ', 1000));
tree.push(new Expression('C', 'CD', 'D', 'CM', 100));
tree.push(new Expression('X', 'XL', 'L', 'XC', 10));
tree.push(new Expression('I', 'IV', 'V', 'IX', 1));

for (let i = 0; i < tree.length; i++) {
  tree[i].interpret(context);
}

console.log(`${romanNumber} = ${context.output}`);
