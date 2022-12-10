function getComputerChoice() {
   let randomNumber =  Math.floor(Math.random() * 3);
   if (randomNumber === 0) {
    return "rock"
   } else if (randomNumber === 1) {
    return "paper"
   } else if (randomNumber === 2) {
    return "scissors"
   }
}

function getPlayerSelection () {
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice;
}


function playRound(myAnswer, computerAnswer){
    console.log(myAnswer)
    console.log(computerAnswer)
    if (myAnswer === computerAnswer) {
        return "draw";
    } else if (myAnswer === "rock" && computerAnswer === "paper") {
        return "computer wins";
    } else if (myAnswer === "rock" && computerAnswer === "scissors") {
        return "player wins";
    } else if (myAnswer === "paper" && computerAnswer === "rock") {
        return "player wins";
    } else if (myAnswer === "paper" && computerAnswer ==="scissors") {
        return "computer wins";
    } else if (myAnswer === "scissors" && computerAnswer === "rock") {
        return "computer wins";
    } else if (myAnswer === "scissors" && computerAnswer === "paper") {
        return "player wins";
    }

}

let playerSelection = getPlayerSelection()
let computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection));
