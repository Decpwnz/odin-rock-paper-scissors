function getComputerChoice() {
  const randomNumber = Math.round(Math.random() * 3);

  return randomNumber === 1
    ? console.log("Rock")
    : randomNumber === 2
    ? console.log("Paper")
    : randomNumber === 3
    ? console.log("Scissors")
    : null;
}

getComputerChoice();
