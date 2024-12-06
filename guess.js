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


rules.onclick = rulesOfGame;


limit.addEventListener('input', function () {
    guessText.innerHTML = `Guess the number between 1 and ${limit.value}`;
    generateRandomNum();

});

// Initialize the text with the default value
guessText.innerHTML = `Guess number between 1 and ${limit.value}`;

guess.addEventListener('input', startGame);
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
    console.log("The startGame function has been called");
    for (let i = 1; i <= 5; i++) {
        if (guess.value == guessNumber) {
            //call endGame()
            console.log("you win");
            break;
        }
        else {
            guessCount -= 1;
            if (guessCount <= 0) {
                //call endGame()
                break
            }
            else {
                console.log("WRONG GUESS! TRY AGAIN");
            }
        }
    }
}

function endGame() {
    // if guessCount > 0 then display the congratulations (vary it later)
    // if guessCount == 0 then display the loss message (same message in every game)
}

