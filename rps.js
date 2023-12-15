let userWins = 0;
let ties = 0;
let losses = 0;

function getUserChoice() {
    return prompt("Enter R, P, or S for Rock, Paper, or Scissors:").toUpperCase();
}

function getComputerChoice() {
    const choices = ['R', 'P', 'S'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        ties++;
        return "It's a tie!";
    } else if (
        (userChoice === 'R' && computerChoice === 'S') ||
        (userChoice === 'P' && computerChoice === 'R') ||
        (userChoice === 'S' && computerChoice === 'P')
    ) {
        userWins++;
        return "You win!";
    } else {
        losses++;
        return "You lose!";
    }
}

function playGame() {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    alert(`You chose ${userChoice}\nThe computer chose ${computerChoice}\n${result}`);
    alert(`Wins: ${userWins}, Ties: ${ties}, Losses: ${losses}`);

    const playAgain = confirm("Do you want to play again?");
    if (playAgain) {
        playGame();
    }
}

// Start the game
playGame();
