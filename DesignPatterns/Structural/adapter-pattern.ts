interface ISoup {
  useSpoon(): void;
}

interface ICake {
  useFork(): void;
}

class Soup implements ISoup {
  useSpoon() {
    console.log('Eating with spoon');
  }
}

class Cake implements ICake {
  useFork() {
    console.log('Eating with fork');
  }
}

class SpoonToForkAdapter implements ICake {
  spoonFood: ISoup;

  constructor(spoonFood: ISoup) {
    this.spoonFood = spoonFood;
  }

  public useFork() {
    console.log('Using fork to eat spoon food.');
    this.spoonFood.useSpoon();
  }
}

const tastySoup = new Soup();
const adaptedSoup = new SpoonToForkAdapter(tastySoup);

// now we can call useFork method on a soup food which has only useSpoon method
adaptedSoup.useFork();
