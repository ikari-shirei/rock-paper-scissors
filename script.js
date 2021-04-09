let elements = ['rock', 'paper', 'scissors'];
// Random computer selection
function computerPlay() {
  return elements[Math.floor(Math.random() * elements.length)];
}

function play(playerSelection, computerSelection = computerPlay()) {
  // Make player selection lower case
  playerSelection = playerSelection.toLowerCase();
  // Make first letter of player selection uppercase, others lowercase.
  let suitablePlayerSelection =
    playerSelection[0].toUpperCase() + playerSelection.slice(1);
  // Make first letter of player selection uppercase, others lowercase.
  let suitableComputerSelection =
    computerSelection[0].toUpperCase() + computerSelection.slice(1);
  // If player selection not one of the elements, throw a error.
  if (
    playerSelection != elements[0] &&
    playerSelection != elements[1] &&
    playerSelection != elements[2]
  ) {
    return `${playerSelection} is incorrect value. Try rock, paper or scissors.`;
  }

  //Make comparison between player and computer selections
  if (computerSelection === playerSelection) {
    return `Tie. ${suitableComputerSelection} and ${playerSelection} are the same.`;
  } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
    return `You lose. ${suitableComputerSelection} beats ${playerSelection}.`;
  } else if (computerSelection == 'paper' && playerSelection == 'rock') {
    return `You lose. ${suitableComputerSelection} beats ${playerSelection}.`;
  } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
    return `You lose. ${suitableComputerSelection} beats ${playerSelection}.`;
  } else {
    return `You win. ${suitablePlayerSelection} beats ${computerSelection}.`;
  }
}
