
// Create Input reader
const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Get Computer Number
function getComputerNumber() {
    return Math.floor(Math.random() * 4) + 1;
}

// Get Playter Number
async function getPlayerNumber() {
    let number = 0;
    while (!number) {
        number = Number(await new Promise(resolve => reader.question('Enter your number(1 to 5): ', resolve)));

        // Check number consistency
        if (isNaN(number) || number < 1 || number > 5) {
            number = 0;
            console.log("Please enter a valid number between 1 and 5.");
        }
    }
    return number;
}

// Play one round
async function playRound() {
    let sum = 0;
    // Run until the sum riachs 21 or above
    while (sum < 21) {
        sum += await getPlayerNumber();
        sum += getComputerNumber();

        console.log(`Total: ${sum}`);
    }
    // Check the winner
    if (sum === 21) {
        console.log('Congratulations!! You won!!');
    } else {
        console.log('You lost :(');
    }
}

// Run Game
async function main() {
    console.log("Welcome to Blackjack!");

    let continuePlaying = true;
    while (continuePlaying) {
        await playRound();

        // Check if player want to continue playing
        continuePlaying = (await new Promise(resolver => reader.question('Continue playing? (y/n): ', resolver)) === 'y');
    }

    reader.close();
    console.log("Bye.");
}

main();
