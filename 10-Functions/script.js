'use strict';

////////////////////////////////
// Default Parameters
////////////////////////////////

// Sometimes it's useful to have functions where some parameters are set by default. This way we do not have to pass them in manually in case we don't want to change the default.

const bookings = [];

// ES6 way to set default values is to write after expressing the parameter of the function like this: "numPassengers = 1"

// Another really cool thing about default values is that they can contain any expression. For example we could do "* 1.2", like this "price = 199 * 1.2". But what's even more useful is that we can actually use the values of other parameters. "price = 199 * numPassengers". PS: This only works for parameters that are defined in the list before this one.

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1; // Short-circuiting
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800); // We can overwrite the default values
createBooking('LH1234', 2);
createBooking('LH1234', 5);

// We can never skip a parameter when we call the function, like we cannot simply call the function and just leave the default value of the numPassengers and set the price like this:
createBooking('LH123', 1000);
// There is a nice trick to make this works, we can use set the parameter as undefined. It's the same thing than do not set nothing 
createBooking('LH123', undefined, 1000);
