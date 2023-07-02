'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855 12:30';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '20:00',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
////////////////////////////////////////
// Maps: Fundamentals
////////////////////////////////////////

////////////////////////////////////////
// Sets
////////////////////////////////////////
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);

// console.log(new Set('Renan'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

////////////////////////////////////////
// Coding Challenge #2
////////////////////////////////////////
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],

//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// // 2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) {
//   average += odd;
// }
// average /= odds.length;
// console.log(average);

// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

// console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
// console.log(`Odd of draw: ${game.odds.team1}`);
// console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

////////////////////////////////////////
// Looping Objects: Object Keys, Values, Entries
////////////////////////////////////////

// Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire Object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

////////////////////////////////////////
// Optional Chaining
////////////////////////////////////////
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// // WITH Optional Chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   // console.log(`On ${day}, we open at ${open}`);
//   if (open === 'closed') {
//     console.log(`On ${day}, we are closed`);
//   } else {
//     console.log(`On ${day}, we open at ${open}`);
//   }
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); // Method does not exist

// // Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

// console.log(users[0]?.name ?? 'User array empty');

////////////////////////////////////////
// Looping Arrays: The for-of loop
////////////////////////////////////////
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

////////////////////////////////////////
// Coding Challenge #1
////////////////////////////////////////
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],

//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // Task 1
// const [players1, players2] = game.players;

// // Task 2
// const [gk, ...fieldPlayers] = players1;

// // Task 3
// const [allPlayers] = [...players1, ...players2];

// // Task 4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// // Task 5
// const { team1, x: draw, team2 } = game.odds;

// // Task 6
// const printGoals = function (...players) {
//   console.log(`${players.length} goals scored`);
// };
// printGoals(...game.scored);

// // Task 7
// team1 < team2 && console.log('Team 1 will probably win');
// team2 < team1 && console.log('Team 2 will probably win');

////////////////////////////////////////
// Logical Assignment Operators
////////////////////////////////////////

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // NULLISH assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

////////////////////////////////////////
// Nullish Coalescing Operator (??)
////////////////////////////////////////
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// 0 is a falsy value, but we want a solution that we want to see the number of the guests as 0, not the default value that is being set by the short circuiting with the OR operator.
// The solution for this problem, is to use the Nullish Coalescing Operator. It works almost the same way as the OR operator.

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

// Why does this work? It works with the idea or with the concept of NULLISH VALUES instead of FALSY VALUES
// Nullish Values: null and undefined. It doesn't include 0 or ''.

////////////////////////////////////////
// Short-Circuiting (&& and ||)
////////////////////////////////////////
// (---- OR ----)
// Have only used logical operators only to combine boolean values. But the truth is that we can do a lot more with the AND and OR Operators.
// console.log(3 || 'Renan');
// // The result of this operation is 3, this means that the result of the OR operator doesn't always have to be a boolean.
// // There are 3 properties about Logical Operators:
// // 1st - Use ANY data type
// // 2nd - Return ANY data type
// // 3rd - They do short-circuiting (also called short circuit evaluation).

// // In the case of the OR operator, short circuiting means that if the first value is a truthy value, it will immediately return that first value.
// console.log('' || 'Renan'); // empty string a falsy value
// console.log(true || 0); // the true is a truthy value
// console.log(undefined || null); // undefined is a falsy value

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// // The result of this chain OR operation is 'Hello', essentially, because it is the first truthy value
// // In the OR operation, the result is TRUE, if at least one operand is TRUE

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
// // This operation makes the variable guests2 receive the property numGuests, OR if it is undefined, receive the default value 10.

// // (---- AND ----)
// // The AND operator works in the exact opposite way of the OR operator.
// // The AND operator is only true if all the operands are true.
// console.log(0 && 'Renan');
// // The AND operator short circuits, when the first value is falsy. And then immediately returns that falsy value without even evaluating the second operand.
// console.log(7 && 'Renan');
// // The result of this operation is 'Renan', this means that the first value is truthy, and then the evaluation continues.

// console.log('Hello' && 23 && null && 'Jonas');

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// ------ SUMMARY ------
// The OR operator will return the first truthy value, or the last value, if all the operands are falsy.
// We can use the OR operator to set default values.

// The AND operator will return the first falsy value, or the last value, if all the operands are truthy.
// We can use the AND operator to execute code in the second operand if the first one is true.

////////////////////////////////////////
// Rest Pattern and Parameters
////////////////////////////////////////
// The Rest Pattern looks exactly like the Spread Operator, it has the same syntax with the three dots, but it actually does the opposite of the spread operator. The Rest Pattern uses the exact same syntax however, to collect multiple elements and condense them into an array.

// DESTRUCTURING
// We know that is the Spread Operator because, it's being used on the right side of the Assignment Operator
// const arr = [1, 2, ...[3, 4]];

// // Rest, because on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
// // It's called Rest, because, it takes the remaining elements, of the array, that is not destructured in a variable. And put them in a new array.

