'use strict';

// CONSTANTS VARIABLE
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

//Cache selectors
const bodyEl = document.body;
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number');
const highscoreEl = document.querySelector('.highscore');
const guessInputEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector ('.check');
const againBtnEl = document.querySelector('.again');

//UI Helper
function setMessage (text) {
    messageEl.textContent = text;
}

function setNumber(value) {
    numberEl.textContent = value;
}

function setScore(value) {
    scoreEl.textContent = value;
}

function setHighscore(value) {
    highscoreEl.textContent = value;
}

function setBackground(color) {
    bodyEl.style.backgroundColor = color;
}

function disablePlay(disabled) {
    guessEl.disabled = disabled;
    checkBtnEl.disabled = disabled; 
}

function clearInput() {
    guessEl.value = '';
}

//Game state variables 
let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
console.log(secretNumber);
let score = START_SCORE;
let highscore = 0;

function resetGameState() {
    score = START_SCORE;
    secretNumber = Math.trunc(Math.random() *MAX_NUMBER) + MIN_NUMBER;
}
 
function renderInitialUI() {
    setMessage('Start guessing...');
    setNumber('?');
    setScore(score);
    disablePlay(false);
    setBackground('');
}

////////////////////
// basic game logic
document.querySelector('.check').addEventListener('click', function () {
    // code block
    console.log("Check button clicked!");
    const guess = Number(document.querySelector('.guess').value);
    console.log ("Player guessed: ", guess);

    if (!guess) {
        document.querySelector('.message').textContent = "Please input number"
        return;
    }

    if (guess < 1 || guess > 20) {
        document.querySelector('.message').textContent =
        'Number must be between 1 and 20!🤯';
        return;
    }

    if (guess === secretNumber) {
        console.log('Correct guesss!!! ');
        document.querySelector('.message').textContent = "🥇 You Won";
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
            document.querySelector('.guess').disabled = true;
            document.querySelector('.check').disabled = true;
            document.body.style.backgroundColor = "pink";
            document.querySelector('.message').textContent = ("Game Over! You Win!😍");
            document.querySelector('.guess').value = '';
        }
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;
    } else if (guess > secretNumber) {
        console.log("Too high!!!");
        document.querySelector('.message').textContent = "😒 Too high!!";
        score--;
        document.querySelector('.score').textContent = score;
        if (score < 1) {
            document.querySelector('.message').textContent = "😓 Game Over! You lost!"
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.guess').disabled = true;
            document.querySelector('.check').disabled = true;
            document.body.style.backgroundColor = "maroon";
            document.querySelector('.guess').value = '';

    } else if (guess < secretNumber) {
        console.log("Too low!!");
        document.querySelector('.message').textContent = "🥹 Too low!!"
        score--;
        document.querySelector('.score').textContent = score;
        if (score < 1) {
            document.querySelector('.message').textContent = "😓 Game Over! You lost!"
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.guess').disabled = true;
            document.querySelector('.check').disabled = true;
            document.body.style.backgroundColor = "maroon";
            document.querySelector('.guess').value = '';
        }
    }
}
});

document.querySelector('.again').addEventListener('click', function () {
    //block
    score = 20;
    secretNumber = (Math.trunc(Math.random() * 20) + 1);
    document.querySelector('.message').textContent = "Start quesing... ";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = "";
    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;
    document.body.style.backgroundColor = "black";
    console.log('Game Reset! New Secret Number:', secretNumber);
});



