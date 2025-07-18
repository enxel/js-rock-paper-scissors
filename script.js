// console.log("Hello World!!");
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

function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors:");

    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.toLowerCase().slice(1);

    if ( (computerChoice === "Rock" && humanChoice === "Scissors") ||
        (computerChoice === "Paper" && humanChoice === "Rock")    ||
        (computerChoice === "Scissors" && humanChoice === "Paper")   ) {
            console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
            computerScore++;
    } else if ( (computerChoice === "Rock" && humanChoice === "Paper")     ||
                (computerChoice === "Paper" && humanChoice === "Scissors") ||
                (computerChoice === "Scissors" && humanChoice === "Rock")     ) {
                console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
                humanScore++;
    } else {
        console.log("It's a tie! Both chose " + computerChoice + ".");
    }
}

// console.log(getComputerChoice());
// console.log(getHumanChoice());
playRound(getHumanChoice(), getComputerChoice());