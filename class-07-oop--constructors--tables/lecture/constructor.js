var pikePlace = {
  name: 'pike place',
  min: 25,
  max: 30,
  getRandNum: function() {
    return Math.random() * 100;
  }
};

var coffeeShops = [];

function CoffeeShop(name, min, max) {
  this.name = name;
  this.min = min;
  this.max = max;
  coffeeShops.push(this);
}

CoffeeShop.prototype.getRandNum = function() {
  return Math.random() * 100;
};

new CoffeeShop('sea-tac', 15, 67);
new CoffeeShop('slu', 50, 300);

// console.log(pikePlace);
// console.log(seaTac);
