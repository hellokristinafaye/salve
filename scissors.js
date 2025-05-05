console.log("snip snip")

function getComputerChoice() {
    let num = Math.round(Math.random() * 2)

    if (num === 0) {
        return console.log("rock");
    } else if (num === 1) {
        return console.log("paper");
    } else if (num === 2) {
       return console.log("scissors");
    }
}

function getHumanChoice() {
    return prompt("To play, enter rock, paper, or scissors")
}

let humanChoice = getHumanChoice()
console.log(`player says: ${humanChoice}`)

getComputerChoice()