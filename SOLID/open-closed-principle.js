// --- THE WRONG WAY ---
// below is bad example, because if we want to add different type of questions we need to change the implementation of the switch case
function quiz(list) {
  list.forEach((item) => {
    console.log(item.question);
    switch (item.type) {
      case 'bool':
        console.log('true');
        console.log('false');
        break;
      case 'multi':
        item.options.forEach((option) => console.log(option));
        break;
    }
    console.log('\n');
  });
}

const list = [
  { type: 'bool', question: 'July is in the summer?' },
  {
    type: 'multi',
    question: 'How many seasons in the year?',
    options: [1, 2, 3, 4],
  },
];

// --- THE RIGHT WAY ---
// now if we want to add more type of questions we just create new class and create an instance of it in the array with questions
class Bool {
  constructor(question) {
    this.question = question;
  }

  print() {
    console.log('true');
    console.log('false');
  }
}

class Multi {
  constructor(question, options) {
    this.question = question;
    this.options = options;
  }

  print() {
    this.options.forEach((option) => console.log(option));
  }
}

class Text {
  constructor(question) {
    this.question = question;
  }

  print() {
    console.log('Fill you answer:');
  }
}

const qList = [
  new Bool('July is in the summer?'),
  new Multi('How many seasons in the year?', [1, 2, 3, 4]),
  new Text('Capital of Bulgaria?'),
];

qList.forEach((item) => {
  console.log(item.question);
  item.print();
  console.log('\n');
});
