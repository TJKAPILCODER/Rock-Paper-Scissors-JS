const getUserChoice = userInput =>  {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
      return "Error! Enter valid choice.";
  }
};

// Test
// console.log(getUserChoice('rock'));

const getComputerChoice = () => {
  number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return 'rock';
  } else if (number === 1) {
      return 'paper';
  } else {
      return 'scissor';
  }
}
// Test
// console.log(getComputerChoice());

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer Won!';
      } else {
         return 'User Won!';
      }
  } else if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return 'User Won!';
      } else {
          return 'Computer Won!';
      }
  } else if (userChoice === 'scissor') {
      if(computerChoice === 'rock') {
        return 'Computer Won!';
    } else {
        return 'User Won!';
    }
  } else {
      return "User Entered 'bomb, User Won!"
  }
}

function playGame() {
  let userChoice = getUserChoice('bomb');
  console.log(userChoice);
  let computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
