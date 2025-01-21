Advanced Rock-Paper-Scissors-Lizard-Spock Game

What This Is:

This is an advanced take on the classic Rock-Paper-Scissors game. It includes some fun twists like Lizard and Spock, a special bomb feature, and even a multiplayer mode. I built it to showcase both my programming skills and my ability to write modular, reusable, and scalable code. It's meant to be fun but also demonstrate the kind of thoughtful planning I bring to my projects.

Features

- Single-Player Mode: You play against the computer, which makes random choices.
- Multiplayer Mode: Two players can go head-to-head, taking turns.
- Special Choices: Added Lizard and Spock to expand the classic game.
- "Bomb" Feature: If you're feeling cheeky, use bomb for an instant win (single-player only).
- Win Percentages: Tracks and displays how well you're doing.
- Dynamic Input Handling: Handles inputs like ROCK or rOcK gracefully.
- Replayable: You can keep playing until you type quit.
- Detailed Stats: At the end, it shows scores, win percentages, and the overall winner.

Rules of the Game
Here's how each choice interacts:

- Rock crushes Scissors and Lizard.
- Paper covers Rock and disproves Spock.
- Scissors cut Paper and decapitate Lizard.
- Lizard poisons Spock and eats Paper.
- Spock smashes Scissors and vaporizes Rock.
- If both players choose the same option, it's a tie.

Why I Built This

I wanted to showcase a few key skills:

- Writing clean, reusable functions.
- Handling edge cases (e.g., invalid inputs, graceful quitting).
- Thinking through user experience details like clear error messages and replayability.
- Structuring logic for scalability (e.g., easily adding new game mechanics or features).
- It’s a fun way to show my approach to problem-solving and attention to detail.

How to Run It:
- Copy the code into a .js file.
- Open the file in your preferred JavaScript environment:
- In the browser, use the console.
- In Node.js, run the file using node filename.js.
- Choose your mode:
- Single-Player Mode: Uncomment playGame();.
- Multiplayer Mode: Uncomment playMultiplayerGame();.
  
Sample Gameplay
Single-Player Example:

Welcome to Advanced Rock-Paper-Scissors-Lizard-Spock!
You chose: rock
Computer chose: paper
Computer wins this round!
Score - You: 0, Computer: 1
---------------------------------
Multiplayer Example:

Player 1 chose: lizard
Player 2 chose: spock
Player 1 wins this round!
Score - Player 1: 1, Player 2: 0
---------------------------------
End of Game Stats:

Game Over!
Total rounds played: 5
Final Score - You: 3, Computer: 2
Your win percentage: 60.00%
Computer win percentage: 40.00%
Congratulations! You're the overall winner!

What I Learned:

- Dynamic Game Design: Expanding a simple game into something more complex while keeping it intuitive.
- Reusable Code: Functions like determineWinner and getUserChoice are modular and can handle new features with minimal changes.
- User Experience: Focused on clear prompts, helpful error messages, and a satisfying game flow.
- Testing: Ran multiple scenarios to ensure edge cases (like invalid inputs or ties) were handled smoothly.

Next Steps:

If I had more time, I'd consider:

- Adding animations or sound effects for a browser-based version.
- Building a scoreboard for long-term tracking across multiple sessions.
- Creating an AI opponent with difficulty levels instead of random choices.
- Adding even more quirky features (e.g., a “cheat mode” that predicts the computer’s choice).

Why It’s Cool:

This project is more than just a game. It’s an example of how I approach problem-solving with a mix of creativity, practicality, and user empathy. I love creating things that are both functional and engaging, and this reflects that philosophy.

