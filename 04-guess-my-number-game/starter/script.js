'use strict';

// DOM Element Selection

const messageEl = document.querySelector('.message');
console.log(messageEl);
// messageEl.textContent= "Hello from Javascript";

const scoreEl = document.querySelector('.score');
// scoreEl.textContent = 15;

const numberEl = document.querySelector('.number');
// numberEl.textContent = 10;

const highscoreEl = document.querySelector('.highscore');
// highscoreEl.textContent = 18;

const guessInputEl = document.querySelector('.guess');
// guessInputEl.value = 6;

//Game state variables 

let secretNumber = (Math.trunc(Math.random() * 20) + 1);
console.log(secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

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
            document.querySelector('.message').textContent = "😓 You lost!"
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.guess').disabled = true;
            document.querySelector('.check').disabled = true;
            document.body.style.backgroundColor = "maroon";
        }
    } else if (guess < secretNumber) {
        console.log("Too low!!");
        document.querySelector('.message').textContent = "🥹 Too low!!"
        score--;
        document.querySelector('.score').textContent = score;
        if (score < 1) {
            document.querySelector('.message').textContent = "😓 You lost!"
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.guess').disabled = true;
            document.querySelector('.check').disabled = true;
            document.body.style.backgroundColor = "maroon";
            document.querySelector('.guess').value = '';
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



