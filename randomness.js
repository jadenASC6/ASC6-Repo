//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////

function randomNumber(){
    let stepOne = Math.random();
    let stepTwo = stepOne * 21;
    let ranNum = Math.floor(stepTwo);
    console.log(ranNum)
}

randomNumber();

function randomLetter(){
    let stepOne = Math.random();
    let stepTwo = stepOne * alphabet.length;
    let stepThree = Math.floor(stepTwo);
    console.log(alphabet[stepThree]);
}

randomLetter();

function randomFood(){
    let stepOne = Math.random();
    let stepTwo = stepOne * foods.length;
    let stepThree = Math.floor(stepTwo);
    console.log(foods[stepThree]);
}

randomFood();

function randomStudent() {
    let stepOne = Math.random();
    let stepTwo = stepOne * students.length;
    let stepThree = Math.floor(stepTwo);
    console.log(students[stepThree]);
}

randomStudent();

function randomGroup() {
    for (i = 0; i < 3; i++){
       console.log(`Student 1: ${randomStudent()}`)
       console.log(`Student 1: ${randomStudent()}`)
       onsole.log(`Student 1: ${randomStudent()}`)
    }
}

randomStudent();