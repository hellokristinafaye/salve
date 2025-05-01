
const hand = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

const gameMsgText = document.getElementById("game-msg")
const humanScoreText = document.getElementById("human-score");
const computerScoreText = document.getElementById("computer-score")

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
        // gameMsgText.innerHTML = "Draw!"
        alert("Draw!")
        return "Draw!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        humanScoreText.innerHTML = humanScore;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        alert(`You win! ${humanChoice} beats ${computerChoice}`)
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        computerScoreText.innerHTML = computerScore;
        alert(`You lose! ${computerChoice} beats ${humanChoice}`)
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        computerScoreText.innerHTML = computerScore;
        alert(`You lose! ${computerChoice} beats ${humanChoice}`)
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        humanScoreText.innerHTML = humanScore;
        alert(`You win! ${humanChoice} beats ${computerChoice}`)
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        humanScoreText.innerHTML = humanScore;
        alert(`You win! ${humanChoice} beats ${computerChoice}`)
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        humanScoreText.innerHTML = humanScore;
        alert(`You win! ${humanChoice} beats ${computerChoice}`)
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        computerScoreText.innerHTML = computerScore;
        alert(`You lose! ${computerChoice} beats ${humanChoice}`)
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
};

function playGame() {
    for (var i = 0; i < 3; i++) {
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        gameMsgText.innerHTML = "You win the game!";
        return "You win the game!"
    } else if (humanScore < computerScore) {
        gameMsgText.innerHTML = "You lose the game!";
        return "You lose the game!"
    }
}

// playGame()