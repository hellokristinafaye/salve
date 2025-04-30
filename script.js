const humanScoreText = document.getElementById("human-score");
const computerScoreText = document.getElementById("computer-score");
const hand = ['rock', 'paper', 'scissors'];
let humanChoice;
let computerChoice;

let humanScore = 0;
let computerScore = 0;

humanScoreText.innerHTML = humanScore
computerScoreText.innerHTML = computerScore

function getComputerChoice() {
    let choice = Math.floor(Math.random() * hand.length);
    computerChoice = hand[choice];
    console.log(`Computer: ${computerChoice}`);
    return computerChoice;
}
getComputerChoice()
console.log(`Computer: ${computerChoice}`);

function getHumanChoice() {
    humanChoice = window.prompt("Enter your weapon: rock, paper or scissors")
    console.log(`Human: ${humanChoice}`)
    return humanChoice;
}
getHumanChoice()

console.log(`Human: ${humanChoice}`)