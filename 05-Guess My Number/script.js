'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

let secretNumber = document.querySelector('.number');
let score = document.querySelector('.score');
secretNumber.textContent = 13;
score.textContent = 10;

let inputNumber = document.querySelector('.guess');
inputNumber.value = 23;
console.log(inputNumber.value);
