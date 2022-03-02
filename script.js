
let level1 = new level(1, 60, 1, 100);
console.log(level1);

let guessButton = document.getElementById("guessButton");
let guesses = document.getElementById("guesses");
let progress = document.getElementById("progress");
let guessesLeft = document.getElementById("guessesLeft");

let guessAmount = 10;

function getRandomNumber() {
  randomNumber = Math.random() * (100 - 1) + 1;
    randomNumber = Math.round(randomNumber);
}
getRandomNumber();

function updateGuesses() {
    guessesLeft.textContent = guessAmount;
}

guessButton.addEventListener('click', ()=> {

    let guess = document.getElementById("guess").value;
    guess = parseInt(guess);
    
    if (guess === randomNumber) {
        guesses.textContent = "Nice, You Got it!";
        location.reload();
    }
    else if (guess >= randomNumber) {
        guesses.textContent = "That guess is too high!";
        guessAmount--;
        progress.value = guessAmount;
        updateGuesses();
    }
    else if ( guess <= randomNumber) {
        guesses.textContent = "That guess is too low";
        guessAmount--;
        progress.value = guessAmount;
        updateGuesses();
    }
    else if (guess = NaN) {
        guesses.textContent = "Enter a number";
    }
    if (guessAmount === 0) {
        location.reload();
    }
});