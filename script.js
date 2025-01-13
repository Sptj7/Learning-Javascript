let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random() * 10);
}
function compareGuesses(human, computer, target) {
let humanDifference = Math.abs(human - target)
let computerDifference = Math.abs(computer - target)
return humanDifference <= computerDifference;

function updateScore(winner) {
  if (winner === "human") {
    humanScore++;
  }
  else if (winner === "computer") {
    computerScore++;
  }
}
function advanceRound() {
  currentRoundNumber++;
}