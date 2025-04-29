function getComputerChoice() {
  const randomNumber = Math.round(Math.random() * 3);

  return randomNumber === 1
    ? "Rock"
    : randomNumber === 2
    ? "Paper"
    : randomNumber === 3
    ? "Scissors"
    : null;
}

function getHumanChoice(input) {
  userInput = prompt(input);
  return userInput;
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();

function playGame() {
  for (let i = 0; i < 5; i++) {
    function playRound(humanChoice, computerChoice) {
      if (
        humanChoice.toLowerCase() === "Rock".toLowerCase() &&
        computerChoice === "Paper"
      ) {
        console.log(`Player[R] < [P] Computer`);
        computerScore++;
      }
      if (
        humanChoice.toLowerCase() === "Paper".toLowerCase() &&
        computerChoice === "Paper"
      ) {
        console.log(`Player[P] === [P] Computer`);
      }
      if (
        humanChoice.toLowerCase() === "Scissors".toLowerCase() &&
        computerChoice === "Paper"
      ) {
        console.log(`Player[S] > [P] Computer`);
        humanScore++;
      }

      if (
        humanChoice.toLowerCase() === "Paper".toLowerCase() &&
        computerChoice === "Rock"
      ) {
        console.log(`Player[P] > [R] Computer`);
        humanScore++;
      }
      if (
        humanChoice.toLowerCase() === "Rock".toLowerCase() &&
        computerChoice === "Rock"
      ) {
        console.log(`Player[R] === [R] Computer.`);
      }
      if (
        humanChoice.toLowerCase() === "Scissors".toLowerCase() &&
        computerChoice === "Rock"
      ) {
        console.log(`Player[S] < [R] Computer`);
        computerScore++;
      }

      if (
        humanChoice.toLowerCase() === "Paper".toLowerCase() &&
        computerChoice === "Scissors"
      ) {
        console.log(`Player[P] < [S] Computer`);
        computerScore++;
      }
      if (
        humanChoice.toLowerCase() === "Rock".toLowerCase() &&
        computerChoice === "Scissors"
      ) {
        console.log(`Player[R] > [S] Computer`);
        humanScore++;
      }
      if (
        humanChoice.toLowerCase() === "Scissors".toLowerCase() &&
        computerChoice === "Scissors"
      ) {
        console.log(`Player[S] === [S] Computer`);
      }
    }
    playRound(humanSelection, getComputerChoice());
  }
  console.log(`Human score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);
}

playGame();
