// generate random number bwtween 1 and 100
let randomNumber = parseInt(Math.random()*100 +1);

// take all selectors
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess =  1;
let playGame = true;

// check if user is available to play
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        // console.log(e);
        const guess = parseInt(userInput.value);
        // console.log("**************", guess);
        validateGuess(guess);
    })
};

function validateGuess(guess) {
    // this method checks if user input value is valid 
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number more than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over, Random number was: ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    // this method checks if user input value is low/high
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is tooo low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is tooo high`);
    }
}

function displayGuess(guess) {
    // clean-up method
    userInput.value = '';
    guessSlot.innerHTML += `${guess} , `;
    numGuess ++
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    // this method interacts with DOM
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    // to end game after all guesses over or after a correct guess
    userInput.value = '';
    userInput.setAttribute('disabled', ''); // disbaled is a key-value pair
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    //
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        // start with resetting all variables
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGame = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;

    });
}





