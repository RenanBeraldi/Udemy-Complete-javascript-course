'use strict';
////////////////////////////////
// How Passing Arguments Works: Value vs. Reference
////////////////////////////////

const flight = 'LH234';
const renan = {
  name: 'Renan Beraldi',
  passport: 478468764876,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 478468764876) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, renan);
// console.log(flight);
// console.log(renan);

// Is the same as doing...
// const flightNum = flight;
// const passenger = renan; // When we try to copy an object like this, we are only copying the reference to that object in the memory heap, but they both point to the same object object in memory.

// In summary, passing a primitive type to a function is really just the same as creating a copy like this "const flightNum = flight", outside of the function.

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(renan);
checkIn(flight, renan);

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
