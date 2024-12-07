let guessCount = 5;
let guessNumber = Math.round(Math.random() * 100) + 1; 
console.log(guessNumber); // This will be the default random number 

const rules = document.getElementById('rules');
const hiddenElement = document.querySelector('.hidden');
const limit = document.getElementById('limit');
const guessText = document.querySelector(".guesstext");
const guess = document.getElementById('guess');
const displayText = document.getElementById('displaytext');
const submitLimit = document.getElementById('submitlimit');
const submitGuess = document.getElementById('submitguess');
const restartButton = document.getElementById('restart');

rules.onclick = rulesOfGame;

// Initialize the text with the default value
guessText.innerHTML = `Guess a number between 1 and ${limit.value}`;

submitLimit.addEventListener('click', function () {
    const upperBound = parseInt(limit.value, 10);

    // Validate the upper bound
    if (isNaN(upperBound) || upperBound < 2) {
        alert("Please enter a valid upper limit of 2 or greater.");
        limit.value = "100"; // Reset to default
    } else {
        guessText.innerHTML = `Guess the number between 1 and ${upperBound}`;
        generateRandomNum(upperBound);
        guessCount = 5; // Reset guesses
        displayText.innerHTML = ""; // Clear any previous game messages
    }
});

submitGuess.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);

function rulesOfGame() {
    if (hiddenElement.style.display == "none" || hiddenElement.style.display === "") {
        hiddenElement.style.display = "block";
    } else {
        hiddenElement.style.display = "none";
    }
}

function generateRandomNum(upperBound = 100) {
    guessNumber = Math.floor(Math.random() * upperBound) + 1;
    console.log(guessNumber); // Debugging: remove in production
}

function startGame() {
    const userGuess = parseInt(guess.value, 10);

    // Validate the user's guess
    if (isNaN(userGuess) || userGuess < 2) {
        alert("Please enter a valid number greater than or equal to 2.");
        guess.value = ""; // Clear invalid input
        return;
    }

    if (userGuess === guessNumber) {
        displayText.innerHTML = "Congratulations, you guessed the number!";
        endGame();
    } else {
        guessCount -= 1;
        if (guessCount <= 0) {
            displayText.innerHTML = `Game over! The correct number was ${guessNumber}`;
            endGame();
        } else {
            displayText.innerHTML = `WRONG GUESS! TRY AGAIN. YOU HAVE ${guessCount} GUESSES LEFT.`;
        }
    }
}

function endGame() {
    restartButton.style.display = "block"; 
    guess.disabled = true;
    submitGuess.disabled = true;
}

function restartGame() {
    guess.disabled = false;
    submitGuess.disabled = false;
    restartButton.style.display = "none";
    displayText.innerHTML = "";
    guess.value = "";
    limit.value = "100"; // Reset to default
    guessText.innerHTML = `Guess a number between 1 and 100`;
    generateRandomNum();
}
