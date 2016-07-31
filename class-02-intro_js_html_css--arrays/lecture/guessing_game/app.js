// Reminder to talk about pseudo-code!
var userName = prompt('Hey user! What\'s your name?'); // => "Scott"

alert('Welcome to the site ' + userName); // userName = "Scott"

var questionOne = prompt('Does Dan like cats?');
questionOne = questionOne.toUpperCase();
console.log('this is the first value of question ' + questionOne);

if (questionOne === 'Y') {
  console.log('This is the if');
  alert('Congrats ' + userName + '. You got that right!');
} else {
  console.log('This is the else');
  alert('Sad trombone! ' + userName + ', you got that wrong!');
}

var questionTwo = prompt('Am I over the age of 30?').toUpperCase();
// .toUpperCase is forcing the user input to upper case format.
console.log('this is the second value of question', questionTwo);

if (questionTwo === 'Y') {
  alert('You guessed it right ' + userName);
} else {
  alert('Sorry, that\'s wrong');
}

var questionThree = prompt('Can Dan bike more than 2 miles?').toUpperCase();
if (questionThree === 'Y') {
  alert('You got it wrong. He\'s winded');
} else if (questionThree === 'N') {
  alert('That\'s totaly correct!');
} else {
  // questionThree = prompt('Hey you need to enter a Y or N answer!');
}

// 1. prompt the user for their name, and store the value in a var.
// 2. alert the user with a customized welcome to the site.
// 3. Ask the user a series of y/n questions
  // a. If yes: congrats to the user, and move forward.
  // b. If no: sad trombone to the user, and move forward.
