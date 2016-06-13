var allItems = [];
var grandTotals = {
  price: 0,
  tax: 0,
  total: 0
};

var socks = new Item('socks', 8.99);
var shoes = new Item('shoes', 49.99);
var pantaloons = new Item('pantaloons', 89.99);

var form = document.getElementById('form');
var table = document.getElementById('table');
var tbody = document.getElementById('table-body');
var tfoot = document.getElementsByTagName('tfoot')[0];

function Item(n, price) {
  this.name = n;
  this.price = price;
  this.tax = 0;
  this.total = 0;
  allItems.push(this);
}

Item.prototype.calcTax = function() {
  this.tax = parseFloat((this.price * 0.095).toFixed(2));
};

Item.prototype.calcTotal = function () {
  return this.total = parseFloat((this.price + this.tax).toFixed(2));
};

Item.prototype.updateGrandTotals = function () {
  grandTotals.price += this.price;
  grandTotals.tax += this.tax;
  grandTotals.total += this.total;
};

Item.prototype.doAllTheMethods = function() {
  this.calcTax();
  this.calcTotal();
  this.updateGrandTotals();
};

//compute tax & total for all objects
function updateObjects() {
  for (elem of allItems) {
    elem.doAllTheMethods();
  }
}

function makeItemRow(obj) {
  //make a row
  var row = document.createElement('tr');

  //make a cell
  var nameCell = document.createElement('td');
  //give content to nameCell
  nameCell.textContent = obj.name;
  //append nameCell to the row
  row.appendChild(nameCell);

  var priceCell = document.createElement('td');
  priceCell.textContent = obj.price;
  row.appendChild(priceCell);

  var taxCell = document.createElement('td');
  taxCell.textContent = obj.tax;
  row.appendChild(taxCell);

  var totalCell = document.createElement('td');
  totalCell.textContent = obj.total;
  row.appendChild(totalCell);

  //append row to the table
  tbody.appendChild(row);
}

function makeAllItemRows() {
  for (item of allItems) {
    makeItemRow(item);
  }
}

// function makeTotalRow() {
//   var row = document.createElement('tr');
//
//   var totalCell = document.createElement('th');
//   totalCell.textContent = 'Total';
//   row.appendChild(totalCell);
//
//   var priceCell = document.createElement('th');
//   priceCell.textContent = grandTotals.price;
//   row.appendChild(priceCell);
//
//   var taxCell = document.createElement('th');
//   taxCell.textContent = grandTotals.tax;
//   row.appendChild(taxCell);
//
//   var totalCell = document.createElement('th');
//   totalCell.textContent = grandTotals.total;
//   row.appendChild(totalCell);
//
//   tfoot.appendChild(row);
// }

//alternative implementation: loop through the props in grandTotals
function makeTotalRow() {
  var row = document.createElement('tr');

  var totalCell = document.createElement('th');
    totalCell.textContent = 'Total';
    row.appendChild(totalCell);

  for (prop in grandTotals) {
    var cell = document.createElement('th');
    cell.textContent = grandTotals[prop];
    row.appendChild(cell);
  }

  tfoot.appendChild(row);
}

updateObjects();
makeAllItemRows();
makeTotalRow();
