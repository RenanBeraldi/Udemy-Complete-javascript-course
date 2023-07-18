'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855 12:30';

const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, address, time = '20:00' }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

////////////////////////////////////////
// Summary: Which Data Structure to Use?
////////////////////////////////////////

// Arrays vs. Sets and Objects vs. Maps

// ------- Arrays vs. Sets -------
// We use arrays or sets when we need a simple list of values and when we do not need to describe the values
// We should use arrays whenever we need to store values in order and when these values might contain duplicates. And we should also use arrays when we need to manipulate data, because there are a ton of arrays methods.

// Sets, on the other hand, should only be used when we are working with unique values, besides that we can also use sets in situations when high performance is really important, because operations like searching for an item or deleting an item from a set can be up to 10 times faster in sets than in arrays. A great use case for sets is to remove duplicates from arrays.
// Sets are not meant to replace arrays but rather to compliment them whenever we are dealing with unique values.

// ------- Objects vs. Maps -------
// We use these key value data structures whenever we need to describe the values using keys.

// Objects have been the traditional key value data structure simply because we didn't have maps before ES6. But using objects simply as key value stores has a couple of technical disadvantages.

// Maps on the other hand, are way better suited for simple key value stores, because they offer better performance in fact. Also, map keys can have any data type, and they're also easy to iterate, and it's easy to compute the size of a map.

// The biggest advantage of objects is how easy it is to write them and to access data by simply using the dot or the brackets operator.

// We should use maps when we simply need to maps keys to values, and also when we need keys that are not strings.

// And if we need functions as values then we should absolutely use and object for that. In objects, these functions are then called methods and we can use the "this keyword" to access properties of the same object, which is impossible in maps. And working with JSON data we probable be using objects for that as well unless we then want to convert the objects to maps, but that's usually not something that we do. 

////////////////////////////////////////
// Maps: Iteration
////////////////////////////////////////
// There is another way of populating a new map without having to use the set method. The set method is a bit cumbersome when there are a lot of values to set. So instead, we can create a new map like this.

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try Again'],
// ]);
// console.log(question);

// // When creating a new map from scratch, directly in the code, this way is better. But when we keep adding new elements, programmatically using code. Then, the set method is still the way to go.

// // This structure, this arrays of arrays is exactly the same structure that is returned of calling Object.entries(). Where the first element is the key and the second one is the value.
// console.log(Object.entries(openingHours));

// // This means that there is an easy way to convert objects to maps.
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Iteration:
// // Iteration is possible on maps as we already know, maps are also iterables. And so, the for loop is also available for them.

// // Quiz App
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// const answer = 3;
// // const answer = Number(prompt('Your answer?'));
// // Start comparing the answer
// console.log(question.get(question.get('correct') === answer)); // This will return true, and since this is true, we can directly plug that into the map

// // Sometimes we also need to convert a map back to an array.
// console.log([...question]); // Using the spread operator.
// console.log([...question.entries()]); // is the same as the one is above.
// console.log([...question.keys()]);
// console.log([...question.values()]);

////////////////////////////////////////
// Maps: Fundamentals
////////////////////////////////////////
// A Map is data structure that we can use to map values to keys.
// The big difference between objects and maps is that in maps, the keys can have any type. So, in objects, the keys are basically always strings. But in maps, we can have any type of key. It could even be objects, or arrays, or other maps.

// const rest = new Map();
// // The easiest way to create a map is to actually create an empty map.
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));
// // Calling the set method like this does not only update the map that it's called on, but also returns the map.

// // The fact that the set method actually returns the updated map, allows us to chain the set method like this:
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed');

// // In order to read data from a map, we use the 'get' method. And so, all we need to do is to pass in, the name of the key.
// console.log(rest.get('name')); // Classico Italiano
// console.log(rest.get(true)); // We are open :D
// console.log(rest.get(1)); // Firenze, Italy

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// // This operation checks if the var time is between 11 and 23, if it is, it will return a boolean value (true), returning the string 'We are open :D'
// // This operation is not so readable. Don't overuse this kind of pattern.

// // To check if a map contains a certain key.
// console.log(rest.has('categories'));

// // We can also delete elements from the map.
// rest.delete(2);
// console.log(rest);

// // Maps also have the size property.
// console.log(rest.size);

// // We can also clear, basically, remove all the elements from the Map.
// // rest.clear();

// // We can in fact use arrays or objects as map keys.
// const arr = [1, 2];
// // The result of requesting this array, we get undefined. And the reason for that, is that these two arrays (rest.set([1, 2], 'Test')) are actually not the same object.
// // In order to make it work, we would have to declare a variable and use it on set and get.
// rest.set(arr, 'Test');
// console.log(rest.get(arr));

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

/*
1. Loop over the game.scored array and print each of player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console.

3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
    Odd of victory Bayern Munich: 1.33
    Odd of draw: 3.25
    Odd of victory Borussia Dortmund: 3.25
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and game objects have the same property names

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
    {
      Gnarby: 1,
      Hummels: 1,
      Lewandowski: 2,
    } 
*/

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
// for (const [sIndex, sValue] of game.scored.entries()) {
//   console.log(`Goal ${sIndex + 1}: ${sValue}`);
// }

