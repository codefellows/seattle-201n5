var tableEl = document.getElementById('table-demo');

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

function buildTableHeader() {
  var trEl = document.createElement('tr');
  // for (var i = 0; i < months.length; i++) {}
  for (var idx in months) {
    var thEl = document.createElement('th');
    thEl.textContent = months[idx];
    trEl.appendChild(thEl);
  }
  tableEl.appendChild(trEl);
}

function buildTableBody() {
  for (var i = 0; i < 10; i++){
    // handle the name of your store here outside the inner for loop
    var trEl = document.createElement('tr');

    for (var idx in months) {
      var tdEl = document.createElement('td');
      tdEl.textContent = Math.floor(Math.random() * 100);
      trEl.appendChild(tdEl);
    }
    tableEl.appendChild(trEl);

    // handle the totals for the day outside of the inner for loop
  }
}

buildTableHeader();
buildTableBody();
