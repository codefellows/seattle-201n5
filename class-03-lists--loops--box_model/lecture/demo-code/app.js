// while loop
// while (true) {
//   // Do this code
// }

// var userNum = parseInt(prompt('Guess my number between 1 and 100')); // => '44'
// var answer = 44;
//
// while (userNum !== answer) {
//   if (isNaN(userNum)) {
//     userNum = parseInt(prompt('Guess again, that was not a number'));
//   } else if (userNum > answer) {
//     userNum = parseInt(prompt('Guess again, that was too high'));
//   } else if (userNum < answer) {
//     userNum = parseInt(prompt('Guess again, that was too low'));
//   }
// }
// // We end up here as soon as the while loop validates as true
// alert('Congrats the number was 44');

// Do While Loop
// do {
  // this code
// } while(true)
//
// var answer = 44;
// do {
//   // This will always run once before checking the condition in the while ();
//   var userNum = parseInt(prompt('Guess my number between 1 and 100'));
// } while (userNum !== answer);

// for loops
// for (start; stop; step) {
  // do some code
// }
// var arr = ['orange', 'pink', 'green', 'blue'];
// var userGuess = prompt('Guess one of my favorite colors');
//
// var isTrue = false;
//
// for (var i = 0; i < arr.length; i++) {
//   if (userGuess === arr[i]) {
//     isTrue = true;
//     break;
//   }
// }
//
// if (isTrue) {
//   alert('Congrats that is one of my favs');
// } else {
//   alert('That color is not one of my favs');
// }

var userName = prompt('Tell me your name');
userName = userName || 'Dan';
