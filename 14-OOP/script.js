'use strict';

//////////////////////////////////////////
// Constructor Functions and the new Operator

// We can use constructor functions to build an object using a function.

// A constructor functions is a completely normal function. The only difference between a regular function, and a constructor function, is that we call a constructor function with the new operator.

// There is a convention that every constructor function needs to start with a capital letter.
// An arrow function will actually not work as a function constructor. And that's because it doesn't have its own "this keyword"
const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never add a method inside a constructor function
  // We need to use prototype inheritance to use methods in objects.
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const renan = new Person('Renan', 2002);
console.log(renan);
// This new operator is actually a very special operator, because what it does is to call this Person function, but it does a whole lot more than just that.

// 1. New {} (empty object) is created
// 2. function is called / the "this keyword" will be set for this newly created object.
// 3. This newly created object is linked to a prototype.
// 4. Function automatically return that object {}

// WHAT IS HAPPENING HERE?
// We are calling the constructor function (Person) with the "new operator". And so therefore a new empty object is created right away. The function is called and then the "this keyword" is that empty object. And then in the function, we start to set properties to that object. And we give them the exact same name as the parameters that we're passing by the function (this.firstName = firstName), but it could have any other name, it doesn't have to be the same name as the arguments. By the end of the function the "this keyword" has the two new properties. And then, that object that was created in the beginning, is then automatically returned from the function. And so at this point, that is the object with the two properties (firstName & birthYear)

const matilda = new Person('Matilda', 2017);
const jack = new Person('jack', 1975);

console.log(matilda, jack);

// We created an object from a constructor function. Constructor functions have been used since the beginning of the JavaScript to kind of simulate classes. And so therefore we can still say "renan, matilda and jack" are an instance of Person.
// There is an operator that we can use to test for that.
console.log(renan instanceof Person);
const jay = 'Jay';
console.log(jay instanceof Person);

// The properties will be available on all the instances that are created through this constructor function.
