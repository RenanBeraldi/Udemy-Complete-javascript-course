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
const again = document.querySelector('.again');
const check = document.querySelector('.check');
const body = document.querySelector('body');

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};

const changeNumber = function(number){
    document.querySelector('.number').textContent = number; 
}

const changeScore = function(score){
    document.querySelector('.score').textContent = score
}

check.addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    
    if (!guess) { // when there is no input
        displayMessage('⛔ No Number!');

    } else if (guess === secretNumber){ // when win the game
        changeNumber(secretNumber);
        displayMessage('🎉 Correct Number!');
        body.style.backgroundColor = '#60b347';
        number.style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== secretNumber) { // when guess is wrong
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        if (score > 1) {
            score--;
            changeScore(score);
        } else { 
            displayMessage('💥 You lost the game!');
            changeScore(0);
        }
    } 
});

again.addEventListener("click", function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    changeScore(score);
    changeNumber('?');
    document.querySelector('.guess').value = '';
    body.style.backgroundColor = '#222';
    number.style.width = '15rem';
});