// // Task 2
// let avgOdd = 0;
// let sum = 0;
// for (const odd of Object.values(game.odds)) {
//   sum += odd;
//   avgOdd = sum / Object.keys(game.odds).length;
// }
// console.log(`This is the avg Odd of the game ${avgOdd}`);

// // Task 3
// for (const [team, odd] of Object.entries(game.odds)) {
//   let str =
//     team != 'x'
//       ? `Chance of victory ${game[team]}: ${odd}`
//       : `Chance of draw: ${odd}`;
//   console.log(str);
// }

////////////////////////////////////////
// Looping Objects: Object Keys, Values, Entries
////////////////////////////////////////
// We have different options here, depending on what exactly we want to loop over. So do we want to loop over the object, property names, over the values or both together.

// PROPERTY NAMES (keys)
// const properties = Object.keys(openingHours);
// console.log(properties);
// // As result of this operation, is an array with the three property names.
// // And we can use this to compute how many properties are in the object. Let's say that we want to print an string to say how many days the restaurant is open.
// let openStr = `The restaurant is open ${properties.length} days per week: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // PROPERTY VALUES (values)
// const values = Object.values(openingHours);
// console.log(values);

// // ENTIRE OBJECT (entries)
// // But now to really simulate, to loop over the entire object, we actually need the entries. And so entries is basically names + values together.
// // The entries on arrays, it returns the index number + the value itself.

// const entries = Object.entries(openingHours);
// console.log(entries);
// // We now get an array. So all of these keys, values and entries basically transformed the object into an array. And in each position of the array, we have an array as value, with first the key and then the value:
// // We can use destructuring when we loop over the array.
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

////////////////////////////////////////
// Optional Chaining
////////////////////////////////////////
// Let's suppose that we want to get the opening hours out of restaurant for Monday. But this property doesn't exist, that is undefined.
// But let's pretend that we do not know whether this restaurant opens on Monday or not. And that could be the case for example, if this data came from a real web service (API).
// With this operation gets an error, (restaurant.openingHours.mon) is undefined, and undefined.open get's an error. To avoid this type of error, we would first have to check if this (restaurant.openingHours.mon) actually exists.

// if (restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// It's not a big deal to add this logic, but it does make the code a little bit more unreadable and more messy. However, this is checking just for one property. So just for Monday. But now imagine that openingHours would also be optional, in other words, that the restaurant object can also not have the property openingHours.

// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// // This can get out of hand pretty quickly when we have deeply nested objects with lots of optional properties.
// // And so therefore ES2020 introduced a great solution for this, which is a feature called "optional chaining". And with optional chaining, if a certain property doesn't exist, then undefined is returned immediately. And so that will then avoid that kind of error.

// // WITH Optional Chaining
// console.log(restaurant.openingHours.mon?.open);

// // So only if the property that is BEFORE the "?", only if mon exists, then this open property will be read from there. But if not, then immediately undefined will be returned. And exists here actually the nullish concept. A property exists if it's not null and not undefined.

// console.log(restaurant.openingHours?.mon?.open);
// // And now, if restaurant.openingHours does not even exist, well, then the "mon" property will not even be read and so therefore we don't get that error.

// // EXAMPLE
// const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

// // What will be done is to loop over this array and then log to the console, whether the restaurant is open or closed on each of the days
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }
// // day is not a property of openingHours, that's why we use the bracket notation.
// // We had a problem on sat, cause it opens at 0, then we use the nullish coalescing operator, that works only with Null and Undefined values.

// // METHODS
// console.log(restaurant.order?.(0, 1) ?? 'Methods does not exist.');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Methods does not exist.');

// // ARRAYS
// // We can check basically if an array is empty.
// const users = [{ name: 'Renan', email: 'hello@renan.io' }];
// // const users = [];

// // To get the 'name' of the first element of this array, we can do this.
// console.log(users[0]?.name ?? 'User array empty');

// // Without Optional Chaining:
// if (users.length > 0) console.log(users[0].name);
// else console.log('User array empty');

// We use optional chaining together with the nullish coalescing operator so that we can actually do something in case we don't get a result from the object or from the array

////////////////////////////////////////
// Enhanced Object Literals
////////////////////////////////////////
// The object restaurant is an object literal, that's why we wrote this object in the code using the curly braces '{}' syntax. ES6 introduced 3 ways, which make it easier to write object literals like this.
// First thing, let's suppose that we have an object that is out of the restaurant object, the openingHours:
/* 
  const openingHours = {
    ...
  }
  const restaurant = {
    ...
  }
*/
// But we still want to have the openingHours object inside of the restaurant
// Before ES6, we had to make like this, inside the restaurant object: (openingHours: openingHours,).
// In ES6, we just need to write (openingHours,). And that's it, the object will be putted inside the restaurant object and create a property name with exactly that variable name.

// The second part of Enhancing, is about writing methods. In ES6 we no longer have to create a property and then set it to a function expression.
/* What we need to do is take off the word function and the semicolon:
order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
} */

