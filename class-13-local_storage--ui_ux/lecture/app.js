var allUsers = [];


function User(first, last) {
  this.first = first;
  this.last = last;
  allUsers.push(this);
}

User.prototype.addUser = function() {
  var resultsEl = document.getElementById('results');
  var liEl = document.createElement('li');
  liEl.textContent = this.first + ' ' + this.last;
  resultsEl.appendChild(liEl);
};

if (localStorage.allUsers) {
  var lsUsers = JSON.parse(localStorage.getItem('allUsers'));
  for (var j in lsUsers) {
    var lsUser = new User(lsUsers[j].first, lsUsers[j].last);
    lsUser.addUser();
  }
}

// var formEl = document.getElementById('myForm');
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var firstName = event.target.first_name.value;
  var lastName = event.target.last_name.value;
  var newUser = new User(firstName, lastName);
  newUser.addUser();
  localStorage.setItem('allUsers', JSON.stringify(allUsers));
});
