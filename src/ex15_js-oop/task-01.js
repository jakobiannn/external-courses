class Sweet {
  constructor(name, weight) {
    this.name = name
    this.weight = weight;
  }
  getWeight() {
    return this.weight;
  }
  getName() {
    return this.name;
  }
}
class Candy extends Sweet {
  constructor(name, weight, wrapperColor) {
    super(name, weight);
    this.wrapperColor = wrapperColor;
  }
  getColor() {
    return this.wrapperColor;
  }
}
class Chocolate extends Sweet {
  constructor(name, weight, type) {
    super(name, weight);
    this.type = type;
  }
}
let rotFront = new Candy('rotFront', 150);
let blackNight = new Candy('ChernayaNotch', 300, 'red');
let alyenka = new Chocolate('Alyenka', 200, 'milk');

class Present {
  constructor(items) {
    this.items = items;
  }
  addItem(item) {
    this.items.push(item);
    console.log('item added succesfull.')
  }
  getFullWeight() {
    let totalWeight = 0;
    for(let i = 0; i < this.items.length; i++) {
      totalWeight += this.items[i].weight;
    }
    return totalWeight;
  }
  itemSearch(name) {
    for(let i = 0; i < this.items.length; i++){
      if (this.items[i].name === name) {
        console.log('Present found');
        return this.items[i];
      }
    }
    console.log('Present not found!');
    return 0;
  }
}
let present = new Present([rotFront, blackNight]);
console.log(present.getFullWeight());
present.addItem(alyenka);
console.log(present.getFullWeight());
