class Template {
  build(ingredients) {
    this.turnOnOven();
    this.getIngredients(ingredients);
    this.cook();
    this.serve();
  }
}

class SoupCooker extends Template {
  turnOnOven() {
    console.log('Oven is on.');
  }

  getIngredients(ingredients) {
    console.log('Using the following ingredients: ' + ingredients.join(', '));
  }

  cook() {
    console.log('Cooking soup');
  }

  serve() {
    console.log('The soup is served');
  }
}

class CakeCooker extends Template {
  turnOnOven() {
    console.log('Oven is on.');
  }

  getIngredients(ingredients) {
    console.log('Using the following ingredients: ' + ingredients.join(', '));
  }

  cook() {
    console.log('Cooking cake');
  }

  serve() {
    console.log('The cake is served');
  }
}

console.log('--- Soup ---');
const soup = new SoupCooker();
soup.build(['carrots', 'onions']);

console.log('--- Cake ---');
const cake = new CakeCooker();
soup.build(['chocolate', 'flour']);
