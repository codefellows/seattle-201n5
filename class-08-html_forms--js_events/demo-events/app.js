// ELEMENTS
var benton = document.getElementById('larry');
var wizard = document.getElementById('curly');
var gandalf = document.getElementById('moe');
var trump = document.getElementById('trump');

// COUNTER VARIABLES
var h1Count = 0, h2Count = 0, h3Count = 0;

// EVENT LISTENERS (listen for a click then call an event handler)
benton.addEventListener('click', handleH1Click);
wizard.addEventListener('dblclick', handleH2Click);
gandalf.addEventListener('mouseover', handleH3Click);
gandalf.addEventListener('click', handleH3Click);

// EVENT HANDLERS (functions that are called by event listeners)
function handleH1Click() {
  trumpTest();
  console.log('The H1 was clicked');
  h1Count += 1;
  if (h1Count % 2 === 0) {
    benton.className = 'cyan';
  } else {
    benton.className = 'orange';
  }
  benton.textContent = 'I WAS CLICKED ' + h1Count + ' TIMES';
}

function handleH2Click() {
  trumpTest();
  console.log('The H2 was clicked');
  h2Count += 1;
  if (h2Count % 2 === 0) {
    wizard.className = 'red';
  } else {
    wizard.className = 'blue';
  }
  wizard.textContent = 'I WAS DOUBLE-CLICKED ' + h2Count + ' TIMES';
}

function handleH3Click() {
  trumpTest();
  console.log('The H3 was clicked');
  h3Count += 1;
  if (h3Count % 2 === 0) {
    gandalf.className = 'green';
  } else {
    gandalf.className = 'yellow';
  }
  gandalf.textContent = 'I WAS MOUSED OVER OR CLICKED ' + h3Count + ' TIMES';
}

function trumpTest() {
  if (h1Count + h2Count + h3Count > 19) {
    document.body.style.backgroundColor = 'black';
  }
}
