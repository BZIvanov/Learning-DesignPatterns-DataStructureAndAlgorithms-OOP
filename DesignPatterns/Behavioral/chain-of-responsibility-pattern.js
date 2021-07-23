const inventory = {
  localStoreShelf: [
    { name: 'mouse', qty: 5 },
    { name: 'monitor', qty: 2 },
    { name: 'keyboard', qty: 2 },
  ],
  localStoreWarehouse: [
    { name: 'mouse', qty: 5 },
    { name: 'desktop', qty: 2 },
  ],
  cityStore: [
    { name: 'keyboard', qty: 2 },
    { name: 'desktop', qty: 4 },
    { name: 'wires', qty: 8 },
  ],
  cityWarehouse: [
    { name: 'mouse', qty: 50 },
    { name: 'monitor', qty: 10 },
    { name: 'keyboard', qty: 20 },
    { name: 'desktop', qty: 20 },
    { name: 'wires', qty: 50 },
    { name: 'microphone', qty: 10 },
  ],
};

class Storage {
  constructor(name, inventory = [], deliveryTime = 0) {
    this.name = name;
    this.inventory = inventory;
    this.deliveryTime = deliveryTime;
    this.next = null;
  }

  lookInLocalInventory(itemName) {
    const index = this.inventory.map((item) => item.name).indexOf(itemName);
    return this.inventory[index];
  }

  setNext(storage) {
    this.next = storage;
  }

  find(itemName) {
    const itemFound = this.lookInLocalInventory(itemName);

    if (itemFound) {
      return {
        name: itemFound.name,
        qty: itemFound.qty,
        location: this.name,
        deliveryTime:
          this.deliveryTime === 0 ? 'now' : `${this.deliveryTime} day(s)`,
      };
    } else if (this.next) {
      return this.next.find(itemName);
    } else {
      return `${itemName} is not found anywhere.`;
    }
  }
}

class Store {
  constructor(name, inventory = {}) {
    this.name = name;

    const localStoreShelf = new Storage(
      'Local store shelf',
      inventory.localStoreShelf
    );
    const localStoreWarehouse = new Storage(
      'Local store warehouse',
      inventory.localStoreWarehouse
    );
    const cityStore = new Storage('City store', inventory.cityStore, 1);
    const cityWarehouse = new Storage(
      'City warehouse',
      inventory.cityWarehouse,
      5
    );

    this.storage = localStoreShelf;

    localStoreShelf.setNext(localStoreWarehouse);
    localStoreWarehouse.setNext(cityStore);
    cityStore.setNext(cityWarehouse);
  }

  find(itemName) {
    return this.storage.find(itemName);
  }
}

const shop = new Store('Buying things', inventory);

console.log(shop.find('mouse'));
console.log(shop.find('bottle'));
