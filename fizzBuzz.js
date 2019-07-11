// const haveMoney = true;
// const hungry = true;

// if (haveMoney && hungry) {
//     console.log('Buying Burger');
// }

// const coldDrink = false;
// const airCondOn = true;

// if (coldDrink || airCondOn) {
//     console.log('Yay!')
// }

//if number is divisible by 3
//  Fizz
//if number is divisible by 5
//  Buzz
//if number is divisible by both
//  FizzBuzz
let x = process.argv[2];
//for (i = 0; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
    console.log("FizzBuzz");
    } else if (i % 3 == 0) {
    console.log("Fizz");
    } else if (i % 5 == 0){
    console.log("Buzz");
    } else {
        console.log();
    }
//}
