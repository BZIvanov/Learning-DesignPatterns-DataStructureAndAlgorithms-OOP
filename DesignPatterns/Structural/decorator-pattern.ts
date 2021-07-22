abstract class Food {
  public description: string;

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

class Soup extends Food {
  public description = 'Carrot soup';

  public cost(): number {
    return 3.5;
  }
}

class Cake extends Food {
  public description = 'Chocolate cake';

  public cost(): number {
    return 12.5;
  }
}

abstract class FoodOptions extends Food {
  decoratedFood: Food;

  // we will override getDescription method
  public abstract getDescription(): string;

  // we will override cost method
  public abstract cost(): number;
}

class SummerFruits extends FoodOptions {
  decoratedFood: Food;

  constructor(food: Food) {
    super();
    this.decoratedFood = food;
  }

  public getDescription(): string {
    return this.decoratedFood.getDescription() + ' + summer fruits';
  }
  public cost(): number {
    return this.decoratedFood.cost() + 3.2;
  }
}

class ExtraCaramel extends FoodOptions {
  decoratedFood: Food;

  constructor(food: Food) {
    super();
    this.decoratedFood = food;
  }

  public getDescription(): string {
    return this.decoratedFood.getDescription() + ' + extra caramel';
  }
  public cost(): number {
    return this.decoratedFood.cost() + 1.5;
  }
}

let cake = new Cake();
cake = new SummerFruits(cake);
cake = new ExtraCaramel(cake);

console.log(cake);
console.log(cake.cost());
console.log(cake.getDescription());
