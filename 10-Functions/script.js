'use strict';
////////////////////////////////
// Functions Accepting Callback Functions
////////////////////////////////

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order function
const transformer = function (str, fn) {
  console.log(`Original String ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`); // name Property to show the name of the function.
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('✋');
};
document.body.addEventListener('click', high5);
// The concept of callback functions is used all the time in built in JavaScript functions, there are many many more examples, for example the forEach function that we call on arrays
['Jonas', 'Martha', 'Adam'].forEach(high5);

// The first big advantage of this is that it makes it easy to split up our code into more reusable and interconnected parts.
// But there is a second and way more important advantage, which is the fact that callback functions allows us to create abstraction. Abstraction is something really important in programming. So basically what abstraction means is that we hide the detail of some code implementation because we don't really care about all that detail. And this allows us to think about problems at a higher more abstract level.
// For our code example, the "transformer" function does not care at all how the string is transformed. 

////////////////////////////////
// First-Class and Higher-Order Functions
////////////////////////////////

// JavaScript is a language that has First-Class functions, which in technical terms means that functions are so-called first citizens. In practice, that means that functions are simply treated as values. Why does JS works this way? It's simply because functions are really just another type of objects in JS. And since objects are values, functions are values too.

// And since functions are values, there is a bunch of interesting things that we can do with them, like storing them in variables or objects properties.
// We can also pass functions as arguments to other functions.
// We can return functions from another functions.

// Since functions are objects, many type of objects in JS have methods, like array methods. There are also function methods, methods that we can call on functions.

// The fact that JS has first-class functions, makes it possible for us to use and write higher-order functions

// A higher-order function is either a function that receives another function as an argument, or a function that returns a new function.

/* 1. Function that receives another function:
const greet = () => console.log('Hey, Renan');
btnClose.addEventListener('click', greet); */

// Here the addEventListener is the Higher-Order function, well, because it receives another function as an input, the greet function. And we call the function that is passed in is a callback function. That's because the callback function will be called later by the higher-order function.

/* 2. Function that returns new function:
function count() {
    let counter = 0;
    return function () {
        counter++;
    };
} */

// First-Class functions is just a feature that a programming language either has or does not have. All that means is that all functions are values. All it means is that all functions are values. There are however Higher-Order functions in practice, which is possible because the language supports first class functions.

////////////////////////////////
// How Passing Arguments Works: Value vs. Reference
////////////////////////////////

// const flight = 'LH234';
// const renan = {
//   name: 'Renan Beraldi',
//   passport: 478468764876,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 478468764876) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// // checkIn(flight, renan);
// // console.log(flight);
// // console.log(renan);

// // Is the same as doing...
// // const flightNum = flight;
// // const passenger = renan; // When we try to copy an object like this, we are only copying the reference to that object in the memory heap, but they both point to the same object object in memory.

// // In summary, passing a primitive type to a function is really just the same as creating a copy like this "const flightNum = flight", outside of the function.

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(renan);
// checkIn(flight, renan);

// There are two term thar are used all the time when dealing with functions, which is passing by value, and passing by reference.
// JavaScript does not have passing by reference, only passing by value, even though it looks like it's passing by reference. Passing by reference is like you could pass a reference to the value of five, and then the original value, outside of the function, would be changed.
// For objects, we do in fact pass in a reference. So the memory address of the object. However, that reference itself is still a value. It's simply a value that contains a memory address. So, basically, we pass a reference to the function, but we do not pass by reference.

////////////////////////////////
// Default Parameters
////////////////////////////////
// Sometimes it's useful to have functions where some parameters are set by default. This way we do not have to pass them in manually in case we don't want to change the default.

// const bookings = [];

// // ES6 way to set default values is to write after expressing the parameter of the function like this: "numPassengers = 1"

// // Another really cool thing about default values is that they can contain any expression. For example we could do "* 1.2", like this "price = 199 * 1.2". But what's even more useful is that we can actually use the values of other parameters. "price = 199 * numPassengers". PS: This only works for parameters that are defined in the list before this one.

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   // numPassengers = numPassengers || 1; // Short-circuiting
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800); // We can overwrite the default values
// createBooking('LH1234', 2);
// createBooking('LH1234', 5);

// // We can never skip a parameter when we call the function, like we cannot simply call the function and just leave the default value of the numPassengers and set the price like this:
// createBooking('LH123', 1000);
// // There is a nice trick to make this works, we can use set the parameter as undefined. It's the same thing than do not set nothing
// createBooking('LH123', undefined, 1000);
