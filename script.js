const humanScoreText = document.getElementById("human-score");
const computerScoreText = document.getElementById("computer-score");
const hand = ['rock', 'paper', 'scissors'];
let computerChoice;

let humanScore = 0;
let computerScore = 0;

humanScoreText.innerHTML = humanScore
computerScoreText.innerHTML = computerScore

function getComputerChoice() {
    let choice = Math.floor(Math.random() * hand.length);
    computerChoice = hand[choice];
    return computerChoice;
}

function getHumanChoice() {
    let hey = window.prompt("Enter your weapon: rock, paper or scissors")
    console.log(hey)
}
// let humanChoice = getHumanChoice();



// the problem is that I can't get teh human choice OUT of the getHumanChoice() function???? Like the results never show up in the later function, even tho the variable is declared at a global scope. the result doesn't leave the getHumanChoice function.
// getHumanChoice()

function playRound(humanChoice, computerChoice) {
    getHumanChoice();
    getComputerChoice();
    console.log(`Human: ${humanChoice}`)
    console.log(`Computer: ${computerChoice}`);
    // humanChoice = humanChoice.toLowerCase();
    // console.log("um")
    // if (getHumanChoice !== "rock") {
    //    return console.log("lol wut")
    // }

    // if (humanChoice === computerChoice) {
    //     return console.log("It's a tie!");
    // } else if (humanChoice === "rock" && computerChoice === "scissors") {
    //     humanScore++;
    //     return console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    // } else if (humanChoice === "rock" && computerChoice === "paper") {
    //     computerScore++;
    //     return `You lose! ${computerChoice} beats ${humanChoice}`;
    // }
    // else if (humanChoice === "paper" && computerChoice === "scissors") {
    //     computerScore++;
    //     return `You lose! ${computerChoice} beats ${humanChoice}`;
    // }
    // else if (humanChoice === "paper" && computerChoice === "rock") {
    //     humanScore++;
    //     return `You win! ${humanChoice} beats ${computerChoice}`;
    // }
    // else if (humanChoice === "scissors" && computerChoice === "paper") {
    //     humanScore++;
    //     return `You win! ${humanChoice} beats ${computerChoice}`;
    // }
    // else if (humanChoice === "paper" && computerChoice === "rock") {
    //     humanScore++;
    //     return `You win! ${humanChoice} beats ${computerChoice}`;
    // }
    // else if (humanChoice === "paper" && computerChoice === "scissors") {
    //     computerScore++;
    //     return `You lose! ${computerChoice} beats ${humanChoice}`;
    // }
};

