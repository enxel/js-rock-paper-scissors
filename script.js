// console.log("Hello World!!");

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

console.log(getComputerChoice());