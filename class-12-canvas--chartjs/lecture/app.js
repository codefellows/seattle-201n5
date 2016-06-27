//****DATA****//

var allAvocados = [];
var chartLabels = [];
var chartVotes = [];

//****DOM ELEMENTS****//

var img1 = document.getElementsByClassName('img1')[0];
var img2 = document.getElementsByClassName('img2')[0];
var displaySection = document.getElementById('display');
var resultsButton = document.getElementById('button');

//****CONSTRUCTOR & INSTANCES****//

function Avocado(name, path) {
  this.name = name;
  this.path = path;
  this.timesShown = 0;
  this.votes = 0;
  allAvocados.push(this);
}

var hand = new Avocado('hand', 'img/avocado-hand.png');
var cartoon = new Avocado('cartoon', 'img/avoCartoon.jpg');
var hass = new Avocado('hass', 'img/hass.jpg');
var ripe = new Avocado('ripe', 'img/ripe-avocado.png');
var bird = new Avocado('bird', 'img/avocado-bird.jpg');

//****IMAGE & VOTING FUNCTIONS****//

function randomIndex (arr) {
  return Math.floor(Math.random() * arr.length);
}

function getIndices (arr) {
  var ind1 = randomIndex(arr);
  var ind2 = randomIndex(arr);

  while (ind2 === ind1) {
    ind2 = randomIndex(arr);
  }

  return [ind1, ind2];
}

function displayPics () {
  var indices = getIndices(allAvocados);
  var leftImg = allAvocados[indices[0]];
  var rightImg = allAvocados[indices[1]];

  img1.src = leftImg.path;
  img2.src = rightImg.path;

  img1.id = leftImg.name;
  img2.id = rightImg.name;

  leftImg.timesShown += 1;
  rightImg.timesShown += 1;
}

function tallyVote(id) {
  for (var avo of allAvocados) {
    if (avo.name === id) {
      avo.votes += 1;
    }
  }
}

//****CHART FUNCTIONS****//

function updateChartData() {
  for (var i = 0; i < allAvocados.length; i++) {
    chartLabels[i] = allAvocados[i].name;
    chartVotes[i] = allAvocados[i].votes;
  }
}

function makeChart() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  updateChartData();

  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartLabels,
      datasets: [
        {
          label: 'Votes',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: chartVotes
        }
      ]
    }
  })
}

//****EVENT LISTENERS****//

displaySection.addEventListener('click', function(event) {
  if (event.target.id !== 'display') {
    tallyVote(event.target.id);
    displayPics();
  }
})

resultsButton.addEventListener('click', makeChart);

//****SHOW FIRST PICS****//

displayPics();
