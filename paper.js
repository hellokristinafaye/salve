const hand = ["rock", "paper", "scissors"];
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return hand[choice];
}
console.log(`Computer: ${computerChoice}`);

function getHumanChoice() {
    return prompt("Game on! Choose rock, paper or scissors!");
}
console.log(`Human: ${humanChoice}`)

function playRound(humanChoice) {
    let lowerCaseHumanChoice = humanChoice.toLowerCase();
    console.log(lowerCaseHumanChoice)

}
playRound(humanChoice);