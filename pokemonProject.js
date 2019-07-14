////////////
// ARRAYS //
////////////

console.log("Challenge #1:");
// Create an array called "roster" with the following names as 
// strings: Pikachu, MewTwo, Onix, Eevee
// Console.log the length of the "roster" array

let roster = ['Pikachu', 'MewTwo', 'Onix', 'Eevee'];
console.log(roster.length);

// ==================================================================
console.log("Challenge #2:");
// push the user's first command line argument to the end of the 
// "roster" array (ideally, it's a pokemon's name!)
// console.log the "roster" array

let firstCommand = process.argv[2];
roster.push(firstCommand);
console.log(roster);

// ==================================================================
console.log("Challenge #3:");
// remove the item from the "roster" array that corresponds to 
// the user's second command line argument
// NOTE: consider what data type command line arguments come in as
// console.log the "roster" array

roster.pop();
console.log(roster);

//////////////////
// CONDITIONALS //
//////////////////
console.log("Challenge #4:");
// Create a variable called "catchChance" and set it equal to .25
// Note: this corresponds to a 25% chance to catch a pokemon!

let catchChance = 0.25;

// Create a variable called "catchAttempt" and set it equal to 
// Math.random()

let catchAttempt = Math.random();

// Note: we'll learn more about Math.random() later, but for now
// just think of it as equal to a random decimal between 0 and 1

// If "catchAttempt" is less than "catchChance" console.log "Caught it!"
// Otherwise, console.log "Aargh! Almost had it!"

if (catchAttempt < catchChance) {
    console.log("Caught it!");
} else {
    console.log("Aargh! Almost had it!");
}

// ==================================================================
console.log("Challenge #5:");
// If the number of pokemon in the "roster" array is less than 6
// Add an empty string to the "roster" array (signifying an empty
// spot)

if (roster.length < 6) {
    roster.push("");
}

// Console.log the "roster" array

console.log(roster);

// ==================================================================
console.log("Challenge #6:");
const elements = ["plant","fire","water"];
const enemyAttackType = elements[Math.floor(Math.random()*elements.length)];
// You've been provided a variable called "enemyAttackType" that is a 
// random string that can be "plant","fire",or "water".

// (assuming you have a "water" pokemon...)

// If the "enemyAttackType" is "plant", console.log "It's super effective!"
// Else if the "enemyAttackType" is "fire", console.log "It's not very effective!"
// Else if the "enemyAttackType" is "water", console.log "Nothing special happened!"
// Else console.log "Error, this isn't supposed to be seen!"

if (enemyAttackType == "plant") {
    console.log("It's super effective!");
} else if (enemyAttackType == "fire") {
    console.log("It's not very effective!");
} else if (enemyAttackType == "water") {
    console.log("Nothing special happened!");
} else {
    console.log("Error, this isn't supposed to be seen!")
}

// NOTE: Look up how to code a "switch". Depending on the situation,
// "switch" is better than using "if/else if" statements.


///////////
// LOOPS //
///////////
console.log("Challenge #7:");
// Console.log the first and last letter of each string in the
// "roster" array

for (let i = 0; i < roster.length; i++) {
    console.log(roster[i].charAt(0) + roster[i].charAt(roster[i].length - 1));
}

// ==================================================================
console.log("Challenge #8:");
// Console.log the average length of strings in the "roster" array

let total = 0;
for (i = 0; i < roster.length; i++) {
    total += roster[i].length
}
let num = roster.length;
let avg = total/num;

console.log(avg)

// ==================================================================
console.log("Challenge #9:");
const attackDmg = Math.floor(Math.random()*20);
// You've been provided a variable named "attackDmg" that is a random
// number.
// Create a variable called "health" and set it equal to 100;
// While "health" is above 0, subtract "attackDmg" from it and 
// console.log(`Health is at: ${health}`);

let health = 100;

while (health > 0) {
    health -= attackDmg;
} 

console.log(`Health is at: ${health}`);
// Hint: W3School While Loop : https://www.w3schools.com/jsref/jsref_while.asp

///////////
// BONUS //
///////////
console.log("Bonus #1:");
// Bonus #1:
// Console.log the sum of string lengths for all of the names in the
// "roster" array
let rosterSum = 0;
for (i = 0; i < roster.length; i++) {
    rosterSum += parseInt(roster[i].length);
}
console.log(rosterSum);
// ==================================================================
console.log("Bonus #2:");
// Bonus #2:
// If the last string in the "roster" array is "Ditto",
// Console.log "console.log" ('cause it's Ditto...get it!?)
// else, console.log the last string in the "roster" array 
if (roster[roster.length - 1] == 'Ditto') {
    console.log("console.log" + "('cause it\'s Ditto...get it!?')");
} else {
    console.log(roster[roster.length - 1]);
}

// ==================================================================
console.log("Bonus #3:");
// Bonus #3:
const enemyRoster = ["Bulbasaur","Raichu","Onix","Bob","",""];
// You've been provided an array of strings called "enemyRoster"
// Create a new empty array called "outcome"
// For each item in the "roster" array, if the length of the item is 
// greater or equal to the length of the corresponding indexed string
// in the "enemyRoster" array, then add "Win" to the "outcome" array.
// Otherwise, add "Loss" to the "outcome" array.

let outcome = [];
for (i = 0; i < roster.length; i++) {
    if (roster[i].length >= enemyRoster[i].length) {
        outcome.push('Win');
    } else {
        outcome.push('Loss');
    }
}

//Console.log the "outcome" array

console.log(outcome);