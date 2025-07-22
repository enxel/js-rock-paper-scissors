let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 1000) % 3;
    let choice;

    switch(randomNumber) { 
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
    }

    return choice;
}

function playRound(humanChoice, computerChoice) {
    computerChoiceP.textContent = "Computer chose: " + computerChoice;

    determineRound(humanChoice, computerChoice);

    scoreDiv.textContent = `SCORE => Human: ${humanScore} - Computer: ${computerScore}`;

    checkVictory();
}

function determineRound(humanChoice, computerChoice) {
    if ( (computerChoice === "Rock" && humanChoice === "Scissors") ||
        (computerChoice === "Paper" && humanChoice === "Rock")    ||
        (computerChoice === "Scissors" && humanChoice === "Paper")   ) {
            resultsP.textContent = "You lose! " + computerChoice + " beats " + humanChoice + ".";
            computerScore++;
    } else if ( (computerChoice === "Rock" && humanChoice === "Paper")     ||
                (computerChoice === "Paper" && humanChoice === "Scissors") ||
                (computerChoice === "Scissors" && humanChoice === "Rock")     ) {
                resultsP.textContent = "You win! " + humanChoice + " beats " + computerChoice + ".";
                humanScore++;
    } else {
        resultsP.textContent = "It's a tie! Both chose " + computerChoice + ".";
    }
}

function checkVictory() {
    if (humanScore === 5 || computerScore === 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        toggleButtonStyle(rockBtn);
        toggleButtonStyle(paperBtn);
        toggleButtonStyle(scissorsBtn);

        if (humanScore > computerScore) {
            victoryDiv.textContent = "You win the tournament!!!";
        } else {
            victoryDiv.textContent = "The Computer has won the tournament!!!";
        }

        addReset();
    }
}

function toggleButtonStyle(btn) {
    btn.classList.toggle("enabled-button");
    btn.classList.toggle("disabled-button");
}

function addReset() {
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Restart Game";
    resetBtn.addEventListener("click", reset);
    resetBtn.classList.toggle("enabled-button");
    victoryDiv.appendChild(resetBtn);
}

function reset() {
    humanScore = 0;
    computerScore = 0;

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    toggleButtonStyle(rockBtn);
    toggleButtonStyle(paperBtn);
    toggleButtonStyle(scissorsBtn);

    scoreDiv.textContent = "SCORE => Human: 0 - Computer: 0";
    resultsP.textContent = "";
    computerChoiceP.textContent = "";
    victoryDiv.textContent = "";
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
rockBtn.addEventListener("click", () => playRound("Rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("Paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("Scissors", getComputerChoice()));

const scoreDiv = document.querySelector("#score");
const resultsP = document.querySelector("#results");
const computerChoiceP = document.querySelector("#computer-choice");
const victoryDiv = document.querySelector("#victory");
