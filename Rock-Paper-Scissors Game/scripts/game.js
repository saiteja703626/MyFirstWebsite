let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  draws: 0,
}

updateScoreElement();
//document.querySelector(".js-result").innerHTML = `${result}`;
//document.querySelector(".js-moves").innerHTML = `You picked ${playerMove}, computer picked ${computerMove}`;

let isAutoPlaying = false;
let intervalId;

/*
const autoPlay = () => {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
};
*/

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }

}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('Rock');
})
document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('Paper');
})
document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('Scissors');
})

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('Rock');
  } else if (event.key === 'p') {
    playGame('Paper');
  } else if (event.key === 's') {
    playGame('Scissors');
  }
})

function playGame(playerMove) {

  const computerMove = pickComputerMove()
  let result = '';
  if (playerMove === 'Scissors') {
    if (computerMove == 'rock') {
      result = 'You lose';
    } else if (computerMove == 'Paper') {
      result = 'You win';
    } else if (computerMove == 'Scissors') {
      result = 'Tie';
    }

    // alert(`You picked ${playerMove}, computer picked ${computerMove} and the result is ${result}`);
  } else if (playerMove === 'Rock') {
    if (computerMove == 'rock') {
      result = 'Tie';
    } else if (computerMove == 'Paper') {
      result = 'You lose';
    } else if (computerMove == 'Scissors') {
      result = 'You win';
    }
    //alert(`You picked ${playerMove}, computer picked ${computerMove} and the result is ${result}`);
  } else if (playerMove === 'Paper') {
    if (computerMove == 'rock') {
      result = 'You win';
    } else if (computerMove == 'Paper') {
      result = 'Tie';
    } else if (computerMove == 'Scissors') {
      result = 'You lose';
    }
  }
  if (result === 'You win') {
    score.wins += 1;
  } else if (result === 'You lose') {
    score.loses += 1;
  } else if (result === 'Tie') {
    score.draws += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();
  document.querySelector(".js-result").innerHTML = `${result}`;
  document.querySelector(".js-moves").innerHTML =
    `You<img src="images/${playerMove}-emoji.png" class="emoji-button">
    <img src="images/${computerMove}-emoji.png" class="emoji-button">Computer`;

  // alert(`You picked ${playerMove}, computer picked ${computerMove} and the result is ${result}
  //   Wins:${score.wins}, Loses:${score.loses}, Draws:${score.ties}`);


}

function updateScoreElement() {
  document.querySelector(".js-score").innerHTML = `Wins:${score.wins}, Loses:${score.loses}, Draws:${score.draws}`;
}


function pickComputerMove() {
  let computerMove = '';
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < (1 / 3)) {
    computerMove = ('rock');
  }
  else if (randomNumber >= (1 / 3) && randomNumber < (2 / 3)) {
    computerMove = ('Paper');
  }
  else if (randomNumber >= (2 / 3) && randomNumber < 1) {
    computerMove = ('Scissors');
  }

  return computerMove;
}


