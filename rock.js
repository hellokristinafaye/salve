
const hand = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

const gameMsgText = document.getElementById("game-msg")
gameMsgText.innerHTML = "hello";

function getComputerChoice() {
    let choice = Math.floor(Math.random() * hand.length);
    computerChoice = hand[choice];
    console.log(`Computer: ${computerChoice}`);
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = window.prompt("Enter your weapon: rock, paper or scissors")
    console.log(`Human: ${humanChoice}`);

    return humanChoice;
}

// console.log(humanChoice);

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    // humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("Draw!")
        return "It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
};

function playGame() {
    for (var i = 0; i < 3; i++) {
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        return "You win the game!"
    } else {
        return "You lose the game!"
    }
}

// playGame()