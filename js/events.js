let body = document.querySelector('body');

//selection buttons
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

//win & lose numbers
let winDom = document.querySelector('#win');
let loseDom = document.querySelector('#lose');

//what player and computer select that round
let playerRoundResult = document.querySelector('#player-round-result');
let computerRoundResult = document.querySelector('#computer-round-result');

//results of game
let gameResult = document.querySelector('#game-result');

//add restart button after game completed
let restartButton = document.createElement('button');
restartButton.textContent = 'Restart';
restartButton.setAttribute('onclick', 'window.location.reload();');

//round results, game results and restart button div element
let endGame = document.querySelector('.end-game');

//write round results
function choice(e) {
  playerChoice = e.target.innerHTML.toLowerCase();
  playerRoundResult.textContent = e.target.innerHTML;
}

rock.addEventListener('click', choice);
paper.addEventListener('click', choice);
scissors.addEventListener('click', choice);

//play new round
rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

//disable buttons after game completed
function disable() {
  rock.style.cursor = 'not-allowed';
  rock.disabled = 'true';
  paper.style.cursor = 'not-allowed';
  paper.disabled = 'true';
  scissors.style.cursor = 'not-allowed';
  scissors.disabled = 'true';
}