// And the third Enhancement is that we can now actually compute property names instead of having to write them out manually and literally. And compute just means like calculate.
/* Let's write an array with all te weekdays out of the restaurant object. And we want to change the property names inside of the openingHours object by the elements of the array. We can do that by using the square bracket syntax.
  const openingHours = {
  [weekdays[3]]: {
*/
// We can compute the property name like this as well: [`day-${2 + 4}`];

////////////////////////////////////////
// Looping Arrays: The for-of loop
////////////////////////////////////////
// To loop over an array, we use the for loop, we would have to go through all the steps of setting up a counter, a condition, and also update the counter. It's a lot of steps, that's why JS introduced the (for-of loop) in which don't need any of that. It's so much simpler.
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);
// This loop, will automatically loop over the entire array and in each iteration, it will give us access to the current array element
// We get each element of the array logged one by one. And that's because, the item variable is always the current element in each iteration.

// What's also great about the for-of loop, is that we can use the continue and break keywords.

// But what if we also wanted the current index and not just the current element? in the for-of loop, it's actually a bit of a pain when we need that index, because originally the for-of loop was really meant to give the current element. However, can get both. Have to call the method .entries()
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// As result, each item is now an array, containing the index and the element itself. All need to do is to use the destructure assignment
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// What is the .entries method?
// console.log([...menu.entries()]);
// As result we get an array, in each position, contains a new array, which contains the element and entity index number of that element

////////////////////////////////////////
// Coding Challenge #1
////////////////////////////////////////
/* 
We are building a football betting app

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. 

1. Create one player array for each team (variables 'players1' and 'players2')

2. The first player in any array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

3. Create an array 'allPlayers' containing all players of both games (22 players
  
4. During the game, Bayern Munich (team 1) used 3 substitute players So create a new array containing all the original team1 players + 'Thiago', 'Coutinho', 'Perisic'.

5. Based on the game.odd object create one variable for each odd (called 'team1', 'draw', 'team2');

6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and print each of them to the console, along with the number of goals who were scored (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator;

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/

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
// // const players1 = [...game.players[0]];
// // const players2 = [...game.players[1]];
// // Using Destructuring
// const [players1, players2] = game.players;
// // console.log(players1, players2);

// // Task 2
// const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);

// // Task 3
// const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // Task 4
// const finalPlayers = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// // console.log(finalPlayers);

// // Task 5
// /*
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
// */
// // Using Destructuring
// // const { team1, x: draw, team2 } = game.odds;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// // console.log(team1, draw, team2);

// // Task 6
// const printGoals = function (...players) {
//   let pl = 0;
//   for (let i = 0; i < players.length; i++) {
//     console.log(`Player that made a goal ${players[i]}`);
//     pl += 1;
//   }
//   console.log(`The quantity of goals were ${pl}`);
// };

// printGoals(...game.scored);

// // Task 7
// team1 < team2 && console.log('Team 1 is more likely to win');
// team2 < team1 && console.log('Team 2 is more likely to win');

////////////////////////////////////////
// Logical Assignment Operators
////////////////////////////////////////
// There are 3 logical assignment operators that were introduced in ES2021.

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// ---- OR ASSIGNMENT OPERATOR ----
// The first thing that will me made is that we are going to set a default number of guests for all the restaurant objects that doesn't have that property

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// This operations creates the property numGuest in the object rest2, if rest2.numGuests doesn't exists, will be the default value 10.
// With the OR Assignment Operator, we will be able to write the same thing basically, in a more concise way.
// rest1.numGuests ||= 10; // Is the same of writing this: rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests ||= 10;
// This operator assigns a value to a variable if that variable is currently falsy.

// ---- NULLISH ASSIGNMENT OPERATOR ----
// setting the numGuests: 0, if we load the code, we have the default value being showed, that happens because the 0 is a falsy value
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// This operator assigns a value to a variable if that variable is currently nullish.

// ---- AND ASSIGNMENT OPERATOR ----
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// In this operation, the value returned is "undefined", because the rest1.owner is falsy, it doesn't exist, then is the value returned

// rest2.owner = rest2.owner && '<ANONYMOUS>';
// The value returned is <ANONYMOUS>, because of short circuiting. In the particular case of the AND operator, it short circuits when the first value is falsy and then immediately returns that falsy value.
// In this operation, the first value is truthy, then the second value will then actually be evaluated and returned.

// rest1.owner &&= 'ANONYMOUS'; // Is the same as (rest1.owner = rest1.owner && '<ANONYMOUS>')
// rest2.owner &&= 'ANONYMOUS';
// // In the operation of rest1, doesn't return nothing, in the operation only with short circuiting, the value returned is undefined, which was not really what we wanted. Basically, what the logical AND assignment operator does is assign a value to a variable if it's currently truthy.

// console.log(rest1);
// console.log(rest2);
////////////////////////////////////////
// Nullish Coalescing Operator (??)
////////////////////////////////////////
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// 0 is a falsy value, but we want a solution that we want to see the number of the guests as 0, not the default value that is being set by the short circuiting with the OR operator.
// The solution for this problem, is to use the Nullish Coalescing Operator. It works almost the same way as the OR operator.

// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

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
