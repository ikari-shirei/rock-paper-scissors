let elements = ['rock', 'paper', 'scissors'];

//random computer selection
function computerPlay() {
  return elements[Math.floor(Math.random() * elements.length)];
}

//save win, lose and tie
let win = 0;
let lose = 0;
let tie = 0;

function play(playerSelection, computerSelection = computerPlay()) {
  //make player selection lower case
  if (playerSelection) {
    playerSelection = playerSelection.toString();
    playerSelection = playerSelection.toLowerCase();
  }

  //write computer selection
  computerRoundResult.textContent =
    computerSelection[0].toUpperCase() + computerSelection.slice(1);

  //write round results and increase scores
  let results = document.querySelector('#results');

  if (playerSelection == computerSelection) {
    tie++;
    results.textContent = ` You selected ${playerSelection} and computer 
    selected ${computerSelection}. It's a tie.`;
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    lose++;
    results.textContent = ` You selected ${playerSelection} and computer 
    selected ${computerSelection}. You lost this round.`;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    lose++;
    results.textContent = ` You selected ${playerSelection} and computer 
    selected ${computerSelection}. You lost this round.`;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    lose++;
    results.textContent = ` You selected ${playerSelection} and computer 
    selected ${computerSelection}. You lost this round.`;
  } else {
    win++;
    results.textContent = ` You selected ${playerSelection} and computer 
    selected ${computerSelection}. You win this round.`;
  }

  //write win and lose numbers
  winDom.textContent = win;
  loseDom.textContent = lose;

  //end of the game, delete round results
  if (win === 5 || lose === 5) {
    setTimeout(() => {
      return (results.textContent = '');
    }, 2000);
  }

  //highlight winner's score
  if (win === 5) {
    winDom.style.color = 'var(--black)';
    winDom.style.backgroundColor = 'var(--yellow)';
    winDom.style.borderRadius = '100% 50%';
  } else if (lose === 5) {
    loseDom.style.color = 'var(--black)';
    loseDom.style.backgroundColor = 'var(--yellow)';
    loseDom.style.borderRadius = '50% 100% ';
  }
}

//get input from buttons
let playerChoice;

function playRound() {
  play(playerChoice);

  //end of the game disable buttons, write game results and show restart button
  if (win === 5) {
    disable();
    gameResult.textContent = 'You won the game.';
    endGame.appendChild(restartButton);
  } else if (lose === 5) {
    disable();
    gameResult.textContent = 'You lost the game.';
    endGame.appendChild(restartButton);
  }
}
