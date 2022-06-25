// example 1 with Class
class Theme {
  constructor() {
    if (Theme.instance instanceof Theme) {
      return Theme.instance;
    }

    this.visuals = {
      color: 'white',
      opacity: Math.random(),
    };

    Object.freeze(this.visuals);
    Object.freeze(this);
    Theme.instance = this;
  }

  get(key) {
    return this.visuals[key];
  }
}

const firstInstance = new Theme();
const secondInstance = new Theme();

console.log(firstInstance.get('opacity'));
console.log(secondInstance.get('opacity'));

console.log('----------');

// example 2 with Class

class AppC {
  constructor() {}

  run() {
    console.log('App running');
  }

  stop() {
    console.log('App stopped');
  }
}

const myApp = new AppC();
Object.freeze(myApp);
myApp.run();
myApp.stop();
console.log(myApp);

console.log('----------');

// example with Object literal

const AppO = {
  run: () => console.log('AppO running'),
  stop: () => console.log('AppO stopped'),
};

Object.freeze(AppO);

AppO.run();
AppO.stop();

AppO.run = 'Test';
AppO.stop = 5;
console.log('Our App is not changed: ', AppO);
