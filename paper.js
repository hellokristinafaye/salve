const hand = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return hand[choice];
}

let computerChoice = getComputerChoice();

console.log(`Computer: ${computerChoice}`);

function getHumanChoice() {
    return prompt("Game on! Choose rock, paper or scissors!");
}
let humanChoice = getHumanChoice();
console.log(`Human: ${humanChoice}`)