// // We can use the (...) on both sides of the assignment operator
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);
// // It does not include any skipped elements, it's really just the rest of the elements. So, for that reason, the Rest Pattern always must be the last in the destructuring assignment. Because otherwise, how will JavaScript know until when it should collect the rest of the array?
// // There can only ever be one rest in any destructuring assignment

// // The Rest Pattern also works in OBJECTS, the difference is that the remaining elements will be collected into a new object and not into a new array.
// const { sat, ...weekdays } = restaurant.openingHours;

// // FUNCTIONS
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// // This is spread operator
// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'spinach', 'olives');
// // This function call below will give us a empty array, cause there is no declaration to the array otherIngredients.
// restaurant.orderPizza('mushrooms');

////////////////////////////////////////
// The Spread Operator
////////////////////////////////////////
// We can use spread operator to basically expand an array into all its elements, basically unpacking all the array elements at one.

// const arr = [7, 8, 9];

// // We will create a new array based on this array, but with some new elements at the beginning
// // Manual way:
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // with Spread Operator
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// // What the Spread Operator does is take all the elements out of the arr. array, and then write them individually
// // This means that we can use the spread operator whenever we would otherwise write multiple values separated by commas. And this situation happens whenever we write an array literal: const arr = [7, 8, 9];

// // We can use the Spread Operator to pass arguments into functions
// // Let's suppose that we want to log the individual elements of the "newArr".
// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // The Spread Operator is similar to destructuring, because it also helps to get elements out of arrays. The big difference is that the Spread doesn't take all the elements from the array, and it also doesn't create new variables. As consequence, it can only be used in places we would otherwise write values separated by commas.

// // We can use the spread operator to create shallow copies of arrays, and to merge two arrays together.
// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // The Spread Operator doesn't work only on arrays, it works at all Iterables.
// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Renan';
// const letters = [...str, ' ', 'B.'];
// console.log(letters);
// console.log(...str);
// // We cannot use the Spread Operator in a template literal
// // console.log(`${...str} Beraldi`);

// // Using the Spread Operator with functions (Real-World Example):
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt('Ingredient 2?'),
//   // prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredients);

// // Since ES 2018, the Spread Operator also works on objects, even though objects are not iterables
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);

//////////////////////////////////////
// Destructuring Objects
//////////////////////////////////////
// To destructure objects, we use the curly braces "{}", cause this is also how we create objects
// We have to provide the variable name, that exactly match the property names that we want to retrieve from the object.
// In an object, the order of the elements does not matter, we don't need to skip elements like is done with arrays.
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // DIFFERENT VARIABLE NAME
// // if we want the variable names different from the property names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // DEFAULT VALUES
// // When we are getting for an API call for example, set default values for values that we don't know that exist, like in Array Destructuring, is really useful.
// // The syntax of setting different variable name, can be combined with it.
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // MUTATING VARIABLES
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// // We cannot do like this:
// // {a, b} = obj;
// // Because the JS is expecting a code block, and we cannot declare nothing to a code block, to solve this, we need to wrap this into parenthesis.
// ({ a, b } = obj);
// console.log(a, b);

// // NESTED OBJECTS
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// // Many times in JS, we have functions with a lot of parameters. But then can be hard to know the order of parameters. Instead of defining the parameters manually, we can pass a object into the function as an argument, and then, the function will destructure that object!
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// // In the function arguments, we can actually do destructuring right away.
// // orderDelivery: function ({starterIndex, mainIndex, address, time}) {
// // As we receive the object in the function, immediately do destructuring, that's why the arguments in the functions need to be the same as the calling, but is not necessary match the order in which we do destructuring

// // DEFAULT VALUES
// // We can use default values in the objects destructuring too, in the function orderDelivery, we can set default values if they cannot be destructured
// // orderDelivery: function ({ starterIndex = 1, mainIndex = 0, address, time  = '20:00' }) {
// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

//////////////////////////////////////
// Destructuring Arrays
//////////////////////////////////////
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // When JS see the brackets on the left side of the equal sign, it knows that is destructuring
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// // Isn't necessary extract all the elements of the array!!!
// // To take elements that is not in order, like the 1st and 3rd element, just leave a "hole (first, ,third)" between the elements
// const [first, , second] = restaurant.categories;
// console.log(first, second);

// // SWITCHING VARIABLES
// // if want to invert the order of the elements in the array, we can do like this
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Without destructuring we would have to do like this
// // let temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // With destructuring
// // We don't need to use "const" or "let", because just reassigning the value
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // We can have a functions returning a array and the result can be destructured into different variables
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // And if we have an array inside an other array (nested array)
// const nested = [2, 4, [5, 6]];

// // how can we get the first value and the entire array?
// // const [i, , j] = nested;
// // console.log(i, j);

// // if we want all the individual values? We do destructuring inside the destructuring
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // DEFAULT VALUES
// // We can set default values for the variables when we are extracting them. It's useful in the case if we don't know the length of the array. If we have an array that is shorter than we might think, then we might try to unpack the array in positions that don't even exist.

// // we put "= 1" in all the variables in the destructuring, if we have values that is not 1, that is the array
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
