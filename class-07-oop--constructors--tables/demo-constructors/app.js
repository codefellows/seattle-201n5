// Demo for objects to constructors

var john = {
  course: '201d7',
  firstName: 'John',
  lastInitial: 'S',
  faveNumber: 24,
  isCodeNinja: true,
  intro: function() {
    console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
  }
};

// I would need 242 lines of code to model our class this way
// (13 students * 11 lines each)

// What if... I had a function to make these many similar objects for me? A function where I could pass in a student's unique characteristics as arguments, and then that function would make the individual objects?

// Something like this would then make Jeff:
// var john = new Student('John', 'S', 24);

// Maybe I could take the desired object literal, and adapt it into a function that would make it?

// That's a constructor function. Let's make one right here.

// What if I wanted to make an array of students?
// var mahClass = [john, uma, jennifer, dylan];
// This is annoying, so let's push from the constructor!
// var mahClass = [];
// mahClass.push(this);
