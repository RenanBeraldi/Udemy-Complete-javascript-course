'use strict';

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

// Displaying the Movements of the bank account
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${Math.abs(mov)}€</div>
    </div>
   `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Calculating the account Balance and displaying it
const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce(function (acc, movement) {
    return acc + movement;
  }, 0);
  labelBalance.textContent = `${account.balance}€`;
};

// Calculating the summary value
const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => (acc += mov), 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => (acc += mov), 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, interest) => (acc += interest), 0);
  labelSumInterest.textContent = `${interest}€`;
};

// Creating usernames
const createUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(function (name) {
        return name[0];
      })
      .join('');
  });
};
createUsernames(accounts);

// Updating UI
const updateUI = function (account) {
  // Display Movements
  displayMovements(account.movements);
  // Display Balance
  calcDisplayBalance(account);
  // Display Summary
  calcDisplaySummary(account);
};

/////////////////////////////////////////////////
// Event Handlers
let currentAccount;

// Login
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent form from submitting

  currentAccount = accounts.find(function (account) {
    return account.username === inputLoginUsername.value;
  });

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

// Transfer money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent form from submitting

  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(function (account) {
    return account.username === inputTransferTo.value;
  });

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    updateUI(currentAccount);
  }
});

// Request Loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some(function (movement) {
      return movement >= amount * 0.1;
    })
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// Close an account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(function (account) {
      return account.username === currentAccount.username;
    });
    // Delete account
    accounts.splice(index, 1);

    // Change UI
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// Sorting the movements
let sortedState = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/////////////////////////////////////////////////
// sorting Arrays
/////////////////////////////////////////////////

// Strings
// const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// // Numbers
// console.log(movements);

// // return < 0: A, B (keep order)
// // return > 0: B, A (switch order)

// // Ascending
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (b > a) return -1;
// // });
// movements.sort((a, b) => a - b);
// console.log(movements);

// // Descending
// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (b > a) return 1;
// // });
// movements.sort((a, b) => b - a);
// console.log(movements);

/////////////////////////////////////////////////
// flat and flatMap Methods
/////////////////////////////////////////////////
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(function (account) {
//   return account.movements;
// });
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overallBalance = allMovements.reduce(
//   (acc, movement) => acc + movement,
//   0
// );
// console.log(overallBalance);

// // flat
// const overallBalance2 = accounts
//   .map(account => account.movements)
//   .flat()
//   .reduce((acc, movement) => (acc += movement), 0);
// console.log(overallBalance2);

// // flatMap
// const overallBalance3 = accounts
//   .flatMap(account => account.movements)
//   .reduce((account, movement) => (account += movement), 0);
// console.log(overallBalance3);

/////////////////////////////////////////////////
// some and every Methods
/////////////////////////////////////////////////
// Equality
// console.log(movements.includes(-130));

// // some(): Condition
// console.log(movements.some(mov => mov === -130));

// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);

// // every(): Condition
// console.log(
//   movements.every(function (movement) {
//     return movement > 0;
//   })
// );

// console.log(
//   account4.movements.every(function (movement) {
//     return movement > 0;
//   })
// );

// // Separate callback function
// const deposit = function (movement) {
//   return movement > 0;
// };

// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

/////////////////////////////////////////////////
// The find Method
/////////////////////////////////////////////////
// const firstWithdrawal = movements.find(movement => movement < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(account => account.owner === 'Jessica Davis');
// console.log(account);

// for (const account of accounts) {
//   if (account.owner === 'Jessica Davis'){
//     console.log(account);
//   }
// }

/////////////////////////////////////////////////
// The Magic of Chaining Methods
/////////////////////////////////////////////////
// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(movement => movement > 0) // Result of this will a new array.
//   .map((movement, i, arr) => {
//     return movement * eurToUsd;
//   })
//   // .map(movement => movement * eurToUsd)
//   .reduce((acc, movement) => acc + movement, 0);

// console.log(totalDepositsUSD);

/////////////////////////////////////////////////
// The reduce Method
/////////////////////////////////////////////////

// accumulator is like a snowball
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// let balance2 = 0;
// for (const movement of movements) balance2 += movement;
// console.log(balance2);

// // Maximum value
// const max = movements.reduce((acc, movement) => {
//   if (acc > movement) {
//     return acc;
//   } else {
//     return movement;
//   }
// }, movements[0]);
// console.log(max);

/////////////////////////////////////////////////
// The filter Method
/////////////////////////////////////////////////
// const deposits = movements.filter(function (movement) {
//   return movement > 0;
// });
// console.log(deposits);

// const withdrawals = movements.filter(function (movement) {
//   return movement < 0;
// });
// console.log(withdrawals);

// const depositsForOf = [];
// for (const movement of movements) {
//   if (movement > 0) {
//     depositsForOf.push(movement);
//   }
// }
// console.log(depositsForOf);

/////////////////////////////////////////////////
// The map Method
/////////////////////////////////////////////////
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // Let's suppose that we want to convert this array to US$, but it's in €, and let's think that 1 US$ is 1.1 €
// const eurToUsd = 1.1;

// // const movementsUSD = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // });

// // We can use arrow functions to simplify the callback function inside the method.
// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }
// console.log(movementsUSDfor);

// // Using methods with callback functions is the new and modern way of doing this kind of stuff.

// // As the forEach method, the map method also has access to the exact same 3 parameters, besides the current array element, which is the "mov", we also get access to the current index as well the whole array.
// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescriptions);

/////////////////////////////////////////////////
// forEach with Maps and Sets
/////////////////////////////////////////////////
// Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// // In this array of arrays, each of these array elements, the inner array, will be one entry of the Map. Where the first element is the key, and the second is the value.

// // This callback function also has three parameters. When the forEach method calls it, it will cal this function with three arguments. 1st one will be the current value, 2nd one is the key, and the 3rd one the map
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// // The callback function has the parameters of value, key and map,
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Returning we have the same thing in the value and in the key. And so what this means is that the key here is exactly the same as the value, so why is that? Well, a set doesn't have keys, and it doesn't have indexes either. And so there is no value that would make sense for the key.
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${_}: ${value}`);
// });

