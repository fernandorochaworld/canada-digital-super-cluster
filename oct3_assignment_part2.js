// #1 Favourite Songs.

const { stringify } = require("querystring");

// Array of favorite songs
const favoriteSongs = [
    "Bohemian Rhapsody by Queen",
    "Hotel California by Eagles",
    "Stairway to Heaven by Led Zeppelin",
    "Smells Like Teen Spirit by Nirvana",
    "November Rain by Guns N' Roses"
];

// Printing the entire array
function printSongArray(array) {
    array.forEach(function(song, index) {
        console.log((index + 1) + ". " + song);
    });

    // Printing the length of the array
    console.log("Total number of favorite songs is: " + favoriteSongs.length);
}
console.log("My Favorite Songs are:");
printSongArray(favoriteSongs);


// Changing the third song to a disliked song
favoriteSongs[2] = "Friday by Rebecca Black";
// Printing the modified array
console.log("\nMy Favorite Songs (after modification):");
printSongArray(favoriteSongs);


// Removing the last song from the array
favoriteSongs.pop();
// Printing the modified array
console.log("\nMy Favorite Songs (after modification):");
printSongArray(favoriteSongs);


// Adding a new song to the end of the array
favoriteSongs.push("Wonderwall by Oasis");
// Printing the modified array
console.log("\nMy Favorite Songs (after modification):");
printSongArray(favoriteSongs);


// Removing the first song from the array
favoriteSongs.shift();
// Printing the modified array
console.log("\nMy Favorite Songs (after modification):");
printSongArray(favoriteSongs);


// Adding a new song to the beginning of the array
favoriteSongs.unshift("Waka-Waka by Shakira");
// Printing the modified array
console.log("\nMy Favorite Songs (after modification):");
printSongArray(favoriteSongs);


// Trying to access the 10th song
console.log(favoriteSongs[9]);



// #2 Sums in 2D Arrays
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Printing the sum of each row
console.log("\n\nSum of each row:");
for (let i = 0; i < matrix.length; i++) {
    const rowSum = matrix[i].reduce((acumulator, value) => acumulator + value, 0);
    console.log("Row " + (i + 1) + ": " + rowSum);
}

// Calculating the sum of the diagonals
let mainDiagonalSum = 0;
let secondaryDiagonalSum = 0;
for (let k = 0; k < matrix.length; k++) {
    mainDiagonalSum += matrix[k][k];
    secondaryDiagonalSum += matrix[k][matrix.length - 1 - k];
}

console.log("\nSum of main diagonal: " + mainDiagonalSum);
console.log("Sum of secondary diagonal: " + secondaryDiagonalSum);


// Challenge: do both in a single for loop!
console.log("\nChallenge: do both in a single for loop!");
mainDiagonalSum = 0;
secondaryDiagonalSum = 0;
for (let i = 0; i < matrix.length; i++) {
    const rowSum = matrix[i].reduce((acumulator, value) => acumulator + value, 0);
    console.log("Row " + (i + 1) + ": " + rowSum);
    
    mainDiagonalSum += matrix[i][i];
    secondaryDiagonalSum += matrix[i][matrix.length - 1 - i];
}
console.log("\nSum of main diagonal: " + mainDiagonalSum);
console.log("Sum of secondary diagonal: " + secondaryDiagonalSum);




// #3 Movie Theatre

const prompt = require("prompt-sync")({ sigint: true });

// Array representation of a movie theatre
const theatre = [
    ["Seat 1", "Seat 2", "Seat 3", "Seat 4", "Seat 5"],
    ["Seat 1", "Seat 2", "Seat 3", "Seat 4", "Seat 5"],
    ["Seat 1", "Seat 2", "Seat 3", "Seat 4", "Seat 5"]
];

// Function to print the current state of the theatre
function printTheatre() {
    console.log("\n\nMovie Theatre:");
    for (var i = 0; i < theatre.length; i++) {
        console.log("Row " + (i + 1) + ": " + theatre[i].join(", "));
    }
    console.log("\n");
}

// Function to book a seat
function bookSeat(row, seat) {
    if (theatre[row - 1][seat - 1] === "X") {
        console.error("Sorry, this seat is already booked. Please try again. 💥");
        return false;
    } else {
        theatre[row - 1][seat - 1] = "X";
        console.info("Seat booked successfully! 👍");
        return true;
    }
}

// Function to handle user input
function getUserInput() {
    const row = parseInt(prompt("Enter the row number (1-3):"));
    const seat = parseInt(prompt("Enter the seat number (1-5):"));

    if (isNaN(row) || isNaN(seat) || row < 1 || row > 3 || seat < 1 || seat > 5) {
        console.log("Invalid input. Please enter valid row and seat numbers. 💣");
        return getUserInput(); // Asking for input again if invalid input
    } else {
        return { row: row, seat: seat };
    }
}


// Check if user wants to book more seats
function continueBooking() {
    const yn = prompt("Continue Booking (y):");
    return yn === 'y';
}

// Main program
printTheatre();
do {
    const userInput = getUserInput();
    bookSeat(userInput.row, userInput.seat)
    printTheatre();
} while(continueBooking());
