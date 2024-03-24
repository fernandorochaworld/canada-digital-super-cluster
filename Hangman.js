const prompt = require('prompt-sync')();

// List of words to choose from
const words = [
    "table", "chair", "desk", "book", "pen", "pencil", "phone", "computer", "keyboard", "mouse",
    "lamp", "clock", "television", "remote", "bed", "pillow", "blanket", "cup", "glass", "plate",
    "fork", "spoon", "knife", "bowl", "pot", "pan", "mirror", "brush", "towel", "shoe"
];

// Function to choose a random word from the list
function chooseWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// Function to initialize the game
function initializeGame() {
    console.log("Welcome to Hangman!");
    console.log("Try to guess the word by entering one letter at a time.");
    console.log("You have 7 chances to guess the word.");
    console.log("* Tip: Common English work.");

    // Choose a random word
    let wordToGuess = chooseWord().toLowerCase();
    let guessedLetters = [];
    let wrongGuesses = 0;
    let maxWrongGuesses = 7;

    // Create initial display word
    let displayWord = "_".repeat(wordToGuess.length);

    // Function to display the current state of the game
    function displayGameState() {
        console.log("\n\nWord to guess: " + displayWord);
        console.log("Guessed letters: " + guessedLetters.join(", "));
        console.log("Wrong guesses left: " + (maxWrongGuesses - wrongGuesses));
    }

    // Function to check if the game is won
    function isGameWon() {
        return displayWord === wordToGuess;
    }

    // Function to check if the game is lost
    function isGameLost() {
        return wrongGuesses >= maxWrongGuesses;
    }

    // Function to handle user input
    function handleInput() {
        let letter = prompt("Enter your guess: ").toLowerCase();
        if (wordToGuess.includes(letter)) {
            for (let i = 0; i < wordToGuess.length; i++) {
                if (wordToGuess[i] === letter) {
                    displayWord = displayWord.substring(0, i) + letter + displayWord.substring(i + 1);
                }
            }
        } else {
            wrongGuesses++;
        }
        guessedLetters.push(letter);
        displayGameState();

        if (isGameWon()) {
            console.log("\n\nCongratulations! You guessed the word correctly: " + wordToGuess);
            return;
        } else if (isGameLost()) {
            console.log("\n\nSorry, you're out of guesses! The word was: " + wordToGuess);
            return;
        } else {
            handleInput();
        }
    }

    displayGameState();
    handleInput();
}

// Start the game
initializeGame();
