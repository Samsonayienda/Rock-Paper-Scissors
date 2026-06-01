function playerSelection(){
document.getElementById("rock").addEventListener("click", (Rock) => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
}

function getComputerChoice() {

  const choices = ["Rock", "Paper", "Scissors"];
   
  const randomIndex = Math.floor(Math.random() * choices.length);

   return choices[randomIndex];
  }
  


  let playerScore = 0;
  let computerScore = 0;
  let rounds = 0;

  const resultsDiv = document.getElementById("results")
  const roundResult = document.getElementById("round-result")
  const scoreDisplay = document.querySelector("#score")

function playRound (playerSelection) {
  const computerSelection = getComputerChoice()
  let result = "";

  if (playerSelection === computerSelection){
    result = `Tie, both chose ${playerSelection}`;

  }else if (
    (playerSelection === "rock" && computerSelection === "Scissors") ||
    (playerSelection === "scissors" && computerSelection === "Paper") ||
    (playerSelection === "paper" && computerSelection === "Rock")
  ){
  playerScore++;
  result = `You win ${playerScore} beats ${computerScore}`
}else {
  computerScore++;
  result = `You lose ${computerScore} beats ${playerScore}`
}

updateUI(result)
}

//Updates UI
function updateUI(message) {
    roundResult.textContent = message;
    scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    
    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ? "Player" : "Computer";
        roundResult.textContent = `GAME OVER! ${winner} wins ${playerScore}-${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
}
// function playerSelection(){
// document.getElementById(".rock").addEventListener("click", (Rock) => playRound("rock"));
// document.getElementById(".paper").addEventListener("click", () => playRound("paper"));
// document.getElementById(".scissors").addEventListener("click", () => playRound("scissors"));
// }

playerSelection();