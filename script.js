let elements = ['rock', 'paper', 'scissors'];
// Random computer selection
function computerPlay() {
  return elements[Math.floor(Math.random() * elements.length)];
}

function play(playerSelection, computerSelection = computerPlay()) {
  // Make player selection lower case
  if (playerSelection) {
    playerSelection = playerSelection.toLowerCase();
  } else {
    //if input doesn't exist, default selection is rock
    playerSelection = 'rock';
  }
  // Make first letter of player selection uppercase, others lowercase.
  let suitablePlayerSelection =
    playerSelection[0].toUpperCase() + playerSelection.slice(1);
  // Make first letter of computer selection uppercase, others lowercase.
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

function game() {
  //save win, lose and tie
  let win = 0;
  let lose = 0;
  let tie = 0;
  //save results into an array
  let results = [];
  //iterator is in function scope in case of later use
  let i = undefined;
  //save answer after find it and return it at the end
  let answer = undefined;
  //take 5 inputs and save into results array
  function askForInput(num) {
    for (i = 1; i <= num; i++) {
      results.push(
        play(prompt(`Rock, paper or scissor? (Default choice is rock.)`))
      );
    }
  }

  askForInput(5);

  //compare win and loses
  function compareWinLose() {
    //loop in results
    for (let j = 0; j < results.length; j++) {
      //count win and loses
      if (results[j].includes('You win.')) {
        win++;
      } else if (results[j].includes('You lose.')) {
        lose++;
      }
      // if win or lose reach 5, return answer, else ask for input one more time
      if (win === 5) {
        answer = `You win ${win} times, lose ${lose} times and tie ${tie} times. You won, computer lost.`;
        break;
      } else if (lose === 5) {
        answer = `You win ${win} times, lose ${lose} times and tie ${tie} times. You lost, computer won.`;
        break;
      } else {
        tie++;
        //if it is tie, use askForInput with parameter 1 to loop one more time.
        askForInput(1);
      }
    }
  }

  compareWinLose();

  return answer;
}

console.log(game());
