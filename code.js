const result = document.querySelector(".results");
//score
let playerPoints = 0;
let computerPoints = 0;

function game(e) {
  let playerSelection = e;

  //play a round
  function play() {
    function computerPlay() {
      switch ((parseInt(Math.random() * 10) % 3) + 1) {
        case 1:
          return "Rock";
          break;
        case 2:
          return "Paper";
          break;
        case 3:
          return "Scissors";
          break;
      }
    }

    const computerSelection = computerPlay();

    function playRound(playerSelection, computerSelection) {
      switch (playerSelection.toUpperCase()) {
        case "ROCK":
          switch (computerSelection.toUpperCase()) {
            case "ROCK":
              result.firstElementChild.textContent = `Tie`;
              break;
            case "PAPER":
              result.firstElementChild.textContent = `"You lose! Paper beats Rock"`;
              return (computerPoints += 1);
              break;
            case "SCISSORS":
              result.firstElementChild.textContent = `You win! Rock beats Scissors`;
              return (playerPoints += 1);
              break;
          }
          break;
        case "PAPER":
          switch (computerSelection.toUpperCase()) {
            case "ROCK":
              result.firstElementChild.textContent = `You win! Paper beats Rock`;
              return (playerPoints += 1);
              break;
            case "PAPER":
              result.firstElementChild.textContent = `Tie`;
              break;
            case "SCISSORS":
              result.firstElementChild.textContent = `You lose! Scissors beat Paper`;
              return (computerPoints += 1);
              break;
          }
          break;
        case "SCISSORS":
          switch (computerSelection.toUpperCase()) {
            case "ROCK":
              result.firstElementChild.textContent = `You lose! Rock beats Scissors`;
              return (computerPoints += 1);
              break;
            case "PAPER":
              result.firstElementChild.textContent = `You win! Scissors beat Paper`;
              return (playerPoints += 1);
              break;
            case "SCISSORS":
              result.firstElementChild.textContent = `Tie`;
              break;
          }
          break;
      }
    }
    playRound(playerSelection, computerSelection);
  }

  play();

  result.lastElementChild.textContent = `Score: Player ${playerPoints} Computer ${computerPoints}`;

  if (playerPoints == 5) {
    playerPoints = 0;
    computerPoints = 0;
    alert("You won!");
    result.lastElementChild.textContent = "";
    result.firstElementChild.textContent = `Score: Player ${playerPoints} Computer ${computerPoints}`;
  } else if (computerPoints == 5) {
    playerPoints = 0;
    computerPoints = 0;
    alert("You lost!");
    result.lastElementChild.textContent = "";
    result.firstElementChild.textContent = `Score: Player ${playerPoints} Computer ${computerPoints}`;
  }
}

const selectedBtn = document.querySelectorAll("li");
selectedBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.className) {
      case "rockBtn":
        game("Rock");
        break;
      case "paperBtn":
        game("Paper");
        break;
      case "scissorsBtn":
        game("Scissors");
        break;
    }
  });
});
