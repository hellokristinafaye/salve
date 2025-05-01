const hand = ["","rock", "paper", "scissors"];
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

const drawScoreText = document.getElementById("draw-score");


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
        console.log(drawScore)
        drawScoreText.innerHTML = drawScore

    }
    // else if (
    //     lowerCaseHumanChoice === "rock" &&computerChoice === "paper"
    // ) {

    // }


}
playRound(humanChoice);