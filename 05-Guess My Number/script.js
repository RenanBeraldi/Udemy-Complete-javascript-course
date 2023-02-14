'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// let secretNumber = document.querySelector('.number');
// let score = document.querySelector('.score');
// secretNumber.textContent = 13;
// score.textContent = 10;

// let inputNumber = document.querySelector('.guess');
// inputNumber.value = 23;
// console.log(inputNumber.value);



///////////////////////////
// HANDLING CLICK EVENTS & IMPLEMENTING THE GAME LOGIC
///////////////////////////
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const body = document.querySelector('body');
let score = 20;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    
    if (!guess) { // when there is no input
        message.textContent = '⛔ No Number!';

    } else if (guess === secretNumber){ // when win the game
        number.textContent = secretNumber;
        message.textContent = '🎉 Correct Number!';
        body.style.backgroundColor = '#60b347';
        number.style.width = '30rem';

    } else if (guess > secretNumber){ // when guess is bigger
        if (score > 1) {
            message.textContent = '📈 Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else { 
            message.textContent = '💥 You lost the game!'
            document.querySelector('.score').textContent = 0;
        }

    } else if(guess < secretNumber){ // when guess is smaller
        if (score > 0) {
            message.textContent = '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            message.textContent = '💥 You lost the game!'
            document.querySelector('.score').textContent = 0;
        }
    }
});