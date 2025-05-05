
function getComputerChoice() {
    let num = Math.round(Math.random() * 2)

    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else if (num === 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("To play, enter rock, paper, or scissors")
}

let humanChoice;

let computerChoice = getComputerChoice()

console.log(`comp says: ${computerChoice}`)

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    console.log(`player says: ${humanChoice}`)
    // humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("it's a tie!");
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Paper beats Rock, Computer wins!")
        computerScore++
        console.log(`Computer: ${computerScore}\n Human: ${humanScore}`)
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Rock beats Scissors, Human wins!")
        humanScore++
        console.log(`Computer: ${computerScore}\n Human: ${humanScore}`)
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Paper beats Rock, Human wins!")
        humanScore++
        console.log(`Computer: ${computerScore}\n Human: ${humanScore}`)
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("Scissors beats Paper, Computer wins!")
        computerScore++
        console.log(`Computer: ${computerScore}\n Human: ${humanScore}`)
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("Rock beats Scissors, Computer wins!")
        computerScore++
        console.log(`Computer: ${computerScore}\n Human: ${humanScore}`)
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Scissors beats Paper, Human wins!")
        humanScore++
        console.log(`Computer: ${computerScore}\n Human: ${humanScore}`)
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {

    
    // for (let i = 0; i < 5; i++) {
    //     playRound();
    // }
    
    
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
    console.log("Game Over, play again?")
}

playGame();