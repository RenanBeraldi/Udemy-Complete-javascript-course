'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const renan = new Person('Renan', 2002);
console.log(renan);

const matilda = new Person('matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);

console.log(renan instanceof Person);
