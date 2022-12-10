function getComputerChoice(max) {
   let randomNumber =  Math.floor(Math.random() * max);
   console.log(randomNumber);
   if (randomNumber === 0) {
    return "rock"
   } else if (randomNumber === 1) {
    return "paper"
   } else if (randomNumber === 2) {
    return "scissors"
   }
    return;
}

console.log(getComputerChoice(3));

