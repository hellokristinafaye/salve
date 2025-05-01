const hand = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return hand[choice];
}

let computerChoice = getComputerChoice();

console.log(computerChoice);