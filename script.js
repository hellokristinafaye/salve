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