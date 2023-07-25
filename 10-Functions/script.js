'use strict';
////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
////////////////////////////////
// Sometimes in JS, we need a function that is only executed once. Basically a function that disappears right after it's called once.
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

(function () {
  console.log('This will never run again');
})(); // This pattern is called IIFE
// Wrapping into parenthesis, we basically transformed the statement that we had before into an expression.

// The same work for arrow function.
(() => console.log('This will ALSO never run again'))();

// Why was this pattern actually invented?
// We already know that functions create scopes. What's important here, is that one scope does not have access to variables from an inner scope. We also say that data defined inside a scope is private, we also say that this data is encapsulated.
// Data encapsulation and data privacy are extremely important concepts in programming. So many times we actually need to protect our variables, from being accidentally overwritten by some other parts of the program, or even external scripts or libraries.

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);

////////////////////////////////
// The bind Method
////////////////////////////////
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a set on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Renan Beraldi');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// book.call(eurowings, 23, 'Sarah Williams');

// book.call(lufthansa, 239, 'Mary Cooper');

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// // just like the call Method, bind also allows us to manually set the this keyword for any function call. Now, the difference is that bind does not immediately call the function. Instead, it returns a new function where the this keyword is bound. So it's set to whatever value we pass into bind.
// // book.call(eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, 'Steven Williams'); // This function already has the this keyword set in stone basically. We no longer need to specify the this keyword again.

// // In the call method, we can pass multiple arguments besides the this keyword. And so in the bind method, we can actually do the same. And then all of these arguments will also be basically set in stone. So they will be defined and the function will then always be called with these same arguments. For example, we could use bind to create a function for one specific airline and a specific flight number.

// const bookEW23 = book.bind(eurowings, 23); // This function now only needs the name, cause it was already preset with the flightNum
// bookEW23('Renan Beraldi');
// bookEW23('Martha 23');

// // Specifying parts of the argument beforehand, is actually a common pattern called partial application. So essentially, partial application means that a part of the arguments of the original function are already applied, which means, already set.

// // There are more situations where the bind method is really useful. And one example of that is when we use objects together with event listeners.
// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial Application
// // And in this case of partial application, many times we are not even interested in this keyword, but we still use bind for this.
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// // This here is the general function for adding tax. But now let's say that there is one tax that we use all the time.
// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * rate;
// console.log(addVAT(100));
// console.log(addVAT(23));
// // This is creating a more specific function based on a more general function.

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

////////////////////////////////
// The Call and Apply Methods.
////////////////////////////////
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a set on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Renan Beraldi');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // does not work
// // book(23, 'Sarah Williams');

// book.call(eurowings, 23, 'Sarah Williams');

// book.call(lufthansa, 239, 'Mary Cooper');

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// // Apply method
// // The apply method does basically the same thing. The only difference is that apply does not receive a list of arguments after the this keyword. But instead, it's gonna take an array of the arguments.
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// // This apply method is no longer used in JS, we actually have a Better way of doing the exact same thing.
// book.call(swiss, ...flightData); // Using the spread operator.

////////////////////////////////
// Functions Returning Functions
////////////////////////////////
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey'); // This value now is actually a function, essentially the function that is returned by "greet". This means that we can now call the greeterHey function as if it was any other function.
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')(/*<- this is a function*/ 'Jonas'); // <- returning the function that is inside of it.

// // What's the point to have functions returning other functions?
// // This will become extremely useful in some situations. And especially if we're using a really important programming paradigm called functional programming.

// const greeter = greeting => name => console.log(`${greeting} ${name}`);

// greeter('Hi')('Renan');

////////////////////////////////
// Functions Accepting Callback Functions
////////////////////////////////

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-Order function
// const transformer = function (str, fn) {
//   console.log(`Original String ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`); // name Property to show the name of the function.
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('✋');
// };
// document.body.addEventListener('click', high5);
// // The concept of callback functions is used all the time in built in JavaScript functions, there are many many more examples, for example the forEach function that we call on arrays
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

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
