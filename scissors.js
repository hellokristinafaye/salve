console.log("snip snip")

function getComputerChoice() {
    let num = Math.round(Math.random() * 2)

    if (num === 0) {
        console.log("rock");
    } else if (num === 1) {
        console.log("paper");
    } else if (num === 2) {
        console.log("scissors");
    }

    console.log(num);
}

getComputerChoice()