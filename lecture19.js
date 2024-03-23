const prompt = require('prompt-sync')();

// Decide if you win or lose the round
function getWinner(userInput, computerChoice) {
    if (userInput == computerChoice) {
        return 'tie';
    } else if (
        (userInput == "rock" && computerChoice == "scissors") ||
        (userInput == "paper" && computerChoice == "rock") ||
        (userInput == "scissors" && computerChoice == "paper")
    ) {
        // Where we win
        return 'win';
    } else {
        // Compuser Wins
        return 'lose';
    }
}

// Print Winner
function printWinner(roundResult) {
    switch (roundResult) {
        case 'win':
            console.log("User wins the round!");
            break;
        case 'lose':
            console.log("Computer wins the round!");
            break;
        default:
            console.log("It's a tie!");
    }
}

function printScore(userScore, computerScore, prefix = 'Current') {
    console.log(`${prefix} Scores: User: ${userScore}, Computer: ${computerScore}`);
    console.log('---------------------------------------');
    console.log();
}

var shortOptions = ["r", "p", "s"];
var validOptions = ["rock", "paper", "scissors"];
function getUserChoise() {
    // Get user input
    const userInput = prompt("Choose Rock, Paper, or Scissors (r/p/s): ").toLowerCase(); // Assume the input is correct -> "rock", "paper", or "scissors"
    if (shortOptions.includes(userInput)) {
        return validOptions[shortOptions.indexOf(userInput)];
    } else {
        console.log('Please, insert a valid option!');
        return getUserChoise();
    }
}

function getComputerChoise() {
    // Get computer's choice
    const randomNum = Math.floor(Math.random() * 3) // randomNum will either be 0, 1, or 2
    // Set computer's choice to "rock", "paper" or "scissors"
    return validOptions[randomNum];
}


/**
 * Rock Paper Scissors Game (Example 7)
 */
let play = true; // play represents if we want to play or not

// User is playing the game
do {
    // score, rounds
    let roundsLeft = 5;
    let userScore = 0;
    let computerScore = 0;

    // Game itself -> rock, paper, scissors, 
    // user input, computer input, who wins?
    while (roundsLeft > 0) {

        // Get user's choice
        const userInput = getUserChoise();
        // Get computer's choice
        const computerChoice = getComputerChoise();

        // Feedback about choices
        console.log("You chose: ", userInput);
        console.log("Computer chose: ", computerChoice);

        // Decide who wins
        const roundResult = getWinner(userInput, computerChoice);
        printWinner(roundResult);
        if (roundResult === 'win') userScore++;
        if (roundResult === 'lose') computerScore++;

        printScore(userScore, computerScore);

        // Update rounds
        roundsLeft--;
    }

    // Print the score
    printScore(userScore, computerScore, 'Final');

    // Ask the user if they want to keep playing
    const replay = prompt("Do you want to play again (yes/no)?: ").toLowerCase();

    if (replay != "yes") {
        console.log("Thanks for playing :)");
        play = false;
    }
} while (play);
