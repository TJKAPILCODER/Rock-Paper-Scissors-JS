// Function to validate user choice
function getUserChoice(input) {
  const choice = input.trim().toLowerCase();
  const validChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock', 'bomb'];
  
  if (validChoices.includes(choice)) {
    return choice;
  }
  return null; // Return null for invalid input
}

// Function to get computer's choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(player1, player2) {
  if (player1 === player2) {
    return "tie";
  }

  const winConditions = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock']
  };

  if (winConditions[player1].includes(player2)) {
    return "player1";
  } else {
    return "player2";
  }
}

// Main game function
function playGame() {
  let userScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  console.log("Welcome to Advanced Rock-Paper-Scissors-Lizard-Spock!");
  console.log("Rules:");
  console.log("- Rock crushes Scissors and Lizard.");
  console.log("- Paper covers Rock and disproves Spock.");
  console.log("- Scissors cut Paper and decapitate Lizard.");
  console.log("- Lizard poisons Spock and eats Paper.");
  console.log("- Spock smashes Scissors and vaporizes Rock.");
  console.log("Type 'quit' to exit the game.");

  while (true) {
    // Get user input
    const userInput = prompt("Enter your choice: rock, paper, scissors, lizard, spock, or bomb").trim();
    if (userInput.toLowerCase() === 'quit') {
      break; // Exit the game loop
    }

    const userChoice = getUserChoice(userInput);
    if (!userChoice) {
      console.log("Invalid choice! Please choose from 'rock', 'paper', 'scissors', 'lizard', 'spock', or 'bomb'.");
      continue;
    }

    const computerChoice = getComputerChoice();
    console.log(`You chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (userChoice === 'bomb') {
      console.log("You activated 'bomb'! Instant win!");
      userScore++;
      roundsPlayed++;
      continue;
    }

    const winner = determineWinner(userChoice, computerChoice);
    if (winner === "tie") {
      console.log("It's a tie!");
    } else if (winner === "player1") {
      console.log("You win this round!");
      userScore++;
    } else {
      console.log("Computer wins this round!");
      computerScore++;
    }

    roundsPlayed++;
    console.log(`Score - You: ${userScore}, Computer: ${computerScore}`);
    console.log('---------------------------------');
  }

  // Display final statistics
  console.log("\nGame Over!");
  console.log(`Total rounds played: ${roundsPlayed}`);
  console.log(`Final Score - You: ${userScore}, Computer: ${computerScore}`);
  if (roundsPlayed > 0) {
    console.log(`Your win percentage: ${((userScore / roundsPlayed) * 100).toFixed(2)}%`);
    console.log(`Computer win percentage: ${((computerScore / roundsPlayed) * 100).toFixed(2)}%`);
  }

  if (userScore > computerScore) {
    console.log("Congratulations! You're the overall winner!");
  } else if (userScore < computerScore) {
    console.log("Computer wins overall! Better luck next time.");
  } else {
    console.log("It's a tie overall!");
  }
}

// Multiplayer Support
function playMultiplayerGame() {
  let player1Score = 0;
  let player2Score = 0;
  let roundsPlayed = 0;

  console.log("Welcome to the Multiplayer Rock-Paper-Scissors-Lizard-Spock!");
  console.log("Both players take turns choosing. Type 'quit' to exit the game.");

  while (true) {
    const player1Input = prompt("Player 1, enter your choice: rock, paper, scissors, lizard, or spock").trim();
    if (player1Input.toLowerCase() === 'quit') {
      break;
    }

    const player2Input = prompt("Player 2, enter your choice: rock, paper, scissors, lizard, or spock").trim();
    if (player2Input.toLowerCase() === 'quit') {
      break;
    }

    const player1Choice = getUserChoice(player1Input);
    const player2Choice = getUserChoice(player2Input);

    if (!player1Choice || !player2Choice) {
      console.log("Invalid choice by one of the players. Please try again.");
      continue;
    }

    console.log(`Player 1 chose: ${player1Choice}`);
    console.log(`Player 2 chose: ${player2Choice}`);

    const winner = determineWinner(player1Choice, player2Choice);
    if (winner === "tie") {
      console.log("It's a tie!");
    } else if (winner === "player1") {
      console.log("Player 1 wins this round!");
      player1Score++;
    } else {
      console.log("Player 2 wins this round!");
      player2Score++;
    }

    roundsPlayed++;
    console.log(`Score - Player 1: ${player1Score}, Player 2: ${player2Score}`);
    console.log('---------------------------------');
  }

  console.log("\nGame Over!");
  console.log(`Total rounds played: ${roundsPlayed}`);
  console.log(`Final Score - Player 1: ${player1Score}, Player 2: ${player2Score}`);
  if (player1Score > player2Score) {
    console.log("Player 1 is the overall winner!");
  } else if (player1Score < player2Score) {
    console.log("Player 2 is the overall winner!");
  } else {
    console.log("It's a tie overall!");
  }
}

// Uncomment one of the following to play:
// playGame(); // Single-player mode
// playMultiplayerGame(); // Multiplayer mode
