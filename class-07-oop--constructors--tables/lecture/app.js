var allItems = [];

function Item(n, price) {
  this.name = n;
  this.price = price;
  this.tax = 0;
  this.total = 0;
  allItems.push(this);
}

Item.prototype.calcTotal = function () {
  return this.total = parseFloat((this.price + this.tax).toFixed(2));
};

Item.prototype.calcTax = function() {
  this.tax = parseFloat((this.price * 0.095).toFixed(2));
};

Item.prototype.doAllTheMethods = function() {
  this.calcTax();
  this.calcTotal();
};

var socks = new Item('socks', 8.99);
var shoes = new Item('shoes', 49.99);
var pantaloons = new Item('pantaloons', 89.99);

socks.doAllTheMethods();

shoes.calcTax();
shoes.calcTotal();

pantaloons.calcTax();
pantaloons.calcTotal();

//get table
var table = document.getElementById('generated-table');

function makeRow(obj) {
  //make a row
  var row = document.createElement('tr');

  //REPEAT THIS PART
    //make a cell
    var cell = document.createElement('td');
    //give content to cell
    cell.textContent = obj.name;
    //append cell to the row
    row.appendChild(cell);

  //append row to the table
  table.appendChild(row);
}

makeRow(socks);
