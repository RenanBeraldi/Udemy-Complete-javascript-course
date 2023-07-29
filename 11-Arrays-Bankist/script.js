'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Looping Arrays: forEach
/////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Let's say that we wanted to loop over this array in order to print a message for each movement in this bank account. The positive values are basically deposits and the negative values are withdrawals. We can print something to the console saying the user deposited or withdrew some money.
for (const movement of movements) {
  const moneyMovemented =
    movement > 0
      ? `You deposited ${movement}`
      : `You withdrew ${Math.abs(movement)}`;
  console.log(moneyMovemented);
}

// So forEach is technically a higher order function, which requires a callback function. It's the forEach method who will call this callback function. But when exactly will forEach actually call this callback function?
// Well, what the forEach method does it to loop over the array, and in each iteration it will execute this callback function. ALso as the forEach method calls this callback function in each iteration it will pass in the current element as an argument.
console.log('---- forEach ----');
movements.forEach(function (movement) {
  const moneyMovemented =
    movement > 0
      ? `You deposited ${movement}`
      : `You withdrew ${Math.abs(movement)}`;
  console.log(moneyMovemented);
});

// Basically, behind the scenes, in iteration zero, it will call this function an anonymous function in this case without a name.
// 0: function (200)
// 1: function (450)
// 2: function (400)
// ... Till the end of the array.

// What if we actually needed access to a counter variable, just like we can access the current index of the array here in the for of loop.
for (const [i, movement] of movements.entries()) {
  const moneyMovemented =
    movement > 0
      ? `Movement ${i + 1}: You deposited ${movement}`
      : `Movement ${i + 1}: You withdrew ${Math.abs(movement)}`;
  console.log(moneyMovemented);
}

// Let's make with the forEach method right now. And here, fortunately, it's a lot easier, to get access to the current index. So, to understand how it works we need to remember once more that is the forEach method who calls this callback function in each iteration. And as it calls this function it also passes in the current element of the array, but actually that's not all it passes in, in fact forEach passes in the current element, the index and the entire array that we are looping.
console.log('---- forEach ----');
movements.forEach(function (mov, i, arr) {
  const moneyMovemented =
    mov > 0
      ? `Movement ${i + 1}: You deposited ${mov}`
      : `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  console.log(moneyMovemented);
});

// The name of the parameters does not matter, what matters there is the order. The first parameter always needs to be the current element, the second parameter always the current index and the third one always the array that we are looping. 

// When should we use forEach and when should we use the for of loop? 
//One fundamental difference between two of them is that you cannot break out of a forEach loop. So, the continue and break statements do not work in a forEach loop at all. So instead, forEach will always loop over the entire array. So if you really need to break out a loop then you have to keep using the for of loop. 

/////////////////////////////////////////////////
// The new at method
/////////////////////////////////////////////////
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // We can replace the bracket notation with the more modern looking at method, if we prefer to use arrays methods.
// // Maybe this doesn't look all to useful. Well, there is one particularity of the at method, which it makes quite useful to use instead of the brackets notation.

// // Let's say that we want that we want to get the last element of the array. Now, supposing that we don't know the length of the array, we would write something like this:
// console.log(arr.at(-1)); // console.log(arr[arr.length - 1]);

// // Another way is to use the slice method.
// console.log(arr.slice(-1)[0]); // get a copy of the original array.

// console.log(arr.at(-2));

// // The at method also works on strings.
// console.log('renan'.at(0));
// console.log('renan'.at(-1));

/////////////////////////////////////////////////
// Simple Array Methods
/////////////////////////////////////////////////

// let arr = ['a,', 'b', 'c', 'd', 'e'];

// // SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

// // SPLICE
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE
// arr = ['a,', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(' - '));
