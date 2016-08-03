function printUser(name, age) {
  console.log('Hello, ' + name + '. ' + age + ' is super old!');
  return 'Hello world';
}

function foo() {
  return 'Something super simple';
}

sumTwoNumbers(100, 200);

// This is called a function declaration - use this for now.
function sumTwoNumbers(numOne, numTwo) {
  console.log(arguments);
  return numOne + numTwo;
}

sumTwoNumbers(100, 200);

// sayHello('Scott'); // This one will not run

// This is called a function expression (don't use this way of defining function yet)
var sayHello = function(name) {
  var message = 'Hello, ' + name;

  return message;
};

var returnValue = sayHello('Scott');
console.log(returnValue);
