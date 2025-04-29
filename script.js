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
  // 1. Ask user to enter prompt
  userInput = prompt(input);

  // 2. return entered prompt
  return userInput;
}

console.log(`Computer choice: ${getComputerChoice()}`);
console.log(`User input: ${getHumanChoice()}`);
