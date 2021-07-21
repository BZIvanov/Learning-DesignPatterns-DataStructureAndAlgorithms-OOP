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
