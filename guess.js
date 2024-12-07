let guessCount = 5;
let guessNumber = Math.round(Math.random() * 100) + 1; 
//This will be the default random number 
console.log(guessNumber)

const rules = document.getElementById('rules');
const hiddenElement = document.querySelector('.hidden');
const limit = document.getElementById('limit');
const guessText = document.querySelector(".guesstext")
const guess = document.getElementById('guess')
const displayText = document.getElementById('displaytext')
const submitLimit = document.getElementById('submitlimit');
const submitGuess = document.getElementById('submitguess');
const restartButton = document.getElementById('restart')


rules.onclick = rulesOfGame;


submitLimit.addEventListener('click', function () {
    guessText.innerHTML = `Guess the number between 1 and ${limit.value}`;
    generateRandomNum();

});

// Initialize the text with the default value
guessText.innerHTML = `Guess number between 1 and ${limit.value}`;

submitGuess.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);

function rulesOfGame () {
    if (hiddenElement.style.display == "none" || hiddenElement.style.display === "") {
        hiddenElement.style.display = "block";
    }
    else {
        hiddenElement.style.display = "none"
    }

} 

function generateRandomNum() {
    guessNumber = Math.round(Math.random() * limit.value) + 1;
    console.log(guessNumber); //this is a temporary variable remove it later
}

function startGame() {
    if (guess.value == guessNumber) {
        displayText.innerHTML = "Congratulations, you guessed the number!"
        endGame();
    }
    else {
        guessCount -= 1;
        if (guessCount <= 0) {
            displayText.innerHTML = `Game over! The correct number was ${guessNumber} `
            endGame();
        }
        else {
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
    generateRandomNum();
    guess.value = "";
    limit.value = "100";

}



