var allProducts = [];

function Product(name, net, gp) {
  this.name = name;
  this.net = net;
  this.gp = gp;
  this.sell = net * gp;
  allProducts.push(this);
}

new Product('Sock', 1.5, .75);
new Product('Bucket', 200, 200);
new Product('Marker', 5, .5);

function buildTable() {
  var tableHeaders = ['Name', 'Net', 'GP', 'Sell'];
  var tableEl = document.getElementById('data-table');
  var headerTrEl = document.createElement('tr');

  for (var idx in tableHeaders) {
    var thEl = document.createElement('th');
    thEl.textContent = tableHeaders[idx];
    headerTrEl.appendChild(thEl);
  }
  tableEl.appendChild(headerTrEl);

  for (var product in allProducts) {
    var productTrEl = document.createElement('tr');
    var nameTdEl = document.createElement('td');
    var netTdEl = document.createElement('td');
    var gpTdEl = document.createElement('td');
    var sellTdEl = document.createElement('td');

    nameTdEl.textContent = allProducts[product].name;
    netTdEl.textContent = allProducts[product].net;
    gpTdEl.textContent = allProducts[product].gp;
    sellTdEl.textContent = allProducts[product].sell;

    productTrEl.appendChild(nameTdEl);
    productTrEl.appendChild(netTdEl);
    productTrEl.appendChild(gpTdEl);
    productTrEl.appendChild(sellTdEl);
    tableEl.appendChild(productTrEl);
  }
};

// buildTable();


var productForm = document.getElementById('product-form');

productForm.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(event.target);
  // Use the event.target to get input values from the form
  // Generate a new Product object from form inputs
  // Render new Product object to the table
});
