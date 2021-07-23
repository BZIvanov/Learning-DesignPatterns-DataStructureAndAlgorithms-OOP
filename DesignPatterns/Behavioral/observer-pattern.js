class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((f) => f !== fn);
  }

  fire() {
    this.observers.forEach((fn) => fn());
  }
}

const subject = new Subject();

function first() {
  console.log('First observer firing');
}

function second() {
  console.log('Second observer firing');
}

subject.subscribe(first);
subject.subscribe(second);
subject.fire();
console.log(`Active observers: ${subject.observers.length}`);

subject.unsubscribe(first);
subject.fire();
console.log(`Active observers: ${subject.observers.length}`);
