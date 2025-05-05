console.log("snip snip")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.round(Math.random() * 2)

    if (num === 0) {
        console.log("rock");
        return "rock";
    } else if (num === 1) {
        console.log("paper");
        return "paper";
    } else if (num === 2) {
        console.log("scissors");
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("To play, enter rock, paper, or scissors")
}

let humanChoice = getHumanChoice()
console.log(`player says: ${humanChoice}`)

let computerChoice = getComputerChoice()

console.log(`comp says: ${computerChoice}`)
// function playRound() {

// }