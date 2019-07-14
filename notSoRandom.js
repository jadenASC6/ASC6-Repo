function random(num) {
    console.log(Math.floor(Math.random()*(num)));
}
// random(10);
// random(100); 
// random(2);
function randomLetter(word) {
    let rand = Math.floor(Math.random()*word.length);
    let index = word[rand];
    console.log(index);

    //console.log(word[Math.floor(Math.random()*word.length)]);
}
// randomLetter('blah');
// randomLetter('abcdefg');
// randomLetter('z');

function myGuy(input) {
    console.log( `${input}, my guy`)
}
//myGuy('Take it easy');

function string_N_times(string, number) {
    for (i = 0; i < number ; i++ ) {
        console.log(string);
    }
}
//string_N_times('Fawzy was here!', 6);

function hypotenuse(num1, num2) {
    let hypo = Math.sqrt(Math.pow(num1,2) + Math.pow(num2,2));
    console.log(hypo);
}
//hypotenuse(3,4);
let arr = [];
let num = 4;
//function noRepeat(num) {
    let rand = Math.floor(Math.random()*(num));
        if (rand != arr) {
            console.log(rand);
            for (i = 0; i < num; i++) {
                arr.push(rand);
            }
        } else {
            console.log('nop')
        }

//}
console.log(arr);
// noRepeat(5);