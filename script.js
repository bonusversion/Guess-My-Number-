'use strict';

let randomNum = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener('click', function() {
    const guess = Number(document.querySelector(".guess").value);

    //When there is no input
    if (!guess) {
        displayMessage("🔺 No number!");
        //when player wins
    } else if (guess === randomNum) {
        displayMessage("🏆 Correct Number!");
        document.querySelector(".number").textContent = randomNum;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
        //when guess is wrong
    } else if (guess !== randomNum) {
        if (score > 0) {
            score--;
            document.querySelector(".score").textContent = score;
            displayMessage(guess > randomNum ? "😳 Too high!" : "😫 Too low!");
        } else {
            document.querySelector(".score").textContent = 0;
            displayMessage("😖 You lost the game!");
        }
    }
})

document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    randomNum = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".score").textContent = score;
    displayMessage("Start guessing...");
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = '';
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";

})