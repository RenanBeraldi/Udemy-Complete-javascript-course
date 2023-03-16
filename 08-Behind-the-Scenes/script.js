'use strict';

///////////////////////////////
// Scoping in practice
///////////////////////////////
// function calcAge(birthYear) {
//   const age = currentYear - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's varible
//       const firstName = 'Steven';

//       // Reassigning outer scope's variable
//       output = 'NEW OUTPUT';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const currentYear = new Date().getFullYear();
// const firstName = 'Renan';
// calcAge(2002);

///////////////////////////////
// Hoisting and TDZ in practice
///////////////////////////////
// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Renan';
// let job = 'Programmer';
// const year = 2002;

// // Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow);
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Examples

// if (!numProducts) {
//   deleteShoppingCart();
// }

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

///////////////////////////////
// this keyword in practice
///////////////////////////////
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(2002);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(2002);

// const renan = {
//   year: 2002,
//   calcAge: function () {
//     console.log(this);
//     console.log(new Date().getFullYear() - this.year);
//   },
// };
// renan.calcAge();

// const matilda = {
//     year: 2017,
// }

// matilda.calcAge = renan.calcAge;
// matilda.calcAge();

// const f = renan.calcAge;
// f();

// ///////////////////////////////
// // Regular Functions vs. Arrow Functions
// ///////////////////////////////

// // var firstName = 'Matilda';

// const renan = {
//   firstName: 'Renan',
//   year: 2002,
//   calcAge: function () {
//     console.log(this);
//     console.log(new Date().getFullYear() - this.year);

//     // Solution 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   // console.log(this.year >= 1981 || this.year <= 1996);
//     // };
//     // isMillenial();

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey, ${this.firstName}`);
//   },
// };
// renan.greet();
// renan.calcAge();

// // arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8);

///////////////////////////////
// Primitives vs. Objects (Primitives vs. Reference types)
///////////////////////////////

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'Renan',
//     age: 21,
// };
// const friend = me;
// friend.age = 27;

// console.log('Friend', friend);
// console.log('Me', me);

///////////////////////////////
// Primitives vs. Objects in practice
///////////////////////////////

// Primitive Types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// // Reference Types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage: ', jessica);
// console.log('After marriage: ', marriedJessica);
// // marriedJessica = {};

// // Copying objects
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before marriage: ', jessica2);
// console.log('After marriage: ', jessicaCopy);