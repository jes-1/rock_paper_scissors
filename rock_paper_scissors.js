function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    } else if (randomNumber === 2) {
        return "scissors"
    }
}

function getPlayerSelection() {
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice;
}


function playRound(myAnswer, computerAnswer) {
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
    } else if (myAnswer === "paper" && computerAnswer === "scissors") {
        return "computer wins";
    } else if (myAnswer === "scissors" && computerAnswer === "rock") {
        return "computer wins";
    } else if (myAnswer === "scissors" && computerAnswer === "paper") {
        return "player wins";
    }
}


function game(){

    let computerScore = 0
    let playerScore = 0
    
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerSelection()
        let computerSelection = getComputerChoice()
        let winning = playRound(playerSelection, computerSelection);
        if (winning === "computer wins") {
            computerScore++;
            console.log("comp:" + computerScore);
        } else if (winning === "player wins") {
            playerScore++;
            console.log("player:" + playerScore);
        }
    }
    
    
    if(computerScore > playerScore) {
        console.log("computer wins!")
    } else if(playerScore > computerScore) {
        console.log("player wins!")
    } else if (computerScore === playerScore) {
        console.log("it's a tie!")
    }
}

game();