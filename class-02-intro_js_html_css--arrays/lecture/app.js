var userName = prompt('What\'s your name?');
alert('Welcome to my page, ' + userName);

var questionOne = prompt('What state was I born in?').toLowerCase();
// questionOne.toLowerCase();  // we can use the toLowerCase string method on the variable or prompt (shorthand).

if (questionOne === 'washington') {
  alert('Yay, you know me so well! \n Gold Star!');
} else {
  alert('Sorry, you no know me... Sad trombone.');
}

var questionTwo = prompt('Am 33 years young?').toUpperCase();

if (questionTwo === 'Yes' || questionTwo === 'y') {
  alert('Boomstick! \n Gold Star!');
} else {
  alert('Panda tears... you\'re wrong');
}