/////////////////////////////////////////////////
// Looping Arrays: forEach
/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // Let's say that we wanted to loop over this array in order to print a message for each movement in this bank account. The positive values are basically deposits and the negative values are withdrawals. We can print something to the console saying the user deposited or withdrew some money.
// for (const movement of movements) {
//   const moneyMovemented =
//     movement > 0
//       ? `You deposited ${movement}`
//       : `You withdrew ${Math.abs(movement)}`;
//   console.log(moneyMovemented);
// }

// // So forEach is technically a higher order function, which requires a callback function. It's the forEach method who will call this callback function. But when exactly will forEach actually call this callback function?
// // Well, what the forEach method does it to loop over the array, and in each iteration it will execute this callback function. ALso as the forEach method calls this callback function in each iteration it will pass in the current element as an argument.
// console.log('---- forEach ----');
// movements.forEach(function (movement) {
//   const moneyMovemented =
//     movement > 0
//       ? `You deposited ${movement}`
//       : `You withdrew ${Math.abs(movement)}`;
//   console.log(moneyMovemented);
// });

// // Basically, behind the scenes, in iteration zero, it will call this function an anonymous function in this case without a name.
// // 0: function (200)
// // 1: function (450)
// // 2: function (400)
// // ... Till the end of the array.

// // What if we actually needed access to a counter variable, just like we can access the current index of the array here in the for of loop.
// for (const [i, movement] of movements.entries()) {
//   const moneyMovemented =
//     movement > 0
//       ? `Movement ${i + 1}: You deposited ${movement}`
//       : `Movement ${i + 1}: You withdrew ${Math.abs(movement)}`;
//   console.log(moneyMovemented);
// }

// // Let's make with the forEach method right now. And here, fortunately, it's a lot easier, to get access to the current index. So, to understand how it works we need to remember once more that is the forEach method who calls this callback function in each iteration. And as it calls this function it also passes in the current element of the array, but actually that's not all it passes in, in fact forEach passes in the current element, the index and the entire array that we are looping.
// console.log('---- forEach ----');
// movements.forEach(function (mov, i, arr) {
//   const moneyMovemented =
//     mov > 0
//       ? `Movement ${i + 1}: You deposited ${mov}`
//       : `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
//   console.log(moneyMovemented);
// });

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
