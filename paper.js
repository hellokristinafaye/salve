const hand = ["","rock", "paper", "scissors"];
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

const drawScoreText = document.getElementById("draw-score");
const computerScoreText = document.getElementById("computer-score");
const humanScoreText = document.getElementById("human-score");


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 4);
    return hand[choice];
}
console.log(`Computer: ${computerChoice}`);

function getHumanChoice() {
    return prompt("Game on! Choose rock, paper or scissors!");
}
console.log(`Human: ${humanChoice}`)

function playRound(humanChoice) {
    let lowerCaseHumanChoice = humanChoice.toLowerCase();
    console.log(`lowerCaseHumanChoice: ${lowerCaseHumanChoice}`)

    if (lowerCaseHumanChoice === computerChoice) {
        console.log("Draw!")
        drawScore++
        console.log(`Draw Score: ${drawScore}`)
        drawScoreText.innerHTML = drawScore

    }
    else if (lowerCaseHumanChoice === "rock" && computerChoice === "paper") {
        console.log("Paper Wins!")
        computerScore++
        console.log(`Computer Score: ${computerScore}`)
        computerScoreText.innerHTML = computerScore
    }
    else if (lowerCaseHumanChoice === "rock" && computerChoice === "scissors") {
        console.log("Rock Wins!")
        humanScore++
        console.log(`Human Score: ${humanScore}`)
        humanScoreText.innerHTML = humanScore
    }
    else if (lowerCaseHumanChoice === "paper" && computerChoice === "rock") {
        console.log("Paper Wins!")
        humanScore++
        console.log(`Human Score: ${humanScore}`)
        humanScoreText.innerHTML = humanScore
    }
    else if (lowerCaseHumanChoice === "paper" && computerChoice === "scissors") {
        console.log("Scissors Wins!")
        computerScore++
        console.log(`Computer Score: ${computerScore}`)
        computerScoreText.innerHTML = computerScore
    }


}
playRound(humanChoice);